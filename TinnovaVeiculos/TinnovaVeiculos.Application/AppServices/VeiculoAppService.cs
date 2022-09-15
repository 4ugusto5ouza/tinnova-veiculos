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
        private readonly IVeiculoFactory _factory;
        private readonly IVeiculoUpdater _updater;


        public VeiculoAppService(IVeiculoRepository repository, IVeiculoProjector projector, IVeiculoFactory factory, IVeiculoUpdater updater) : base(repository)
        {
            _repository = repository;
            _projector = projector;
            _factory = factory;
            _updater = updater;
        }

        public IEnumerable<VeiculoDTO> GetAllAsNoTracking(GetAllVeiculoFilters filters, int page, int limit)
        {
            return _projector.ToProject(_repository.GetAllAsNoTracking(filters, page, limit));
        }

        public void Create(VeiculoDTO dto)
        {
            _repository.Create(_factory.ToCreate(dto));
            _repository.Commit();
        }

        public void Update(VeiculoDTO dto)
        {
            _repository.Update(_updater.ToUpdate(dto));
            _repository.Commit();
        }
    }
}
