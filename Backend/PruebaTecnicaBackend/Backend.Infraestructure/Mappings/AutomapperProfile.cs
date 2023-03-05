using AutoMapper;
using Backend.Core.DTOs;
using Backend.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infraestructure.Mappings
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<Insurance, InsuranceDTO>();
            CreateMap<InsuranceDTO, Insurance>();
            CreateMap<Insurance, InsuranceDTO2>();
            CreateMap<InsuranceDTO2, Insurance>();
        }
    }
}
