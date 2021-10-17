using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShopOnline.Helper
{
    public class Currency
    {
        public static string ToCurrencyString(decimal? d)
        {

            decimal t = (d ?? 0);
            return t.ToString("#,##0.");
        }
    }
}