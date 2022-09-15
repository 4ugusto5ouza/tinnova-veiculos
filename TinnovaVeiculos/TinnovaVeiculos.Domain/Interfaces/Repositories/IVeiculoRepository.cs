using System.Collections.Generic;
using TinnovaVeiculos.Domain.Entities;
using TinnovaVeiculos.Domain.Filters;

namespace TinnovaVeiculos.Domain.Interfaces.Repositories
{
    public interface IVeiculoRepository : IRepositoryBase<Veiculo>
    {
        IEnumerable<Veiculo> GetAllAsNoTracking(GetAllVeiculoFilters filters, int page, int limit);
    }
}
