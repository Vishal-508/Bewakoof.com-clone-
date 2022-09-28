import {
  Box,
  SimpleGrid,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getMen } from "../Apis";
import Navbar from "../Components/Navbar";
import ProductCard from "./ProductCard";
// import Products from "./Products";

const Men = () => {
  const [data, setData] = useState([]);
  const [sort,setSort]=useState("new");
  const [page,setPage]=useState(2);
 
  useEffect(() => {
    handleData();
  }, [sort,page]);
  function handleData() {
    return getMen({sort,page})
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const mainData = data.products;
  
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
            <BreadcrumbLink href="/men">Men</BreadcrumbLink>
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

export default Men;
// {products?.map((item) => {

//   return <ProductCard key={item.id} {...item} />;
// })}
// {
  /* <Products contextual_header={item.contextual_header} total_product_count={item.total_product_count} banner={item.banner} key={item.id} title={item.title} products={item.products}  /> */
// }
// })

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
