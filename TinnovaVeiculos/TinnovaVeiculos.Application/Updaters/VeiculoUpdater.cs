using System.Collections.Generic;
using TinnovaVeiculos.Application.DTOs;
using TinnovaVeiculos.Application.Interfaces;
using TinnovaVeiculos.Domain.Entities;

namespace TinnovaVeiculos.Application.Updaters
{
    public class VeiculoUpdater : IVeiculoUpdater
    {
        public Veiculo ToUpdate(VeiculoDTO dto)
        {
            var entity = new Veiculo(dto.Id, dto.Modelo, dto.Marca, dto.AnoFabricacao, dto.Descricao, dto.DataRegistro);

            entity.SetVendido(dto.Vendido);
            entity.SetDataAtualizacao();

            return entity;
        }

        public IEnumerable<Veiculo> ToUpdate(IEnumerable<VeiculoDTO> dtos)
        {
            foreach (var dto in dtos)
            {
                yield return ToUpdate(dto);
            }
        }
    }
}
