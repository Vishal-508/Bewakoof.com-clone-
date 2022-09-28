import React from 'react'

import { Box,SimpleGrid,Image,Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Flex,
  Stack } from "@chakra-ui/react";
import  { useEffect, useState } from "react";
import {  getWomen } from "../Apis";
import ProductCard from "./ProductCard";
import Navbar from '../Components/Navbar';
// import Products from "./Products";

const Women = () => {
  const [data, setData] = useState([]);
  const [sort,setSort]=useState("new");
  const [page,setPage]=useState(2);
  useEffect(() => {
    handleData();
  }, [sort,page]);
  function handleData() {
    return getWomen({sort,page})
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const mainData = data.products;
  // console.log(`https://images.bewakoof.com/uploads/category/desktop/${data.desktop_banner}`);
  console.log(data)
 
    return (
      <div>
        <Box position="sticky" top="0">
          <Navbar />
        </Box>
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
  
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/women">Women</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box>
          <Image
            w="100%"
            src={`https://images.bewakoof.com/uploads/category/desktop/${data.desktop_banner}`}
          />
        </Box>
        <Box
          w="1170px"
          m="auto"
          mt="45px"
          mb="50px"
          textAlign="left"
          fontSize="24px"
          fontWeight="bold"
        >
          {data.title}{" "}
          <Box as="span" fontWeight="normal" color="#949494">
            ({data.total_product_count})
          </Box>
          <Box w="117px" h="2px" bg="#FBD139" ml="1px" mt="6px"></Box>
        </Box>
        <Box w="1170px" h="auto" m="auto" display="flex">
          <Box w="295.5px" h="auto">
            <Flex color="#333333" direction="column" position="sticky" top="52px" >
              <Box
                color="#2D2D2D80"
                fontSize="12px"
                p="12px 0"
                textAlign="left"
                fontWeight="bold"
              >
                FILTERS
              </Box>
              <Stack spacing={3} w="100%">
                <Select
                  variant="flushed"
                  color="#333333"
                  placeholder="Category"
                ></Select>
                <Select
                  variant="flushed"
                  color="#333333"
                  placeholder="Sizes"
                ></Select>
                <Select
                  variant="flushed"
                  color="#333333"
                  placeholder="Brand"
                ></Select>
                <Select
                  variant="flushed"
                  color="#333333"
                  placeholder="Design"
                ></Select>
                <Select
                  variant="flushed"
                  color="#333333"
                  placeholder="Fit"
                ></Select>
                <Select
                  variant="flushed"
                  color="#333333"
                  placeholder="Rating"
                ></Select>
                <Select
                  variant="flushed"
                  color="#333333"
                  placeholder="Discount"
                ></Select>
              </Stack>
            </Flex>
          </Box>
          <Box w="877.5px">
            <Box p="12px 15px 0" mb="12px" display="flex" justifyContent="end">
              <Box
                as="span"
                fontSize="12px"
                pt="6px"
                color="#2D2D2D80"
                fontWeight="bold"
              >
                SORT BY
              </Box>
              <Select
              p="1px 6px 12px"
              w="147px"
              h="26px"
              fontSize="12px"
              variant="unstyled"
              value={sort} onChange={(e) => setSort(e.target.value)}
            >
              <option value="popular">Popular</option>
              <option value="new">New</option>
              <option value="high">price: High to Low</option>
              <option value="low">price: Low to High</option>
            </Select>
            </Box>
            <SimpleGrid columns={3}>
              {mainData?.map((item) => {
                return <ProductCard key={item.id} {...item} />;
              })}
            </SimpleGrid>
          </Box>
        </Box>
      </div>
    );
  };

//     <div>
//       <Box position="sticky" top="0" >
//       <Navbar/>
//       </Box>
     
//       <Box>
//         <Image w="100%" src={`https://images.bewakoof.com/uploads/category/desktop/${data.desktop_banner}`} />
//       </Box>
//       <Box w="1170px" h="auto" m="auto" display="flex">
//         <Box w="295.5px" h="628px">
//           Sidebar
//         </Box>
//         <Box  w="877.5px">
//           <SimpleGrid columns={3} >
//             {mainData?.map((item) => {
//               return <ProductCard key={item.id} {...item} />;
//             })}
//           </SimpleGrid>
//         </Box>
//       </Box>
//     </div>
//   );
// };
export default Women

// all_offer_price: 399
// average_rating: 4.5
// brand: null
// cat_designer: ""
// category: "T-Shirt"
// category_info: {gender: 'Women', subclass: 'T-Shirt', id: 43, name: 'T-Shirt', url: ''}
// child_category: {gender: 'Women', subclass: 'T-Shirt', id: 43, name: 'T-Shirt', url: ''}
// coin_statement: null
// color: ['red']
// color_name: null
// custom_name: "Women's Red Slim Fit T-shirt"
// description: ""
// design: "Solid"
// designer: "bewakoof"
// display_image: "women-s-red-slim-fit-t-shirt-106009-1655815136-1.jpg"
// experiment_id: null
// flip_image: "women-s-red-slim-fit-t-shirt-106009-1655815157-5.jpg"
// gender: "Women"
// group_count: 0
// id: 106009
// in_stock: 1
// limited_edition: false
// manufacturer_brand: "Bewakoof"
// material: "Cotton"
// member_discount: "20% OFF"
// member_price: 319
// model: null
// mrp: 399
// name: "Women's Red Slim Fit T-shirt"
// offer: "14% OFF"
// offer_type: "price_cut"
// parent_category: null
// price: 349
// product_discount: "12% OFF"
// product_sizes: Array(7)
// 0: {id: 162651, name: 'S', stock_status: true}
// 1: {id: 162653, name: 'M', stock_status: false}
// 2: {id: 162655, name: 'L', stock_status: false}
// 3: {id: 162657, name: 'XL', stock_status: false}
// 4: {id: 162659, name: '2XL', stock_status: false}
// 5: {id: 162649, name: 'XS', stock_status: true}
// 6: {id: 162661, name: '3XL', stock_status: false}
// length: 7
// [[Prototype]]: Array(0)
// ptype: "single"
// sp: null
// status: 1
// stock_indicator_tag: {label: 'Few Left'}
// stock_status: true
// subclass: "T-Shirt"
// tags: [{…}]
// tribe_header: null
// tribe_image_url: ""
// tribe_text: "For TriBe Members"
// upgraded_dimension: true
// url: "bold-red-round-neck-women-plain-3-4-sleeve-t-shirt"