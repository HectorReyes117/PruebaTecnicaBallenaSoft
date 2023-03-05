using Backend.Core.Entities;

namespace Backend.Core.Interfaces
{
    public interface IInsuranceService
    {
        IEnumerable<Insurance> GetInsurances();
        Task<bool> InsertInsurance(Insurance insurance);
        Task<bool> UpdateInsurance(Insurance insurance);
        Task<bool> DeleteInsurance(int id);
    }
}
