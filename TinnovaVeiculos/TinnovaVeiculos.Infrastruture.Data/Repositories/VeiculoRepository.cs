using System.Collections.Generic;
using System.Linq;
using TinnovaVeiculos.Domain.Entities;
using TinnovaVeiculos.Domain.Filters;
using TinnovaVeiculos.Domain.Interfaces.Repositories;
using TinnovaVeiculos.Infrastruture.Data.Contexts;

namespace TinnovaVeiculos.Infrastruture.Data.Repositories
{
    public class VeiculoRepository : RepositoryBase<Veiculo>, IVeiculoRepository
    {
        private readonly TinnovaVeiculosDbContext _context;
        public VeiculoRepository(TinnovaVeiculosDbContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<Veiculo> GetAllAsNoTracking(GetAllVeiculoFilters filters, int page, int limit)
        {

            var veiculos = GetAllAsNoTracking();

            var query = from entity in veiculos select entity;

            if (filters.AnoFabricacaoMaximo.HasValue)
                query = from entity in query where entity.AnoFabricacao <=  filters.AnoFabricacaoMaximo.Value.Year select entity;

            if (filters.AnoFabricacaoMinimo.HasValue)
                query = from entity in query where entity.AnoFabricacao >=  filters.AnoFabricacaoMinimo.Value.Year select entity;

            if (filters.DataRegistroMaximo.HasValue)
                query = from entity in query where entity.DataRegistro <=  filters.DataRegistroMaximo.Value select entity;

            if (filters.DataRegistroMinimo.HasValue)
                query = from entity in query where entity.DataRegistro <=  filters.DataRegistroMinimo.Value select entity;

            if (!string.IsNullOrEmpty(filters.Marca))
                query = from entity in query where entity.Marca.Contains(filters.Marca) select entity;

            return query.OrderBy(q => q.Id)
                        .Skip(page)
                        .Take(limit)
                        .ToList();
        }
    }
}
