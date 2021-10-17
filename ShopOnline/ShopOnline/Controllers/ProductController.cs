using ShopOnline.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace ShopOnline.Controllers
{
    public class ProductController : Controller
    {
        
        public ActionResult Index()
        {
            return Redirect("/");
        }

        public ActionResult Item(int id)
        {
            return View(Product.Get(id));
        }
        [HttpPost]
        public ActionResult Search(string TenSP)
        {
            ViewBag.keywords = TenSP;
            return View();
        }
    }
}