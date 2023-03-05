using Backend.Core.Entities;
using Backend.Core.Interfaces;

namespace Backend.Core.Services
{
    public class InsuranceService : IInsuranceService
    {
        private readonly IUnitOfWork _unitOfWork;
        public InsuranceService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }
        public IEnumerable<Insurance> GetInsurances()
        {
            return _unitOfWork.InsuranceRepository.GetAll();
        }

        public async Task InsertInsurance(Insurance Insurance)
        {
            await _unitOfWork.InsuranceRepository.Add(Insurance);
            await _unitOfWork.SaveChangesAsync();
        }

        public bool UpdateInsurance(Insurance Insurance)
        {
           _unitOfWork.InsuranceRepository.Update(Insurance);
            _unitOfWork.SaveChanges();
            return true;
        }
        public async Task<bool> DeleteInsurance(int id)
        {
           await _unitOfWork.InsuranceRepository.Delete(id);
           await _unitOfWork.SaveChangesAsync();
           return true;
        }
    }
}
