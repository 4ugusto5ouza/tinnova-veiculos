using System.Collections.Generic;

namespace TinnovaVeiculos.Domain.Interfaces.Services
{
    public interface IProjectorBase<TEntity, TDto> where TEntity : class where TDto : class
    {
        TDto ToProject(TEntity entity);
        IEnumerable<TDto> ToProject(IEnumerable<TEntity> entities);
    }
}
