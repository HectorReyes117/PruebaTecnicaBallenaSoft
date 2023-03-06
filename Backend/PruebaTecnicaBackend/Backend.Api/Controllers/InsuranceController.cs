using AutoMapper;
using Backend.Api.Responses;
using Backend.Core.DTOs;
using Backend.Core.Entities;
using Backend.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsuranceController : ControllerBase
    {
        private readonly IInsuranceService _insuranceService;
        private readonly IMapper _mapper;

        public InsuranceController(IInsuranceService insuranceService, IMapper mapper)
        {
            this._insuranceService= insuranceService;
            this._mapper=mapper;
        }

        [HttpGet]
        public IActionResult GetInsurances()
        {
            var response = new ApiResponses();
            var insurance = _insuranceService.GetInsurances();
            var postDto = _mapper.Map<IEnumerable<InsuranceDTO2>>(insurance);
            if (insurance.Count() > 0)
            {
                response.Message = "Consulta Exitosa";
                response.IsSuccess = true;
                response.Data= postDto;
            }
            else
            {
                response.Message = "No hay datos";
            }
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> InsertInsurance(InsuranceDTO insuranceDTO)
        {
            var response = new ApiResponses();
            var insurance = _mapper.Map<Insurance>(insuranceDTO);
            insurance.CreationDate = DateTime.Now;
            var resultInsert = await _insuranceService.InsertInsurance(insurance);
            if (!resultInsert)
            {
                response.Message = "Error al insertar el Insurance";
                return BadRequest(response);
            }

            response.Message = "Insercion exitosa";
            response.IsSuccess = true;
            response.Data = insuranceDTO;
            return Ok(response);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateInsurance(int id, InsuranceDTO insuranceDTO)
        {
            var response = new ApiResponses();
            var insurance = _mapper.Map<Insurance>(insuranceDTO);
            insurance.Id = id;
            var result = await _insuranceService.UpdateInsurance(insurance);
            if (!result)
            {
                response.Message = "Error al actualizar el Insurance";
                return BadRequest(response);
            }

            response.Message = "Actualizacion exitosa";
            response.IsSuccess = true;
            response.Data = insuranceDTO;
            return Ok(response);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteInsurance(int id)
        {
            var response = new ApiResponses();
            var result = await _insuranceService.DeleteInsurance(id);
            if (!result)
            {
                response.Message = "Error al borrar el Insurance";
                return BadRequest(response);
            }

            response.Message = "Insurance borrada exitosamente";
            response.IsSuccess = true;
            response.Data = true;
            return Ok(response);
        }
    }
}
