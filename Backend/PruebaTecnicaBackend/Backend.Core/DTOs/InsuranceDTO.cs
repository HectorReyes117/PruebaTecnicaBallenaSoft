using System;
using System.Collections.Generic;
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
}
