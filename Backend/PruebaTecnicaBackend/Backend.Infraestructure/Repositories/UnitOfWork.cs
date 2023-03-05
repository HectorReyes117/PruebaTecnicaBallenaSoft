using Backend.Core.Entities;
using Backend.Core.Interfaces;
using Backend.Infraestructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infraestructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationContext _context;
        private IRepository<Insurance> _insuranceRepository;
        public UnitOfWork(ApplicationContext context)
        {
            this._context = context;
        }
        public IRepository<Insurance> InsuranceRepository => _insuranceRepository ?? new BaseRepository<Insurance>(_context);

        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }
         public void SaveChanges()
        {
           _context.SaveChanges();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
