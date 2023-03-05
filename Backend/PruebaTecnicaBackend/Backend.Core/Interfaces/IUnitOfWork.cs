using Backend.Core.Entities;

namespace Backend.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Insurance> InsuranceRepository { get; }
        void SaveChanges();
        Task SaveChangesAsync();
    }
}
