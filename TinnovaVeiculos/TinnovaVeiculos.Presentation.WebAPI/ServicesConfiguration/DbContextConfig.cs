using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using TinnovaVeiculos.Infrastruture.Data.Contexts;

namespace TinnovaVeiculos.Presentation.WebAPI.ServicesConfiguration
{
    public static class DbContextConfig
    {
        public static readonly ILoggerFactory TinovvaVeiculosDBLoggerFactory = LoggerFactory.Create(builder => { builder.AddConsole(); });

        public static void AddDbContextConfiguration(this IServiceCollection services, IConfiguration config)
        {

            services.AddDbContext<TinnovaVeiculosDbContext>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
                options.UseLoggerFactory(TinovvaVeiculosDBLoggerFactory);
                //options.EnableSensitiveDataLogging();
                //options.EnableDetailedErrors();
            });
        }
    }
}
