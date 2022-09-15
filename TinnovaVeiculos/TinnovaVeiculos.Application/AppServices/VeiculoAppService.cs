using System.Collections.Generic;
using System.Linq;
using TinnovaVeiculos.Application.DTOs;
using TinnovaVeiculos.Application.Interfaces;
using TinnovaVeiculos.Domain.Entities;
using TinnovaVeiculos.Domain.Filters;
using TinnovaVeiculos.Domain.Interfaces.Repositories;

namespace TinnovaVeiculos.Application.AppServices
{
    public class VeiculoAppService : AppServiceBase<Veiculo>, IVeiculoAppService
    {
        private readonly IVeiculoRepository _repository;
        private readonly IVeiculoProjector _projector;

        public VeiculoAppService(IVeiculoRepository repository, IVeiculoProjector projector) : base(repository)
        {
            _repository = repository;
            _projector = projector;
        }

        public IEnumerable<VeiculoDTO> GetAllAsNoTracking(GetAllVeiculoFilters filters, int page, int limit)
        {
            return _projector.ToProject(_repository.GetAllAsNoTracking(filters, page, limit));
        }
    }
}
