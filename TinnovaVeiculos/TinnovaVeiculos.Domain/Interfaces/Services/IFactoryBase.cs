using System.Collections.Generic;

namespace TinnovaVeiculos.Domain.Interfaces.Services
{
    public interface IFactoryBase<TEntity, TDto> where TEntity : class where TDto : class
    {
        TEntity ToCreate(TDto dto);
        IEnumerable<TEntity> ToCreate(IEnumerable<TDto> dtos);
    }

}
