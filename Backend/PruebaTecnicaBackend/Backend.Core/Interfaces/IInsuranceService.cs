using Backend.Core.Entities;

namespace Backend.Core.Interfaces
{
    public interface IInsuranceService
    {
        IEnumerable<Insurance> GetInsurances();
        Task InsertInsurance(Insurance insurance);
        bool UpdateInsurance(Insurance insurance);
        Task<bool> DeleteInsurance(int id);
    }
}
