using AutoFixture;
using Backend.Core.Entities;
using Backend.Core.Interfaces;
using Backend.Infraestructure.Data;
using Backend.Infraestructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Xunit;
namespace Backend.UnitTest
{

    public class InsuranceControllerTests
    {

        private BaseRepository<Insurance> Base;

        public void Setup()
        {
            var fixture = new Fixture();
            var insurances = fixture.CreateMany<Insurance>().ToList();
            insurances.Add(fixture.Build<Insurance>() 
                .With(tr => tr.Id, 0)
                .Create());

            var options = new DbContextOptionsBuilder<ApplicationContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString()).Options;

            var ApplicationContextFake = new ApplicationContext(options);
            ApplicationContextFake.AddRange(insurances);
            ApplicationContextFake.SaveChanges();

            Base = new BaseRepository<Insurance>(ApplicationContextFake);
                
        }
        [Fact]
        public void GetAll_notNull()
        {
            Setup();
            var resultado = Base.GetAll();
            Xunit.Assert.NotNull(resultado);
        }

        [Fact]
        public async Task GetById_NotNull()
        {
            Setup();
            var resultado = Base.GetAll();
            var id = resultado.First().Id;
            var result = await Base.GetById(id);
            Xunit.Assert.NotNull(result);
        }

        [Fact]
        public async Task GetById_Null()
        {
            Setup();
            int id = 123;
            var result = await Base.GetById(id);
            Xunit.Assert.Null(result); 
        }





    }
}
