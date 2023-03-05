using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.DTOs
{
    public class InsuranceDTO
    {
        public string? Name { get; set; }
        public double Commission { get; set; }
        public bool State { get; set; }
    }

    public class InsuranceDTO2 : InsuranceDTO
    {
        public int Id { get; set; }
    }


}
