using System;
using System.Globalization;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Security.Cryptography;
using System.Web.Configuration;
using System.Net.Http;
using System.Web.Mvc;
using System.Collections.Generic;
using System.IO;

namespace ShopOnline.Controllers
{
    public class AccountController : Controller
    {
        private string uri = WebConfigurationManager.AppSettings["DomainAPI"];

        public ActionResult Index()
        {
            return View();

        }

        public ActionResult Login()
        {
            return View();
        }

        public static bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        [HttpPost]
        public JsonResult CheckLogin(string key, string password)
        {
            return Json(new { status = true, mess = "Đăng nhập thành công" });
        }

        public ActionResult Register()
        {
            return View();
        }
        public static readonly List<string> ImageExtensions = new List<string> { ".JPG", ".JPE", ".BMP", ".GIF", ".PNG" };
        [HttpPost]
        public ActionResult CreateAccount()
        {
            return View("Register");
        }
        public ActionResult ConfirmEmail()
        {
            return View();
        }

        public ActionResult Confirm()
        {
            return RedirectToAction("Login", "Account");
        }

        public ActionResult Forgot()
        {
            return RedirectToAction("Login", "Account");
        }

        [HttpPost]
        public ActionResult Forgot(string passnew)
        {
            return RedirectToAction("Login", "Account");
        }

        [HttpPost]
        public ActionResult Recover(string email)
        {
            return RedirectToAction("Login", "Account");
        }

        [HttpGet]
        public ActionResult Logout()
        {
            Session["us"] = null;
            return Redirect(Request.UrlReferrer.ToString());
        }
    }
}