using TinnovaVeiculos.Application.Interfaces;
using TinnovaVeiculos.Domain.Entities;
using TinnovaVeiculos.Domain.Interfaces.Repositories;

namespace TinnovaVeiculos.Application.AppServices
{
    public class VeiculoAppService : AppServiceBase<Veiculo>, IVeiculoAppService
    {
        private readonly IVeiculoRepository _repository;

        public VeiculoAppService(IVeiculoRepository repository): base(repository)
        {
            _repository = repository;
        }
    }
}
