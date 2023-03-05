namespace Backend.Api.Responses
{
    public class ApiResponses
    {


        public object? Data { get; set; } = null;
        public string Message { get; set; } = string.Empty;
        public bool IsSuccess { get; set; } = false;
    }
}
