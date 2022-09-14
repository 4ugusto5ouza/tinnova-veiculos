using System.Collections.Generic;
using TinnovaVeiculos.Domain.Interfaces.Repositories;
using TinnovaVeiculos.Domain.Interfaces.Services;

namespace TinnovaVeiculos.Application.AppServices
{
    public class AppServiceBase<TEntity> : IAppServiceBase<TEntity> where TEntity : class
    {
        private readonly IRepositoryBase<TEntity> _repository;

        public AppServiceBase(IRepositoryBase<TEntity> repository)
        {
            _repository = repository;
        }

        public TEntity GetById(long id)
        {
            return _repository.GetById(id);
        }

        public IEnumerable<TEntity> GetAllAsNoTracking()
        {
            return _repository.GetAllAsNoTracking();
        }

        public void Create(TEntity entity)
        {
            _repository.Create(entity);
        }

        public void Update(TEntity entity)
        {
            _repository.Update(entity);
        }

        public void Delete(TEntity entity)
        {
            _repository.Delete(entity);
        }

        public void Commit()
        {
            _repository.Commit();
        }

        public void Dispose()
        {
            _repository.Dispose();
        }
    }
}
