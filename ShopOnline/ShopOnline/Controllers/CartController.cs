using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Configuration;
using System.Net.Http;
using System.Diagnostics;
using ShopOnline.Models;

namespace ShopOnline.Controllers
{
    public class CartController : Controller
    {
        private static string uri = WebConfigurationManager.AppSettings["DomainAPI"];

        // GET: Cart
        public ActionResult Index()
        {
            Cart gio = (Cart)Session["cart"];
            if (gio == null)
                ViewBag.count = 0;
            else
                ViewBag.count = gio.getCount();
            return View();
        }

        public JsonResult AddToCart(int id, int SoLuong)
        {
            Product pr = new Product();
            Cart gh;
            if (Session["cart"] == null)
            {
                gh = new Cart();
            }
            else
            {
                gh = Get();
            }
            Product prAdd = new Product();
            try
            {
                prAdd = Product.Get(id);
                CartDetail dt = CartDetail.Post(prAdd, SoLuong);
                gh.add(dt);
                Session["cart"] = gh;
            }
            catch (Exception e)
            {
                return Json(new { status = false, mess = e.Message }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { sluong = gh.getCount(), status = true }, JsonRequestBehavior.AllowGet);
        }
        public Cart Get()
        {
            return (Cart)Session["cart"];
        }
        [HttpPost]
        public ActionResult Delete()
        {

            return RedirectToAction("Index", "Cart");
        }


        public JsonResult UpdateQuantity(int id, int SoLuong)
        {

            Cart gh;
            if (Session["cart"] == null)
            {
                gh = new Cart();
                return Json(new { status = false, mess = "Lỗi" }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                gh = (Cart)Session["cart"];
                List<CartDetail> lst = gh.getCartDetailList();
                CartDetail pr = lst.Find(x => x.ProductID == id);
                pr.Amount = SoLuong;
                return Json(new { status = true, mess = "Thành công", dongia = SoLuong * pr.Price, totalprice = gh.getTotalPrice() }, JsonRequestBehavior.AllowGet);
            }

        }

        public JsonResult Del(int ID)
        {

            Cart gh;
            if (Session["cart"] == null)
            {
                gh = new Cart();
                return Json(new { status = false, mess = "Lỗi" }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                gh = (Cart)Session["cart"];
                List<CartDetail> lst = gh.getCartDetailList();

                if (lst.Count < 0)
                {
                    return Json(new { status = false, mess = "Lỗi" }, JsonRequestBehavior.AllowGet);
                }
                CartDetail pr = lst.SingleOrDefault(x => x.ProductID == ID);
                if (pr == null)
                {

                    return Json(new { status = false, mess = "Lỗi" }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    lst.Remove(pr);
                    Session["cart"] = gh;
                    return Json(new { status = true, mess = "Thành công", totalprice = gh.getTotalPrice() }, JsonRequestBehavior.AllowGet);
                }

            }

        }


        public ActionResult DoneCheckOut(Bill bill)
        {

            if (bill != null)
            {

                //insert DetailBill
                Cart gio = (Cart)Session["cart"];
                List<CartDetail> cardt;
                if (gio != null)
                {
                    try
                    {
                        bill.TotalBill = gio.getTotalPrice();
                        bill.BuyDate = DateTime.Now;
                        cardt = gio.getCartDetailList();
                        
                        if (bill.CreateBill(cardt))
                        {
                            Bill b = Bill.Get().OrderByDescending(x=>x.BillID).FirstOrDefault();
                            ViewBag.bill = Bill.Get(b.BillID);
                            ViewBag.name = bill.FullName;
                            Session["cart"] = null;
                            return View();
                        }
                        

                    }
                    catch (Exception e)
                    {
                        Trace.WriteLine(e.Message);
                        return RedirectToAction("Index", "Cart");
                    }
                }
                return RedirectToAction("index", "Home");

            }
            return RedirectToAction("CheckOut", "Cart");
        }
        public ActionResult CheckOut()
        {
            return View();

        }
    }
}