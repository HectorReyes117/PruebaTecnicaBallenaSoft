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

        public async Task<bool> InsertInsurance(Insurance Insurance)
        {
            try
            {
                await _unitOfWork.InsuranceRepository.Add(Insurance);
                await _unitOfWork.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> UpdateInsurance(Insurance Insurance)
        {
            var result = await _unitOfWork.InsuranceRepository.GetById(Insurance.Id);
            if (result == null)
            {
                return false;
            }
            result.Name = Insurance.Name;
            result.Commission = Insurance.Commission;
            result.UpdateDate = DateTime.Now;
            _unitOfWork.InsuranceRepository.Update(result);
            _unitOfWork.SaveChanges();
            return true;
        }

        public async Task<bool> DeleteInsurance(int id)
        {
            var result = _unitOfWork.InsuranceRepository.GetById(id);
            if (result.Result == null)
            {
                return false;
            }

            await _unitOfWork.InsuranceRepository.Delete(id);
           await _unitOfWork.SaveChangesAsync();
           return true;
        }
    }
}
