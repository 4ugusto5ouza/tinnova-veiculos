using Microsoft.EntityFrameworkCore;
using TinnovaVeiculos.Domain.Entities;
using TinnovaVeiculos.Infrastruture.Data.EntitiesConfigs;

namespace TinnovaVeiculos.Infrastruture.Data.Contexts
{
    public class TinnovaVeiculosDbContext : DbContext
    {

        public TinnovaVeiculosDbContext(DbContextOptions<TinnovaVeiculosDbContext> options) : base(options)
        {
        }

        public DbSet<Veiculo> Veiculos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration<Veiculo>(new VeiculoEntityConfig());
        }
    }
}
