using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System.Globalization;
using TinnovaVeiculos.Application.EntitiesValidators;

namespace TinnovaVeiculos.Presentation.WebAPI.ServicesConfiguration
{
    public static class FluentValidationConfig
    {
        public static void AddFluentValidationConfiguration(this IServiceCollection services)
        {
            services.AddControllers()
                    .AddNewtonsoftJson(nj => nj.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore)
                    .AddFluentValidation(fv =>
                    {
                        fv.RegisterValidatorsFromAssemblyContaining<VeiculoDTOValidator>();
                        fv.ValidatorOptions.LanguageManager.Culture = new CultureInfo("pt-BR");
                    });

        }
    }
}
