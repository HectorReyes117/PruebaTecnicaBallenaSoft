using Microsoft.AspNetCore.Http;
using System.Text.Json;

namespace Backend.Infraestructure.Middleware
{
    public class TokenMiddleware
    {
        private readonly RequestDelegate _next;

        public TokenMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var response = context.Response;
            response.ContentType = "application/json";
            response.StatusCode = StatusCodes.Status401Unauthorized;

            var token = context.Request.Headers.FirstOrDefault(x => x.Key.ToLower().Equals("token".ToLower()));

            if (!string.IsNullOrEmpty(token.Key))
            {
                if (token.Key.ToString() == "token" && token.Value.ToString() == "1234")
                {
                    await _next.Invoke(context);
                }
                else
                {
                    await response.WriteAsync(JsonSerializer.Serialize(new { response = "Error 401" }));
                }
            }
            else
            {
                await response.WriteAsync(JsonSerializer.Serialize(new { response = "Error 401" }));
            }
        }
    }
}
