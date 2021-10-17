using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.Security;

namespace ShopOnline.Areas.Supplier.Controllers
{
    [AllowAnonymous]
    public class DashboardController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}