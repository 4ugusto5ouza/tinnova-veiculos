using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TinnovaVeiculos.Domain.Entities;

namespace TinnovaVeiculos.Infrastruture.Data.EntitiesConfigs
{
    public class VeiculoEntityConfig : IEntityTypeConfiguration<Veiculo>
    {
        public void Configure(EntityTypeBuilder<Veiculo> builder)
        {
            builder.ToTable("Veiculos");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Modelo)
                .HasColumnName("Veiculo")
                .IsRequired();
            builder.Property(x => x.Marca)
                .HasColumnName("Marca")
                .IsRequired();
            builder.Property(x => x.AnoFabricacao)
                .HasColumnName("Ano")
                .IsRequired();
            builder.Property(x => x.Descricao)
                .HasColumnName("Descricao")
                .IsRequired();
            builder.Property(x => x.Vendido)
                .HasColumnName("Vendido")
                .IsRequired();
            builder.Property(x => x.DataRegistro)
                .HasColumnName("Created")
                .IsRequired();
            builder.Property(x => x.DataAtualizacao)
                .HasColumnName("Updated")
                .IsRequired();
        }
    }
}
