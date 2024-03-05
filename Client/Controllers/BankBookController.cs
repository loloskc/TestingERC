using Microsoft.AspNetCore.Mvc;

namespace Client.Controllers
{
    public class BankBookController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
