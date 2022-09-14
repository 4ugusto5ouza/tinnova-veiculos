using System.Collections.Generic;
using TinnovaVeiculos.Application.DTOs;
using TinnovaVeiculos.Application.Interfaces;
using TinnovaVeiculos.Domain.Entities;

namespace TinnovaVeiculos.Application.MappingsProfiles
{
    public class VeiculoProjector : IVeiculoProjector
    {
        public VeiculoDTO ToProject(Veiculo entity)
        {
            return new VeiculoDTO()
            {
                Id = entity.Id,
                Modelo = entity.Modelo,
                Marca = entity.Marca,
                AnoFabricacao = entity.AnoFabricacao,
                Descricao = entity.Descricao,
                DataRegistro = entity.DataRegistro,
                DataAtualizacao = entity.DataAtualizacao
            };
        }

        public IEnumerable<VeiculoDTO> ToProject(IEnumerable<Veiculo> entities)
        {
            foreach (var entity in entities)
            {
                yield return ToProject(entity);
            }
        }
    }
}
