import axios from "axios";

export function getMen({sort,page}){
    return axios.get(`https://www.bewakoof.com/v1/urls/men-clothing?qf=true&isRecentSearch=undefined&searchText=null&cover_type=&offer_type=&designer=&preview=&sort=${sort}&page=${page}&category=T-shirt&limit=50&fields=results&compression=false&product_fields=id,name,url,mrp,price,flip_image,display_image,in_stock,status,product_type,limited_edition,color_name,group_count,category_info,sp,cat_designer,offer,gender&filters={%22filter%22:{},%22category%22:{%22term%22:%22men-clothing%22}}&custom_filters=[]&dt=25:7:2022:18`,{
      headers:{
        "Api-Token":"MWY5ZTNmNzFmN2M1ZTUyMjkwNjM2NGMzNmNjZTA3N2Q6M2RhMmI3OTgtNTY2MC00ZDRhLWJhZWQtNTZlMDI2MWRlYmZm"
        }
    })
}
 
// /category-t-shirt
export function getWomen({sort,page}){
  return axios.get(`https://www.bewakoof.com/v1/urls/women-clothing?qf=true&isRecentSearch=undefined&searchText=null&cover_type=&offer_type=&designer=&preview=&sort=${sort}&page=${page}&limit=50&fields=results&compression=false&product_fields=id,name,url,mrp,price,flip_image,display_image,in_stock,status,product_type,limited_edition,color_name,group_count,category_info,sp,cat_designer,offer,gender&filters={%22filter%22:{},%22category%22:{%22term%22:%22women-clothing%22}}&custom_filters=[]&dt=25:7:2022:18`,{
    headers:{
      "Api-Token":"MWY5ZTNmNzFmN2M1ZTUyMjkwNjM2NGMzNmNjZTA3N2Q6M2RhMmI3OTgtNTY2MC00ZDRhLWJhZWQtNTZlMDI2MWRlYmZm"
      }
  })
}




// https://www.bewakoof.com/v1/urls/men-clothing?qf=true&isRecentSearch=undefined&searchText=null&cover_type=&offer_type=&designer=&preview=&sort=popular&page=1&limit=50&fields=results&compression=false&product_fields=id,name,url,mrp,price,flip_image,display_image,in_stock,status,product_type,limited_edition,color_name,group_count,category_info,sp,cat_designer,offer,gender&filters={%22filter%22:{},%22category%22:{%22term%22:%22men-clothing%22}}&custom_filters=[]&dt=25:7:2022:18
// Api-Token
// https://www.bewakoof.com/v1/urls/men-clothing?qf=true&isRecentSearch=undefined&searchText=null&cover_type=&offer_type=&designer=&preview=&sort=popular&page=1&limit=50&fields=results&compression=false&product_fields=id,name,url,mrp,price,flip_image,display_image,in_stock,status,product_type,limited_edition,color_name,group_count,category_info,sp,cat_designer,offer,gender&filters={%22filter%22:{},%22category%22:{%22term%22:%22men-clothing%22}}&custom_filters=[]&dt=25:7:2022:18


// https://www.bewakoof.com/v1/widgets/product?module=product&filter={}&recommendation=bestseller&limit=9&view_more=true&view_more_link=bestsellers-for-men&url=bestsellers-for-men&dt=25:7:2022:15


// https://www.bewakoof.com/v1/urls/women-clothing?qf=true&isRecentSearch=undefined&searchText=null&cover_type=&offer_type=&designer=&preview=&sort=popular&page=1&limit=50&fields=results&compression=false&product_fields=id,name,url,mrp,price,flip_image,display_image,in_stock,status,product_type,limited_edition,color_name,group_count,category_info,sp,cat_designer,offer,gender&filters={%22filter%22:{},%22category%22:{%22term%22:%22women-clothing%22}}&custom_filters=[]&dt=25:7:2022:18


// Mens:
// 1.https://www.bewakoof.com/v1/app_objects?objects={%22floating_icon%22:null}&dt=25:7:2022:18
// 2.https://www.bewakoof.com/v1/app_objects?objects={%22homepage%22:null,%22homepage_v2%22:%22campaign/mens-home%22}&dt=25:7:2022:18 

// Womens:
// 1.https://www.bewakoof.com/v1/app_objects?objects={%22floating_icon%22:null}&dt=25:7:2022:18
// 2.https://www.bewakoof.com/v1/app_objects?objects={%22homepage%22:null,%22homepage_v2%22:%22campaign/womens-home%22}&dt=25:7:2022:18 