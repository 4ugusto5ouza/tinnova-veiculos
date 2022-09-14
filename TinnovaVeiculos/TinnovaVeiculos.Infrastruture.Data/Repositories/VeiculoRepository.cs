using TinnovaVeiculos.Domain.Entities;
using TinnovaVeiculos.Domain.Interfaces.Repositories;
using TinnovaVeiculos.Infrastruture.Data.Contexts;

namespace TinnovaVeiculos.Infrastruture.Data.Repositories
{
    public class VeiculoRepository: RepositoryBase<Veiculo>, IVeiculoRepository
    {
        private readonly TinnovaVeiculosDbContext _context;
        public VeiculoRepository(TinnovaVeiculosDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
