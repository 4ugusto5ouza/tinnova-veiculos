using System;
using System.Collections.Generic;
using System.Text;

namespace TinnovaVeiculos.Domain.Interfaces.Services
{
    public interface IProjectorBase<TEntity, TDto> where TEntity : class where TDto : class
    {
        TDto ToProject(TEntity entity);
        IEnumerable<TDto> ToProject(IEnumerable<TEntity> entities);
    }
}
