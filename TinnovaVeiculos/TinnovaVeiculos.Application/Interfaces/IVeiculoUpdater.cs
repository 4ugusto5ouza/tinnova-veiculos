using TinnovaVeiculos.Application.DTOs;
using TinnovaVeiculos.Domain.Entities;
using TinnovaVeiculos.Domain.Interfaces.Services;

namespace TinnovaVeiculos.Application.Interfaces
{
    public interface IVeiculoUpdater : IUpdaterBase<Veiculo, VeiculoDTO>
    {
    }
}
