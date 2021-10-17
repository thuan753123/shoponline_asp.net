using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShopMobile.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Supplier/Default
        public ActionResult Index()
        {
            return View();
        }
    }
}