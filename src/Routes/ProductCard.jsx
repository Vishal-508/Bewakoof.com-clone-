import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import SingleProduct from "./SingleProduct";

const ProductCard = ({
  manufacturer_brand,
  average_rating,
  member_price,
  price,
  id,
  mrp,
  tribe_text,
  display_image,
  custom_name,
  url,
  color,
  name,
  product_sizes,
  designer,
  product_discount,
  all_offer_price,
 key

}) => {

  // all_offer_price,
  // average_rating,
  // manufacturer_brand,
  
  // mrp,
  // designer,
  // product_sizes,
  // tribe_text,
  // product_discount,
  // price,
  // member_price,
  // name,
  // color,
  // manufacturer_brand:{manufacturer_brand},
  // average_rating:{average_rating},
  //  member_price:{member_price},
  //   price:{price},
  //    key:{id},
  //     mrp:{mrp},
  //      tribe_text:{tribe_text}, 
  //       display_image:{display_image},
  //        custom_name:{custom_name},
  //         url:{url},
  //          color:{color},
  //           name:{name},
  //            product_sizes:{product_sizes},
  //             designer:{designer},
  //              product_discount:{product_discount},
  //               all_offer_price:{all_offer_price}
const params =useParams();
const {setSinglePageData}=useContext(AppContext)
const newData={manufacturer_brand:manufacturer_brand,
  average_rating:average_rating,
   member_price:member_price,
    price:price,
     key:id,
      mrp:mrp,
       tribe_text:tribe_text, 
        display_image:display_image,
         custom_name:custom_name,
          url:url,
           color:color,
            name:name,
             product_sizes:product_sizes,
              designer:designer,
               product_discount:product_discount,
                all_offer_price:all_offer_price}
// console.log(newData)
const handleOnChange=()=>{
  if(key===id){

    setSinglePageData(newData)
  }
}
{/* <SingleProduct manufacturer_brand={manufacturer_brand} average_rating={average_rating} member_price={member_price} price={price} id={id} mrp={mrp} tribe_text={tribe_text} display_image={display_image} custom_name={custom_name} url={url} color={color} name={name} product_sizes={product_sizes} designer={designer} product_discount={product_discount} all_offer_price={all_offer_price} /> */}

  return (
    

   <Box onClick={handleOnChange} >

   
    <Link to={`/singleproduct/${id}`}>
    
       
    <Box w="282.48px" h="450.84px" key={id} textAlign="left">
      <Image
        src={`https://images.bewakoof.com/t640/${display_image}`}
        alt={custom_name}
        />
      <Box>
        <Text fontSize="12px" fontWeight="bold">
          {manufacturer_brand}
        </Text>
        <Box fontSize="10px" color="#737373" mt="4px">
          {custom_name}
        </Box>
        <Flex fontSize="14px" align="center">
          <Box fontWeight="bold" fontSize="16px">
            {" "}
            <Box as="span" fontSize="12px">
              ₹
            </Box>{" "}
            {price}
          </Box>
          <Box textDecorationLine="line-through" fontSize="12px" pl="5px">
            ₹{mrp}
          </Box>
        </Flex>
        <Flex>
          <Text fontSize="11px" fontWeight="bold" p="3px 8px" bg="#F7F7F7">
            ₹{member_price}
            {tribe_text}
          </Text>
        </Flex>
      </Box>
    </Box>
    </Link>
    </Box>
  );
};

export default ProductCard;

// all_offer_price: 1299
// average_rating: 4.6
// brand: null
// cat_designer: ""
// category: "T-Shirt"
// category_info: {gender: 'Men', subclass: 'T-Shirt', id: 43, name: 'T-Shirt', url: ''}
// child_category: {gender: 'Men', subclass: 'T-Shirt', id: 43, name: 'T-Shirt', url: ''}
// coin_statement: null
// color: ['black']
// color_name: null
// custom_name: "Men's Black Dab Marshmello T-shirt"
// description: ""
// design: "Printed"
// designer: "bewakoof"
// display_image: "men-s-black-dab-marshmello-t-shirt-206423-1655747893-1.jpg"
// experiment_id: null
// flip_image: null
// gender: "Men"
// group_count: 0
// id: 206423
// in_stock: 1
// limited_edition: false
// manufacturer_brand: "Bewakoof"
// material: "Cotton"
// member_discount: "74% OFF"
// member_price: 329
// model: null
// mrp: 1299
// name: "Men's Black Dab Marshmello T-shirt"
// offer: "14% OFF"
// offer_type: "best_seller"
// parent_category: null
// price: 349
// product_discount: "73% OFF"
// product_sizes: Array(6)
// 0: {id: 387885, name: 'S', stock_status: true}
// 1: {id: 387886, name: 'M', stock_status: true}
// 2: {id: 387887, name: 'L', stock_status: true}
// 3: {id: 387888, name: 'XL', stock_status: true}
// 4: {id: 387889, name: '2XL', stock_status: true}
// 5: {id: 387890, name: '3XL', stock_status: false}
// length: 6
// [[Prototype]]: Array(0)
// ptype: "single"
// sp: null
// status: 1
// stock_status: true
// subclass: "T-Shirt"
// tags: []
// tribe_header: null
// tribe_image_url: ""
// tribe_text: "For TriBe Members"
// upgraded_dimension: true
// url: "dab-marshmello-black-full-sleeve-t-shirt-for-men"
