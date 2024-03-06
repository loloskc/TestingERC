using ClientERC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace ClientERC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

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
        public IActionResult Filter()
        {
            return View();
        }

        public IActionResult FilterExist() 
        {
            return View();
        }
        public IActionResult FilterByDate()
        {
            return View();
        }

        public IActionResult FilterByFio()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
