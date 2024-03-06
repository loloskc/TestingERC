using Microsoft.AspNetCore.Mvc;

namespace ClientERC.Controllers
{
    public class ResidentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Detail(int id) 
        {
            return View(id);
        }

        public IActionResult Create()
        {
            return View();
        }
        public IActionResult Edit(int id)
        {
            return View(id);
        }
        
        
    }
}
