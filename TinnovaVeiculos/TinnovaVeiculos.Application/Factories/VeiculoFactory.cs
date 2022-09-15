using System.Collections.Generic;
using TinnovaVeiculos.Application.DTOs;
using TinnovaVeiculos.Application.Interfaces;
using TinnovaVeiculos.Domain.Entities;

namespace TinnovaVeiculos.Application.Factories
{
    public class VeiculoFactory : IVeiculoFactory
    {
        public Veiculo ToCreate(VeiculoDTO dto)
        {
            return new Veiculo(dto.Modelo, dto.Marca, dto.AnoFabricacao, dto.Descricao);
        }

        public IEnumerable<Veiculo> ToCreate(IEnumerable<VeiculoDTO> dtos)
        {
            foreach (var dto in dtos)
            {
                yield return ToCreate(dto);
            }
        }
    }
}
