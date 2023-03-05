using Backend.Infraestructure.Middleware;
using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Infraestructure.Extensions
{
    public static class MiddlewareExtension
    {
        public static void ValidateTokenFromHeader(this IApplicationBuilder app)
        {
            app.UseMiddleware<TokenMiddleware>();
        }
    }
}
