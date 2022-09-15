using Microsoft.Extensions.DependencyInjection;
using TinnovaVeiculos.Application.AppServices;
using TinnovaVeiculos.Application.Factories;
using TinnovaVeiculos.Application.Interfaces;
using TinnovaVeiculos.Application.MappingsProfiles;
using TinnovaVeiculos.Application.Updaters;
using TinnovaVeiculos.Domain.Interfaces.Repositories;
using TinnovaVeiculos.Infrastruture.Data.Repositories;

namespace TinnovaVeiculos.Presentation.WebAPI.ServicesConfiguration
{
    public static class DependencyInjectionConfig
    {
        public static void AddDependencyInjectionConfiguration(this IServiceCollection services)
        {
            #region Veiculo
            services.AddScoped<IVeiculoAppService, VeiculoAppService>();
            services.AddScoped<IVeiculoRepository, VeiculoRepository>();
            services.AddScoped<IVeiculoProjector, VeiculoProjector>();
            services.AddScoped<IVeiculoFactory, VeiculoFactory>();
            services.AddScoped<IVeiculoUpdater, VeiculoUpdater>();
            #endregion
        }
    }
}
