using Backend.Core.Interfaces;
using Backend.Core.Services;
using Backend.Infraestructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Infraestructure.Extensions
{
    public static class RepositoriesRegistrations
    {
        public static void RegisterRepositories(this IServiceCollection services)
        {
            services.AddTransient<IInsuranceService, InsuranceService>();
            services.AddScoped(typeof(IRepository<>), typeof(BaseRepository<>));
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }
    }
}
