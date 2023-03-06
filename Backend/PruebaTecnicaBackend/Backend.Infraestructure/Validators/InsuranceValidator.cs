using Backend.Core.DTOs;
using Backend.Core.Entities;
using FluentValidation;
using System.Data;

namespace Backend.Infraestructure.Validators
{
    public class InsuranceValidator : AbstractValidator<InsuranceDTO> 
    {
        public InsuranceValidator()
        {
            RuleFor(x => x.Name)
                .Length(1, 45).WithMessage("Debe contener entre 1 y 45 caracteres");
            RuleFor(x => x.Commission)
                .LessThan(0.25)
                .GreaterThan(0).WithMessage("Debe contener un porcentaje mas pequeño de 0.25 y mas grande de 0");   
        }
    }
}
