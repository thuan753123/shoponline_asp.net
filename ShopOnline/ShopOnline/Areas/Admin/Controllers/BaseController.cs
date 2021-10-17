using System;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ShopOnline.Areas.Admin.Controllers
{
    public class BaseController : Controller
    {
        // GET: /Administrator/Base/
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            //if (CurrentSession.Logined == false)
            //{
            //    try
            //    {
            //        string cookieClient = Request.Cookies["name_client"].Value;
            //        string deCodecookieClient = CryptorEngine.Decrypt(cookieClient, true);
            //        string userName = deCodecookieClient.Substring(0, deCodecookieClient.IndexOf("||"));
            //        string computerName = deCodecookieClient.Substring(deCodecookieClient.IndexOf("||") + 2, deCodecookieClient.Length - userName.Length - 2);

            //        var user = CheckLogin.GetAdmin(userName);
            //        if (user == null)
            //        {
            //            int cout = 0;
            //            HttpCookie nameCookie = Request.Cookies["name_client"];
            //            while (nameCookie != null)
            //            {
            //                nameCookie.Expires = DateTime.Now.AddDays(-30);
            //                HttpContext.Response.Cookies.Add(nameCookie);
            //                cout++;
            //                if (cout == 10)
            //                    break;
            //            }

            //            filterContext.Result =
            //              new RedirectToRouteResult(
            //                  new RouteValueDictionary(new { controller = "Login", action = "Index", Area = "Admin" }));
            //        }
            //        else
            //        {
            //            CurrentSession.Logined = true;
            //        }
            //        base.OnActionExecuting(filterContext);
            //    }
            //    catch(Exception e)
            //    {
            //        Trace.WriteLine(e.Message);
            //        filterContext.Result =
            //                 new RedirectToRouteResult(
            //                     new RouteValueDictionary(new { controller = "Login", action = "Index", Area = "Admin" }));
            //    }

            //}
        }
    }
}