import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const {state,dispatch,item}=useContext(AppContext)
  return (
    <Box bg="#FFF" >
      <Box h="52px" borderBottom="1px solid rgba(0,0,0,.2)">
        {/* minWidth="max-content" */}
        <Flex
          w="1170px"
          h="52px"
          direction="row"
          m="auto"
          justify="center"
          alignItems="center"
          gap="2"
        >
          {/* logo below */}
          <Box p="2" w="195px">
            <Link to="/">
              <Image
                w="147px"
                h="20px"
                src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
              />
            </Link>
          </Box>

          {/* men,women and mobile covers links and menubar start below */}
          <Box pl="0px" w="487.5px" h="51px">
            <Flex fontSize="13px" h="51px" align="center">
              <Box
                as="span"
                display="inline-block"
                p="13px 11px"
                color="000000E6"
                fontWeight="medium"
                letterSpacing="1PX"
                _hover={{ borderBottom: "4px solid #FDD835" }}
              >
                <Link to="/men">MEN</Link>
              </Box>
              <Box
                as="span"
                display="inline-block"
                p="13px 11px"
                color="000000E6"
                fontWeight="medium"
                letterSpacing="1PX"
                _hover={{ borderBottom: "4px solid #FDD835" }}
              >
                <Link to="/women">WOMEN</Link>
              </Box>
              <Box
                as="span"
                display="inline-block"
                p="13px 11px"
                color="000000E6"
                fontWeight="medium"
                letterSpacing="1PX"
                _hover={{ borderBottom: "4px solid #FDD835" }}
              >
                <Link to="/men">MOBILE COVERS</Link>
              </Box>
            </Flex>
          </Box>

          {/* search section start below */}
          <Box w="487.5px" display="flex" alignItems="center">
            <Box fontSize="12px">
              <FormControl m="0">
                {" "}
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon />}
                  />
                  <Input
                    m="0"
                    variant="filled"
                    placeholder="Search product here"
                    focusBorderColor="grey"
                    _focus={{ border: ".5px solid grey" }}
                    w="301px"
                  />
                </InputGroup>
              </FormControl>
            </Box>
            <Box fontSize="14px" display="flex" alignItems="center">
              <Box
                display="inline-block"
                w="1px"
                h="20px"
                background="#000"
                opacity=".3"
                m="16px 15px 14px 15px"
              ></Box>

              <Link style={{ fontSize: "14px" }} to="/login">
               {state.isAuth?state.token :"Login"}
              </Link>
              <Link
                style={{ fontSize: "14px", margin: "0 0 0 15px" }}
                to="/cart"
              >
                <Image
                  src="https://images.bewakoof.com/web/ic-web-head-wishlist.svg"
                  alt="cart"
                  w="20px"
                />
              </Link>
              <Link  style={{ fontSize: "14px", margin: "0 15px",display:"flex" }} to="/cart">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3034/3034002.png"
                  alt="cart"
                  w="20px"
                />
                <Box as="span" fontWeight="bold" >{item}</Box>
              </Link>
              <Image
                  src="https://images.bewakoof.com/web/india-flag-round-1639566913.png"
                  alt="cart"
                  w="30px"
                />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
