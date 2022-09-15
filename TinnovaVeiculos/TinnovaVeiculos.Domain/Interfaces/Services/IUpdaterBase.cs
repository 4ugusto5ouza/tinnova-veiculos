using System.Collections.Generic;

namespace TinnovaVeiculos.Domain.Interfaces.Services
{
    public interface IUpdaterBase<TEntity, TDto> where TEntity : class where TDto : class
    {
        TEntity ToUpdate(TDto dto);
        IEnumerable<TEntity> ToUpdate(IEnumerable<TDto> dtos);
    }
}
