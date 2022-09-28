import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

const Products = ({
  products,
  banner,
  contextual_header,
  total_product_count,
  title,
}) => {
  return (
    <div>
      Products
      <Box>
        <Image src={banner} />
      </Box>
      <Box w="877.5px" h="auto" m="auto" >
        <Box w="295.5px" h="628px" >Sidebar</Box>
        <Box>
          {products?.map((item) => {

            return <ProductCard key={item.id} {...item} />;
          })}
        </Box>
      </Box>
    </div>
  );
};

export default Products;
