import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useContext } from "react";
import { productHomeMen, productHomeWomen } from "../Context/Action";
import { AppContext } from "../Context/AppContext";

export function HomeElements(){
  const {dispatch}=useContext(AppContext)
    return(
        <Box h="72px" bg="#FFFFFF" >
        <Tabs align="center">
          <TabList border="none">
            <Tab
              style={{ padding: "21px 24px" }}
              _selected={{
                borderBottom: "4px solid  #FDD835",
                fontWeight: "bold",
                fontSize: "17px",
              }}
             onClick={()=>dispatch(productHomeMen) }
            >
              MEN
            </Tab>
            <Tab
              style={{ padding: "21px 24px" }}
              _selected={{
                borderBottom: "4px solid  #FDD835",
                fontWeight: "bold",
                fontSize: "17px",
              }}
              onClick={()=>dispatch(productHomeWomen) }
            >
              WOMEN
            </Tab>
            <Tab
              style={{ padding: "21px 24px" }}
              _selected={{
                borderBottom: "4px solid  #FDD835",
                fontWeight: "bold",
                fontSize: "17px",
              }}
            >
              ACCESSORIES
            </Tab>
          </TabList>

          
        </Tabs>
      </Box>
    )
}