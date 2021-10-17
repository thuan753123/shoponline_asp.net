
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Configuration;

namespace ShopOnline.Controllers
{
    public class ArticleController : Controller
    {
        // GET: Article
        private static string uri = WebConfigurationManager.AppSettings["DomainAPI"];
        public ActionResult Index()
        {
            ////Lấy 6 bài viết đầu
            //List<Article> lst = new List<Article>();
            //using (var client = new HttpClient())
            //{
            //    client.BaseAddress = new Uri(uri);
            //    //HTTP GET
            //    var responseTask =await client.GetAsync("Articles/Get?&pageNumber=1&pageSize=6");
            //    //var result = responseTask.Result;
            //    var readTask = await responseTask.Content.ReadAsAsync<List<Article>>();
            //    lst = readTask;

            //}
            //ViewBag.lst = lst;
            return View("Index");
        }
        //Get: Article - Lấy chi tiết một bài viết nào đó
        public ActionResult Item(string Alias, int ArticleID)
        {
            //Article data = new Article();
            //using (var client = new HttpClient())
            //{
            //    client.BaseAddress = new Uri(uri);
            //    //HTTP GET
            //    var responseTask = client.GetAsync("Articles/" + ArticleID);
            //    responseTask.Wait();

            //    var result = responseTask.Result;
            //    var readTask = result.Content.ReadAsAsync<Article>();
            //    readTask.Wait();

            //    data = readTask.Result;
            //}
            //ViewBag.title = data.MetaTitle;
            //ViewBag.Metadescription = data.MetaDescriptions;
            //ViewBag.Metakeywords = data.MetaKeywords;
            ////Lấy các bài viết liên quan
            //List<Article> lst = new List<Article>();
            //using (var client = new HttpClient())
            //{
            //    client.BaseAddress = new Uri(uri);
            //    //HTTP GET
            //    var responseTask = client.GetAsync("Articles/GetFollowView");
            //    responseTask.Wait();

            //    var result = responseTask.Result;
            //  //  var readTask = result.Content.ReadAsAsync<List<Article>>();
            //    readTask.Wait();

            //    lst = readTask.Result;
            //}
            //ViewBag.lst = lst;
            return View("Detail");
        }

    }
}