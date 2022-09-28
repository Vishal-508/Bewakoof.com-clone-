import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Text,
  Button,
  HStack,
  Spacer,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
// import { Button } from "bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { AppContext } from "../Context/AppContext";

const getData=()=>{
  return axios.get("https://www.bewakoof.com/v1/v2/products/balance-is-key-oversized-fit-t-shirt?dt=29:7:2022:15",{
      headers:{
          "Api-Token":"MWY5ZTNmNzFmN2M1ZTUyMjkwNjM2NGMzNmNjZTA3N2Q6M2RhMmI3OTgtNTY2MC00ZDRhLWJhZWQtNTZlMDI2MWRlYmZm",
          'origin' : 'https://bewakoof.com',
          }
  })
}

// function getData(){
//   return fetch("https://www.bewakoof.com/v1/v2/products/balance-is-key-oversized-fit-t-shirt?")
//   .then(res=>res.json())
// }
// manufacturer_brand,
// average_rating,
// member_price,
// price,
// id,
// mrp,
// tribe_text,
// display_image,
// custom_name,
// url,
// color,
// name,
// product_sizes,
// designer,
// product_discount,
// all_offer_price
const SingleProduct = ({

}) => {

  const {singlePageData,handleItem}=useContext(AppContext)
  const params = useParams();
  // const [data,setData]=useState([]);

  useEffect(()=>{
    getData().then(res=>
     
      console.log(res)).catch(err=>console.log(err))
    
   })

  // useEffect(()=>{
    
  //   getData().then(res=>{
     
  //     console.log(res) ; 
  //     // setData(res.data) ; 
  //   })
  //   .catch(err=>console.log(err))
  // },[]) ; 
// console.log(data)
// console.log(params)
// console.log(singlePageData,params.id)

// const [item,setItem]=useState(0);
// const handleItem=()=>{
//   setItem(item+1)
// }
  // https://www.bewakoof.com/v1/v2/products/thug-jerry-navy-blue-boyfriend-t-shirt-for-women
  return (
    <div>
      <div>SingleProduct</div>
      <Navbar />
      <Box>
        <Breadcrumb
          fontSize="12px"
          w="1170px"
          p="10px 10px"
          m="auto"
          textAlign="left"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/women">women</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/singleproduct/Women's Red Slim Fit T-shirt">
              {/* {singlePageData.name} */}
              Women's Red Slim Fit T-shirt
              </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex w="1170px" m="auto">
        <Box display="flex" w="570px" h="588px" >
          <Box w="80px" mr="10px" >
            <Image src={`https://images.bewakoof.com/t1080/women-s-pink-nightsuits-538141-1661336466-1.jpg`} />
          </Box>
          <Box>
            <Image
              w="450px"
              src={`https://images.bewakoof.com/t1080/women-s-pink-nightsuits-538141-1661336466-1.jpg`}
            />
          </Box>
        </Box>
        <Box w="527px" h="588px" >
          <Box fontSize="18px" p="8px 0" w="470px" textAlign="left" m="auto" fontWeight="semibold">
            {/* {singlePageData.designer} */}
            bewakoof
          </Box>
          <Text p="8px 0" w="470px" textAlign="left" m="auto" >
            {/* {singlePageData.name} */}
            Women's Red Slim Fit T-shirt
            </Text>
          <Box>
            <Flex fontSize="14px" align="center" w="470px" m="auto" >
              <Box fontWeight="bold" fontSize="24px">
                {" "}
                <Box as="span" fontSize="16px">
                  ₹
                </Box>{" "}
                {/* {singlePageData.price} */}
                349
              </Box>
              <Box textDecorationLine="line-through" fontSize="16px" pl="5px">
                {/* ₹{singlePageData.mrp} */}
                399
              </Box>
              <Box textDecorationLine="line-through" fontSize="16px" pl="5px">
                {/* {singlePageData.product_discount} */}
                14% OFF
              </Box>
            </Flex>
            <Flex w="470px"  m="0 auto 20px auto" >
              <Text fontSize="11px" fontWeight="bold" p="3px 8px" bg="#F7F7F7">
                {/* ₹{singlePageData.member_price} */}
                {/* {singlePageData.tribe_text} */}
               ₹319  For TriBe Members
              </Text>
            </Flex>
            <Box m="auto" w="470px" h="3px" bg="#EEEEEE"></Box>
            <Box fontSize="12px" p="16px 0">
              <Text>
                TriBe members get an extra discount of{" "}
                <Box as="span" fontWeight="bold">
                  ₹50
                </Box>{" "}
                and FREE shipping.
                <Box color="#42A2A2" as="span">
                  Learn more
                </Box>
              </Text>
            </Box>
          </Box>
          <Box m="auto" w="470px" h="3px" bg="#EEEEEE"></Box>
          <Box>
            <Flex w="470px" m="15px auto" justifyContent="space-between" >
              <Box fontSize="12px" fontWeight="bold" as="span">
                SELECT SIZE
              </Box>
              
              <Box fontSize="12px" fontWeight="bold" as="span" color="#42A2A2">
                Size Guide
              </Box>
            </Flex >
            <Flex  w="470px" m="auto" >
              {/* {singlePageData.product_sizes?.map((item) => { */}
                <Center
                  w="46px"
                  h="46px"
                  m="0 9px 5px 0"
                  border="1px solid black"
                  borderRadius="5px"
                >
                  Xs
                  {/* {item.name} */}
                </Center>
                <Center
                  w="46px"
                  h="46px"
                  m="0 9px 5px 0"
                  border="1px solid black"
                  borderRadius="5px"
                >
                  S
                  {/* {item.name} */}
                </Center>
                <Center
                  w="46px"
                  h="46px"
                  m="0 9px 5px 0"
                  border="1px solid black"
                  borderRadius="5px"
                >
                  M
                  {/* {item.name} */}
                </Center>
                <Center
                  w="46px"
                  h="46px"
                  m="0 9px 5px 0"
                  border="1px solid black"
                  borderRadius="5px"
                >
                  L
                  {/* {item.name} */}
                </Center>
              {/* })} */}
            </Flex>
          </Box>
          <Box>
            <Box w="470px"  m="0 auto -15px" fontSize="14px" textAlign="left" fontWeight="bold" color="#FF2E2E">
              Few Left
            </Box>
            <Box w="470px" m="20px auto">
              <HStack>

              <Button onClick={handleItem} h="40px" w="248px" borderRadius="5px"  bg="#FFD84D" fontSize="14px">
                ADD TO BAG
              </Button>
             <Spacer/>
              <Button h="40px"  borderRadius="5px" border="1px solid #949494" color="#949494" w="195px" bg="#ffffff" fontSize="14px"  >
                WISHLIST
              </Button>
              </HStack>
            </Box>
          </Box>
          <Box m="auto" w="470px" h="3px" bg="#EEEEEE"></Box>
        </Box>
      </Flex>
    </div>
  );
};

export default SingleProduct;

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



// https://www.bewakoof.com/v1/v2/products/thug-jerry-navy-blue-boyfriend-t-shirt-for-women