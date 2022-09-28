import React, { useEffect, useState } from "react";
import { homeMen } from "../Apis";
import bootstrap from "bootstrap";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const MensHome = () => {
  //     const [homeData,setHomeData]=useState([])
  //     useEffect(()=>{
  // handleMenHomeData()
  //     },[])

  //     const handleMenHomeData=()=>{
  //         return homeMen()
  //         .then((res)=>{
  //             console.log(res)
  //         })
  //         .catch((err)=>console.log(err))
  //     }
  return (
    <div>
      {/* topcarousel */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
        style={{ height: "670px", padding: "20px 0 5px" }}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" style={{ display: "flex" }}>
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/very-peri-homepage-1661439183.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/men-banner-1661534424.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/flat-65-off-1661536798.jpg"
              class="d-block w-33"
              alt="..."
            />
          </div>
          <div class="carousel-item" style={{ display: "flex" }}>
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/men-banner-1661534424.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/1x1-oversized-men-refreshed-1661417095.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-B2599-men-1661352309.jpg"
              class="d-block w-33"
              alt="..."
            />
          </div>
          <div class="carousel-item" style={{ display: "flex" }}>
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/flat-65-off-1661536798.jpg"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/revamped-banners-VarsityGreen-men-02-1661515187.gif"
              class="d-block w-33"
              alt="..."
            />
            <img
              style={{ height: "669px" }}
              src="https://images.bewakoof.com/uploads/grid/app/men-banner-1661534424.jpg"
              class="d-block w-33"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Box w="100%" pt="20px">
        {" "}
        <Image
          w="100%"
          p="20px"
          src="https://images.bewakoof.com/uploads/grid/app/desktop-tod-strip-men-1654149139.jpg"
        />
      </Box>
      <br />
      <Box w="100%">
        {" "}
        <Image
          w="100%"
          src="https://images.bewakoof.com/uploads/grid/app/thin-strip-new-2022-freebie-desktop-129-1661241484.jpg"
        />
      </Box>
      <SimpleGrid columns={6} row={2}>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-men-printed-1657526330.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-PlainTees-1657526329.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-OversizedTees-1657526328.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Kurtas-1657526328.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Vests-1657526332.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shorts-1657526331.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Shirts-1657526330.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Joggers-1657526328.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-sweatshirts-m-1660748009.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Boxers-1657526325.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Covers-1657526326.jpg" /></Link></Box>
        <Box m="3px" ><Link to="/men" ><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/category-box-new-final-MEN-Bags-1657526325.jpg" /></Link></Box>
      </SimpleGrid>
      <Box fontSize="20px" fontWeight="bold" >DISCOUNT PE DISCOUNT</Box>
      <SimpleGrid columns={2}  >
      <Box><Image p="5px" w="100%" src="https://images.bewakoof.com/uploads/grid/app/b1g1-mid-banner-1658840210.jpg" /></Box>
      <Box><Image p="5px" w="100%" src="https://images.bewakoof.com/uploads/grid/app/undrdawg-mid-banner2-1660818217.jpg" /></Box>
      <Box><Image p="5px" w="100%" src="https://images.bewakoof.com/uploads/grid/app/sweatshirt-men-1660737200.jpg" /></Box>
      <Box><Image p="5px" w="100%" src="https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2022-house-of-dragon-02-1661322716.jpg" /></Box>
    </SimpleGrid>
      <Box><Image p="8px" w="100%" borderRadius="8px" src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png" /></Box>
      <Box fontSize="16px" pb="15px" fontWeight="bold" letterSpacing="2px" >Customize your T-shirts</Box>
    <Box><Image w="100%" src="https://images.bewakoof.com/uploads/grid/app/design-survey-desktop-ticker-banner-1646808890.gif" /></Box>
   
    </div>
  );
};

export default MensHome;
