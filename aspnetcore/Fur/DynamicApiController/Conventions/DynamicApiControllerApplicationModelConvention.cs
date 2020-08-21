﻿using Fur.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.Routing;
using System;
using System.Linq;
using System.Text.RegularExpressions;

namespace Fur.DynamicApiController
{
    /// <summary>
    /// 动态接口控制器应用模型转换器
    /// </summary>
    public sealed class DynamicApiControllerApplicationModelConvention : IApplicationModelConvention
    {
        /// <summary>
        /// 动态接口控制器配置实例
        /// </summary>
        private readonly DynamicApiControllerSettingsOptions _lazyControllerSettings;

        /// <summary>
        /// 构造函数
        /// </summary>
        public DynamicApiControllerApplicationModelConvention()
        {
            _lazyControllerSettings = App.GetOptions<DynamicApiControllerSettingsOptions>();
        }

        /// <summary>
        /// 配置应用模型信息
        /// </summary>
        /// <param name="application">引用模型</param>
        public void Apply(ApplicationModel application)
        {
            var controllers = application.Controllers;
            foreach (var controller in controllers)
            {
                // 判断是否处理 Mvc控制器
                if (typeof(ControllerBase).IsAssignableFrom(controller.ControllerType))
                {
                    if (!_lazyControllerSettings.SupportedMvcController.Value || controller.ApiExplorer?.IsVisible == false) continue;
                }

                var apiDescriptionSettings = controller.Attributes.FirstOrDefault(u => u is ApiDescriptionSettingsAttribute) as ApiDescriptionSettingsAttribute;
                ConfigureController(controller, apiDescriptionSettings);
            }
        }

        /// <summary>
        /// 配置控制器
        /// </summary>
        /// <param name="controller">控制器模型</param>
        /// <param name="apiDescriptionSettings">接口描述配置</param>
        private void ConfigureController(ControllerModel controller, ApiDescriptionSettingsAttribute apiDescriptionSettings)
        {
            // 配置控制器名称
            ConfigureControllerName(controller, apiDescriptionSettings);

            var actions = controller.Actions;
            foreach (var action in actions)
            {
                var actionApiDescriptionSettings = action.Attributes.FirstOrDefault(u => u is ApiDescriptionSettingsAttribute) as ApiDescriptionSettingsAttribute;
                ConfigureAction(action, actionApiDescriptionSettings, apiDescriptionSettings);
            }
        }

        /// <summary>
        /// 配置控制器名称
        /// </summary>
        /// <param name="controller">控制器模型</param>
        /// <param name="apiDescriptionSettings">接口描述配置</param>
        private void ConfigureControllerName(ControllerModel controller, ApiDescriptionSettingsAttribute apiDescriptionSettings)
        {
            // 获取版本号
            var apiVersion = apiDescriptionSettings?.Version;

            // 解析控制器名称
            // 判断是否有自定义名称
            string tempName = apiDescriptionSettings?.Name;
            if (string.IsNullOrEmpty(tempName))
            {
                // 处理版本号
                var (name, version) = ResolveNameVersion(controller.ControllerName);
                tempName = name;
                apiVersion ??= version;

                // 判断是否保留原有名称
                if (apiDescriptionSettings?.KeepName != true)
                {
                    // 清除指定前后缀
                    tempName = Penetrates.ClearStringAffixes(tempName, affixes: _lazyControllerSettings.AbandonControllerAffixes);

                    // 处理骆驼命名
                    if ((apiDescriptionSettings?.SplitCamelCase ?? true) != false)
                    {
                        tempName = string.Join(_lazyControllerSettings.CamelCaseSeparator, Penetrates.SplitCamelCase(tempName));
                    }
                }
            }

            // 拼接名称和版本号
            var controllerName = $"{tempName}{(string.IsNullOrEmpty(apiVersion) ? null : $"{_lazyControllerSettings.VersionSeparator}{apiVersion}")}";
            controller.ControllerName = _lazyControllerSettings.LowercaseRoute.Value ? controllerName.ToLower() : controllerName;
        }

        /// <summary>
        /// 配置动作方法
        /// </summary>
        /// <param name="action">控制器模型</param>
        /// <param name="apiDescriptionSettings">接口描述配置</param>
        /// <param name="controllerApiDescriptionSettings">控制器接口描述配置</param>
        private void ConfigureAction(ActionModel action, ApiDescriptionSettingsAttribute apiDescriptionSettings, ApiDescriptionSettingsAttribute controllerApiDescriptionSettings)
        {
            // 配置动作方法接口可见性
            ConfigureActionApiExplorer(action);

            // 配置动作方法名称
            ConfigureActionName(action, apiDescriptionSettings);

            // 配置动作方法请求谓词特性
            ConfigureActionHttpMethodAttribute(action);

            // 配置引用类型参数
            ConfigureClassTypeParameter(action);

            // 配置动作方法路由特性
            ConfigureActionRouteAttribute(action, apiDescriptionSettings, controllerApiDescriptionSettings);
        }

        /// <summary>
        /// 配置动作方法接口可见性
        /// </summary>
        /// <param name="action">动作方法模型</param>
        private void ConfigureActionApiExplorer(ActionModel action)
        {
            if (!action.ApiExplorer.IsVisible.HasValue) action.ApiExplorer.IsVisible = true;
        }

        /// <summary>
        /// 配置动作方法名称
        /// </summary>
        /// <param name="action">动作方法模型</param>
        /// <param name="apiDescriptionSettings">接口描述配置</param>
        private void ConfigureActionName(ActionModel action, ApiDescriptionSettingsAttribute apiDescriptionSettings)
        {
            // 获取版本号
            var apiVersion = apiDescriptionSettings?.Version;

            // 解析控制器名称
            // 判断是否有自定义名称
            string tempName = apiDescriptionSettings?.Name;
            if (string.IsNullOrEmpty(tempName))
            {
                // 处理版本号
                var (name, version) = ResolveNameVersion(action.ActionName);
                tempName = name;
                apiVersion ??= version;

                // 判断是否保留原有名称
                if (apiDescriptionSettings?.KeepName != true)
                {
                    // 清除指定前后缀
                    tempName = Penetrates.ClearStringAffixes(tempName, affixes: _lazyControllerSettings.AbandonActionAffixes);

                    // 处理动作方法名称谓词
                    if (apiDescriptionSettings?.KeepVerb != true)
                    {
                        var verbKey = Penetrates.GetCamelCaseFirstWord(tempName).ToLower();
                        if (Penetrates.VerbToHttpMethods.ContainsKey(verbKey)) tempName = tempName[verbKey.Length..];
                    }

                    // 处理骆驼命名
                    if ((apiDescriptionSettings?.SplitCamelCase ?? true) != false)
                    {
                        tempName = string.Join(_lazyControllerSettings.CamelCaseSeparator, Penetrates.SplitCamelCase(tempName));
                    }
                }
            }

            // 拼接名称和版本号
            var actionName = $"{tempName}{(string.IsNullOrEmpty(apiVersion) ? null : $"{_lazyControllerSettings.VersionSeparator}{apiVersion}")}";
            action.ActionName = _lazyControllerSettings.LowercaseRoute.Value ? actionName.ToLower() : actionName;
        }

        /// <summary>
        /// 配置动作方法请求谓词特性
        /// </summary>
        /// <param name="action">动作方法模型</param>
        private void ConfigureActionHttpMethodAttribute(ActionModel action)
        {
            var selectorModel = action.Selectors[0];
            // 跳过已配置请求谓词特性的配置
            if (selectorModel.ActionConstraints.Count > 0) return;

            // 解析请求谓词
            var verbKey = Penetrates.GetCamelCaseFirstWord(action.ActionMethod.Name).ToLower();
            var verb = Penetrates.VerbToHttpMethods.ContainsKey(verbKey)
                ? Penetrates.VerbToHttpMethods[verbKey]
                : _lazyControllerSettings.DefaultHttpMethod.ToLower();

            // 添加请求约束
            selectorModel.ActionConstraints.Add(new HttpMethodActionConstraint(new[] { verb }));

            // 添加请求谓词特性
            HttpMethodAttribute httpMethodAttribute = verb switch
            {
                "GET" => new HttpGetAttribute(),
                "POST" => new HttpPostAttribute(),
                "PUT" => new HttpPutAttribute(),
                "DELETE" => new HttpDeleteAttribute(),
                _ => throw new NotSupportedException($"{verb}")
            };

            selectorModel.EndpointMetadata.Add(httpMethodAttribute);
        }

        /// <summary>
        /// 处理类类型参数（添加[FromBody] 特性）
        /// </summary>
        /// <param name="action"></param>
        private void ConfigureClassTypeParameter(ActionModel action)
        {
            // 没有参数无需处理
            if (action.Parameters.Count == 0) return;

            // 如果动作方法请求谓词只有GET和HEAD，则将类转查询参数
            if (_lazyControllerSettings.ModelToQuery.Value)
            {
                var httpMethods = action.Selectors
                    .SelectMany(u => u.ActionConstraints
                        .SelectMany(u => (u as HttpMethodActionConstraint).HttpMethods));

                if (httpMethods.All(u => u.Equals("GET") || u.Equals("HEAD"))) return;
            }

            var parameters = action.Parameters;
            foreach (var parameterModel in parameters)
            {
                // 如果参数已有绑定特性，则跳过
                if (parameterModel.BindingInfo != null) continue;

                var parameterType = parameterModel.ParameterType;
                // 如果是基元类型，则跳过
                if (parameterType.IsRichPrimitive()) continue;

                // 如果是文件类型，则跳过
                if (typeof(IFormFile).IsAssignableFrom(parameterType) || typeof(IFormFileCollection).IsAssignableFrom(parameterType)) continue;

                parameterModel.BindingInfo = BindingInfo.GetBindingInfo(new[] { new FromBodyAttribute() });
            }
        }

        /// <summary>
        /// 配置动作方法路由特性
        /// </summary>
        /// <param name="action">动作方法模型</param>
        /// <param name="apiDescriptionSettings">接口描述配置</param>
        /// <param name="controllerApiDescriptionSettingsAttribute">控制器接口描述配置</param>
        private void ConfigureActionRouteAttribute(ActionModel action, ApiDescriptionSettingsAttribute apiDescriptionSettings, ApiDescriptionSettingsAttribute controllerApiDescriptionSettingsAttribute)
        {
            var selectorModel = action.Selectors[0];
            // 跳过已配置路由特性的配置
            if (selectorModel.AttributeRouteModel != null) return;

            // 读取模块
            var module = apiDescriptionSettings?.Module;

            string template;
            string controllerRouteTemplate = null;
            // 如果动作方法名称为空、参数值为空，且无需保留谓词，则只生成控制器路由模板
            if (action.ActionName.Length == 0 && apiDescriptionSettings?.KeepVerb != true && action.Parameters.Count == 0)
            {
                template = GenerateControllerRouteTemplate(action.Controller, controllerApiDescriptionSettingsAttribute);
            }
            else
            {
                // 生成参数路由模板
                var parameterRouteTemplate = GenerateParameterRouteTemplates(action);

                // 生成控制器模板
                controllerRouteTemplate = GenerateControllerRouteTemplate(action.Controller, controllerApiDescriptionSettingsAttribute, parameterRouteTemplate);

                // 拼接动作方法路由模板
                var ActionStartTemplate = parameterRouteTemplate != null ? (parameterRouteTemplate.ActionStartTemplates.Count == 0 ? null : string.Join("/", parameterRouteTemplate.ActionStartTemplates)) : null;
                var ActionEndTemplate = parameterRouteTemplate != null ? (parameterRouteTemplate.ActionEndTemplates.Count == 0 ? null : string.Join("/", parameterRouteTemplate.ActionEndTemplates)) : null;

                // 判断是否定义了控制器路由，如果定义，则不拼接控制器路由
                template = string.IsNullOrEmpty(controllerRouteTemplate)
                     ? $"{(string.IsNullOrEmpty(module) ? null : $"{module}/")}{ActionStartTemplate}/{(string.IsNullOrEmpty(action.ActionName) ? null : "[action]")}/{ActionEndTemplate}"
                     : $"{controllerRouteTemplate}/{(string.IsNullOrEmpty(module) ? null : $"{module}/")}{ActionStartTemplate}/{(string.IsNullOrEmpty(action.ActionName) ? null : "[action]")}/{ActionEndTemplate}";
            }

            AttributeRouteModel actionAttributeRouteModel = null;
            if (!string.IsNullOrEmpty(template))
            {
                // 处理多个斜杆问题
                template = Regex.Replace(_lazyControllerSettings.LowercaseRoute.Value ? template.ToLower() : template, @"\/{2,}", "/");

                // 生成路由
                actionAttributeRouteModel = string.IsNullOrEmpty(template) ? null : new AttributeRouteModel(new RouteAttribute(template));
            }

            // 拼接路由
            selectorModel.AttributeRouteModel = string.IsNullOrEmpty(controllerRouteTemplate)
                ? (actionAttributeRouteModel == null ? null : AttributeRouteModel.CombineAttributeRouteModel(action.Controller.Selectors[0].AttributeRouteModel, actionAttributeRouteModel))
                : actionAttributeRouteModel;
        }

        /// <summary>
        /// 生成控制器路由模板
        /// </summary>
        /// <param name="controller"></param>
        /// <param name="apiDescriptionSettings"></param>
        /// <returns></returns>
        private string GenerateControllerRouteTemplate(ControllerModel controller, ApiDescriptionSettingsAttribute apiDescriptionSettings, ParameterRouteTemplate parameterRouteTemplate = default)
        {
            var selectorModel = controller.Selectors[0];
            // 跳过已配置路由特性的配置
            if (selectorModel.AttributeRouteModel != null) return default;

            // 读取模块
            var module = apiDescriptionSettings?.Module ?? _lazyControllerSettings.DefaultAreaName;

            // 路由默认前缀
            var routePrefix = _lazyControllerSettings.DefaultRoutePrefix;

            // 生成路由模板
            // 如果参数路由模板为空或不包含任何控制器参数模板，则返回正常的模板
            if (parameterRouteTemplate == null || (parameterRouteTemplate.ControllerStartTemplates.Count == 0 && parameterRouteTemplate.ControllerEndTemplates.Count == 0))
                return $"{(string.IsNullOrEmpty(routePrefix) ? null : $"{routePrefix}/")}{(string.IsNullOrEmpty(module) ? null : $"{module}/")}[controller]";

            // 拼接控制器路由模板
            var controllerStartTemplate = parameterRouteTemplate.ControllerStartTemplates.Count == 0 ? null : string.Join("/", parameterRouteTemplate.ControllerStartTemplates);
            var controllerEndTemplate = parameterRouteTemplate.ControllerStartTemplates.Count == 0 ? null : string.Join("/", parameterRouteTemplate.ControllerEndTemplates);
            var template = $"{(string.IsNullOrEmpty(routePrefix) ? null : $"{routePrefix}/")}{(string.IsNullOrEmpty(module) ? null : $"{module}/")}{controllerStartTemplate}/[controller]/{controllerEndTemplate}";

            return template;
        }

        /// <summary>
        /// 生成参数路由模板（非引用类型）
        /// </summary>
        /// <param name="action">动作方法模型</param>
        private ParameterRouteTemplate GenerateParameterRouteTemplates(ActionModel action)
        {
            // 如果没有参数，则跳过
            if (action.Parameters.Count == 0) return default;

            var parameterRouteTemplate = new ParameterRouteTemplate();
            var parameters = action.Parameters;

            foreach (var parameterModel in parameters)
            {
                var parameterType = parameterModel.ParameterType;
                var parameterAttributes = parameterModel.Attributes;

                // 处理小写参数路由匹配问题
                if (_lazyControllerSettings.LowercaseRoute.Value) parameterModel.ParameterName = parameterModel.ParameterName.ToLower();

                // 如果没有贴 [FromRoute] 特性且不是基元类型，则跳过
                // 如果没有贴 [FromRoute] 特性且有任何绑定特性，则跳过
                if (!parameterAttributes.Any(u => u is FromRouteAttribute)
                    && (!parameterType.IsRichPrimitive() || parameterAttributes.Any(u => typeof(IBindingSourceMetadata).IsAssignableFrom(u.GetType())))) continue;

                var template = $"{{{parameterModel.ParameterName}}}";
                // 如果没有贴路由位置特性，则默认添加到动作方法后面
                if (!(parameterAttributes.FirstOrDefault(u => u is ApiSeatAttribute) is ApiSeatAttribute apiSeat))
                {
                    parameterRouteTemplate.ActionEndTemplates.Add(template);
                    continue;
                }

                // 生成路由参数位置
                switch (apiSeat.Seat)
                {
                    // 控制器名之前
                    case ApiSeats.ControllerStart:
                        parameterRouteTemplate.ControllerStartTemplates.Add(template);
                        break;
                    // 控制器名之后
                    case ApiSeats.ControllerEnd:
                        parameterRouteTemplate.ControllerEndTemplates.Add(template);
                        break;
                    // 动作方法名之前
                    case ApiSeats.ActionStart:
                        parameterRouteTemplate.ActionStartTemplates.Add(template);
                        break;
                    // 动作方法名之后
                    case ApiSeats.ActionEnd:
                        parameterRouteTemplate.ActionEndTemplates.Add(template);
                        break;

                    default: break;
                }
            }

            return parameterRouteTemplate;
        }

        /// <summary>
        /// 解析名称中的版本号
        /// </summary>
        /// <param name="name">名称</param>
        /// <returns>名称和版本号</returns>
        private (string name, string version) ResolveNameVersion(string name)
        {
            var regex = new Regex(@"V(?<version>[0-9_]+$)");
            if (!regex.IsMatch(name)) return (name, default);

            var version = regex.Match(name).Groups["version"].Value.Replace("_", ".");
            return ($"{regex.Replace(name, "")}", version);
        }
    }
}