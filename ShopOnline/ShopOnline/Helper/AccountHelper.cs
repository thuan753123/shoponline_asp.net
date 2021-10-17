using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading;
using System.Web;

namespace ShopOnline.Helper
{
    public class AccountHelper
    {
        public static string Generatekey()
        {
            string key = "ShopMobile";
            List<string> listkey = new List<string>();
            for (int i = 0; i < 5; i++)
            {
                string s;
                s = CodeHelper.RandomString(4);
                Thread.Sleep(50);
                key += "-" + s;
            }
            return key;
        }

        public static void SendMail(string ReceiverMail)
        {
            var respond = 1; /*AccountService.GetAccountByEmail(ReceiverMail);*/
            if (respond != null)
            {
                var acc = respond;
                string code = Generatekey();
                try
                {
                    var client = new SmtpClient
                    {
                        Host = "smtp.gmail.com",
                        Port = 587,
                        UseDefaultCredentials = false,
                        DeliveryMethod = SmtpDeliveryMethod.Network,
                        Credentials = new NetworkCredential("PhucND.zit@gmail.com", "PhucTrang1810"),
                        EnableSsl = true,
                    };
                    var from = new MailAddress("PhucND.zit@gmail.com", "Admin ShopMobile");
                    var to = new MailAddress(ReceiverMail);
                    var mail = new MailMessage(from, to)
                    {
                        Subject = "Xác thực tài khoản",
                        // Body = "Xin chào " + acc.Name + "<br/> Chúng tôi đã gửi cho bạn 1 mã để bạn xác thự email của bạn <br/> Đây là mã xác thực Email : <h3><b> <span>" + code + "  </span></b></h3> Vui lòng coppy và quay lại trang đăng kí để xác thực",
                        IsBodyHtml = true,
                    };
                    client.Send(mail);
                    //acc.Code = code;
                    // AccountService.UpdateAccount(acc);
                    // phải làm cái này ở mail dùng để gửi phải bật lên
                    // https://www.google.com/settings/u/1/security/lesssecureapps
                }
                catch (Exception ex)
                {
                    // WriteLog.LogError(ex);
                }
            }
        }

        public static string GetIPAddress()
        {
            System.Web.HttpContext context = System.Web.HttpContext.Current;
            string ipAddress = context.Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

            if (!string.IsNullOrEmpty(ipAddress))
            {
                string[] addresses = ipAddress.Split(',');
                if (addresses.Length != 0)
                {
                    return addresses[0];
                }
            }

            return context.Request.ServerVariables["REMOTE_ADDR"];
        }
    }
}