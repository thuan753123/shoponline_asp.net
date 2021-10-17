
using ShopOnline.Models;
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

namespace ShopOnline.Areas.Admin.Controllers
{
    [AllowAnonymous]
    public class DashboardController : BaseController
    {
        public ActionResult Index()
        {

            try
            {
              
                ViewBag.TenHienThi = "Admin";
                ViewBag.avt = "/FileUploads/images/1.png";
                return View();
            }
            catch
            {
                return RedirectToAction("Login", "Login");
            }
        }

        #region Bill
        public JsonResult GetBills()
        {
          return Json(new { lstdata = Bill.Get(), status = true},JsonRequestBehavior.AllowGet) ;
        }
        public JsonResult GetBill(int id)
        {
            return Json(new { obj = Bill.Get(id), status = true }, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult DelBill(int id)
        {
           if(Bill.Del(id))
            {
                return Json(new { status = true }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new { status = false }, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region Product

        public JsonResult GetProducts()
        {
            return Json(new { lstdata = Product.Get(), status = true }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetProduct(int id)
        {
            return Json(new { obj = Product.Get(id), status = true }, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult PutProduct(Product p)
        {
            return Json(new { status = Product.Put(p) }, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult PostProduct(Product p)
        {
            return Json(new {status = Product.Post(p) },  JsonRequestBehavior.AllowGet);
        }

      
        [HttpPost]
        public JsonResult DelProduct(int id)
        {
            if (Bill.Del(id))
            {
                return Json(new { status = true }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(new { status = false }, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
    }
}