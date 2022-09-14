using System.Collections.Generic;

namespace TinnovaVeiculos.Domain.Interfaces.Services
{
    public interface IAppServiceBase<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> GetAllAsNoTracking();
        TEntity GetById(long id);
        void Create(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
        void Commit();
        void Dispose();
    }
}
