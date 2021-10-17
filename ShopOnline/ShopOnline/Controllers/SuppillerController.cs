using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;
namespace ShopOnline.Controllers
{
    public class SuppillerController : Controller
    {
        // GET: Suppiller
        public ActionResult Home(string Alias,string SupplierId)
        {
            //Model.Models.Supplier spl = new Model.Models.Supplier();
            //    spl = get<Model.Models.Supplier>("Suppliers/GetSupplier?id=" + SupplierId);
            //    ViewBag.totalProduct = get<string>("Suppliers/getTotalProduct?id=" + SupplierId);
            //    ViewBag.totalBill = get<string>("suppliers/getTotalBill?id=" + SupplierId);
                //var response = client.GetAsync(uri + "Suppliers/" + SupplierId);
                //response.Wait();
                //var result = response.Result;
                //var readTask = result.Content.ReadAsAsync<Model.Models.Supplier>();
                //readTask.Wait();
                //spl = readTask.Result;
                //var totalProduct = client.GetAsync(uri + "Suppliers/getTotalProduct/" + SupplierId);
                //totalProduct.Wait();
                //var total = totalProduct.Result;
                //var count = total.Content.ReadAsAsync<int>();
                //count.Wait();
                //ViewBag.totalProduct = count.Result;
            return View(/*spl*/);
        }
        private T get<T>(string link)
        {
            HttpClient client = new HttpClient();
            client = new HttpClient();
            client.BaseAddress = new Uri(uri);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage response =  client.GetAsync(uri + link).Result;
                var readTask =  response.Content.ReadAsStringAsync().Result;
                var settings = new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore,
                    MissingMemberHandling = MissingMemberHandling.Ignore
                };
                return  JsonConvert.DeserializeObject<T>(readTask, settings);
        }
        public ActionResult Register()
        {

            return View();
        }
        //[HttpPost]
        //public ActionResult Register(string name,string category,string establishday,string phone,string email,string facebook,string twister,string location,string linkavt,string description)
        //{
        //    HttpClient client = new HttpClient();
        //    client = new HttpClient();
        //    client.BaseAddress = new Uri(uri);
        //    client.DefaultRequestHeaders.Accept.Clear();
        //    client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
        //    Supplier newSupp = new Supplier();
        //    newSupp.Name = name;
        //    newSupp.Category = category;
        //    newSupp.EstablishDay = Convert.ToDateTime(establishday);
        //    newSupp.Phone = phone;
        //    newSupp.Email = email;
        //    newSupp.FaceBook = facebook;
        //    newSupp.Twitter = twister;
        //    newSupp.Description = description;
        //    newSupp.CreateDate = DateTime.Now;
        //    newSupp.Alias = name.Replace(" ", "-");
        //    newSupp.Location = location;
        //    newSupp.PointLocation = "21.037676, 105.793658";
        //    newSupp.MetaDescription = "";
        //    newSupp.MetaKeywords = "";
        //    newSupp.Rate = 0;
        //    newSupp.VisitCount = 0;
        //    newSupp.States = false;
        //    newSupp.Images = linkavt;
        //    //User user = (User)Session["us"];
        //    newSupp.UserName = user.UserName;
        //    HttpResponseMessage response = client.PostAsJsonAsync(uri + "Suppliers",newSupp).Result;
        //    return RedirectToAction("Index", "Home");
        //}
        private string uri = WebConfigurationManager.AppSettings["DomainAPI"];
    }
}