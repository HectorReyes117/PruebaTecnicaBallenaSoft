using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Core.Entities
{
    public class Insurance : BaseEntity
    {
        public string Name { get; set; }
        public double Commission { get; set; }
        public bool State { get; set; }
    }
}
