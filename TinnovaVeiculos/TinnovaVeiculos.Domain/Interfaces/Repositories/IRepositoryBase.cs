using System.Collections.Generic;
using System.Linq;

namespace TinnovaVeiculos.Domain.Interfaces.Repositories
{
    public interface IRepositoryBase<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> GetAllAsNoTracking();
        TEntity GetById(long id);
        void Create(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
        IQueryable<TEntity> ExecuteCommandSql(string query);
        void Commit();
        void Dispose();
    }
}
