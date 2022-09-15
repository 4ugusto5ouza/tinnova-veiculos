using System.Collections.Generic;
using TinnovaVeiculos.Application.DTOs;
using TinnovaVeiculos.Domain.Entities;
using TinnovaVeiculos.Domain.Filters;
using TinnovaVeiculos.Domain.Interfaces.Services;

namespace TinnovaVeiculos.Application.Interfaces
{
    public interface IVeiculoAppService : IAppServiceBase<Veiculo>
    {
        IEnumerable<VeiculoDTO> GetAllAsNoTracking(GetAllVeiculoFilters filters, int page, int limit);
        void Create(VeiculoDTO dto);
        void Update(VeiculoDTO dto);
    }
}
