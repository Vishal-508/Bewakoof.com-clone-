import {
  Box,
  SimpleGrid,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div style={{ background: "#181818" }}>
      <Box w="1140px" m="auto">
        <Box w="1140px" m="auto" mt="50px">
          <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAACKCAMAAAB8UI9dAAAAkFBMVEUYGBgAABYAABj/3Df/3zfBqC4VFhgAABTbvzH/4Tf/2jYOEBcRExgAABvy0DPixTGDciX/5Tf41ja4oiyWgidPRh2rlinszjR1ZSSKeSQJChdZTx8SFR2lkSnQtS1fVB8gHRooJh1RRSM8OB5tXiJDPhyzmSkvKh5KRiEUEBpNSRoxLBsACRv/7TmejCshHB3oKesZAAADYUlEQVRoge2V25aiOhCGSaogBw6BIEbjCNrYtD06zPu/3RT2WtNzod3u273qu2BpUslP/lQVScIwDMMwDMMwDMMwDMMwDMMwDMMw/40szx5NCfWBiM9sRIEPd1p0lt2SmO1+5A/W7/WNfj3I79Viq9PDY73iOPd6I17afTve11MpWjTGAMJWfCsnNLov5IQ22KzkXE91q+5HpGDTaWod2KpMFtvv+17cxoWGT7ks/g3NY7E8B4T+9Cr39TRM970SqW12Qqiysv4tK0TszqUolFC0XghJ+0klfggxdud3lX/IRSVEkau4e4lLGMW9/rzQkNgAnlSZjdOcvt33YJEbVB7LYP01T1LTNLgXzjQqKzU2x0JMza+32TdEf1GLnOjQVOOlpxGTHvJErpbZsFEWrcVmiIX6/SihyEzcDsOwtnR3uTNWazTTCs1JXII1tTw40CsD/ZoC9SKnfnq6wEsA0BogZHIyGHpP2/TOeud2lCSP64DujqBMSXO5R38SagaoEdZqRzOtOAOsgtelktqGqwa9CxCOokXYxLgF3L9Y6BM5OvBXMrOOXxXKTc4RlQUtAvRv4/jicd2jFivToxO1Md04Ht8v58qGnE4XwGfXY6DwrIj0f0Y7qEzVBjaL3NfpTXdnBillsZi6eI8IgP2MUPRIy5MUvCjr1HljF7mbFSfReWzF7WV9CtVYJJGycvWUXHOihqJOxqYW3NQuzK/G1MEfe1M7nBSVk5tqfZMDV4GXZ3JALVX7V24Hz8oNlNhyi9iSmXRQNb5eZAXOO7VC2vy0M7inEA2LmSFuDaZlALeY6RYz6bQJmY7PmYn77Xa79pSGtLKOZQ1mIyYAWIsd2VuVJ8BZqdFCeKe7SqIm/9cGt9d8BjPTuL6ojgpJPiMHtyaGYPprdAaCs016jUNjSVR4i6n8jeD71ANUh6WJic7Y0Dm0IQA6qWbEynl6U7UB842cbH11o9/GIj+2tKlfF0UifRVe31Xq/SaKTUXps9770PVeHzJa49cH0re+pTIXdaBf7iTixvv6fq/81PuA+hgVTCGKrktuLYGG8tvslSwoX7pMCVm+C0l9LaOnKGTWnePS5egbNnYXQTpRyqc+Y588aNHFndF/Qu9NMwzDMAzDMAzDMAzDMAzDMAzDMP9n/gDjwj0q5G65HwAAAABJRU5ErkJggg==" />
        </Box>
        <SimpleGrid
          columns={4}
          w="1140px"
          m="auto"
          fontSize="12px"
          color="#FFFFFFE6"
        >
          <Box fontSize="12px" color="#FFFFFFE6" w="285px" height="128px">
            <UnorderedList
              textAlign="left"
              listStyleType="none"
              fontWeight="medium"
            >
              <Box
                color="#FDD835"
                letterSpacing="1px"
                m="0 0 20px 0"
                fontWeight="medium"
              >
                CUSTOMER SERVICE
              </Box>
              <ListItem>Contact Us</ListItem>
              <ListItem>Track Order</ListItem>
              <ListItem>Retrun Order</ListItem>
              <ListItem>Cancel Order</ListItem>
            </UnorderedList>
          </Box>
          <Box w="285px" height="128px">
            <UnorderedList
              textAlign="left"
              listStyleType="none"
              fontWeight="medium"
            >
              <Box
                color="#FDD835"
                letterSpacing="1px"
                m="0 0 20px 0"
                fontWeight="medium"
              >
                COMPANY
              </Box>
              <ListItem>About Us</ListItem>
              <ListItem>We're Hiring</ListItem>
              <ListItem>Terms & Conditions</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Blog</ListItem>
            </UnorderedList>
          </Box>
          <Box w="285px" height="128px" textAlign="left">
            <Box
              color="#FDD835"
              letterSpacing="1px"
              m="0 0 20px 0"
              fontWeight="medium"
            >
              CONTACT WITH US
            </Box>
            <Box w="165px" h="60px" >
              <Box><Box as="span">4.7M People Like this</Box></Box>
              <Box><Box as="span">1M Followers</Box></Box>
            </Box>
          </Box>
          <Box w="285px" height="128px">
            <UnorderedList
              textAlign="left"
              listStyleType="none"
              fontWeight="medium"
            >
              <Box
                color="#FDD835"
                letterSpacing="1px"
                m="0 0 20px 0"
                fontWeight="medium"
              >
                KEEP UP TO DATE
              </Box>
              <form >
                <input style={{outline: "none",
                  background:" transparent",
                  border:" none",
                  borderBottom: "1.4px solid #fdd835",
                  width: "55%",
                  height: "34px",fontSize:"14px"}}  placeholder="Enter Email Id"  type="email" name="email" id="email" />
                <input style={{    width: "45%",
                  background: "#fdd835",
                  border: "1px solid #fdd835",
                  height: "34px",
                  color: "#000",
                  padding: "0"}} type="submit" value="SUBSCRIBE" />
              </form>
            </UnorderedList>
          </Box>
        </SimpleGrid>
        <br />
        <br />
        <SimpleGrid  columns={4}
          w="1140px"
          m="auto"
          fontSize="12px"
          color="#FFFFFFE6" >
          
        <Box fontSize="12px" color="#FFFFFFE6" w="285px" height="128px">
            <UnorderedList
              textAlign="left"
              listStyleType="none"
              fontWeight="medium"
              w="285px" h="60px"
            >
              
              <ListItem p="6px 0" >    15 Days return policy*</ListItem>
              <ListItem p="6px 0" >    Cash on delivery*</ListItem>
              
            </UnorderedList>
          </Box>
          <Box w="285px" height="128px">
            <UnorderedList
              textAlign="left"
              listStyleType="none"
              fontWeight="medium"
              display="flex"
              flexDirection="column"
            >
              <Box
                color="#FDD835"
                letterSpacing="1px"
                m="0 0 20px 0"
                fontWeight="medium"
              >
                DOWNLOAD THE APP
              </Box>
              <Box display="flex" >

              <ListItem><Image w="100px" mr="5px" src="https://images.bewakoof.com/web/app_android_v1.png" /></ListItem>
              <ListItem><Image w="100px" mr="5px" src="https://images.bewakoof.com/web/app_ios_v1.png" /></ListItem>
              </Box>
              
            </UnorderedList>
          </Box>
          <Box w="285px" height="128px">
            <UnorderedList
              textAlign="left"
              listStyleType="none"
              fontWeight="medium"
            >
              <Box
                color="#FDD835"
                letterSpacing="1px"
                m="0 0 20px 0"
                fontWeight="medium"
              >
                100% SECURE PAYMENT
              </Box>
              <Image src="https://images.bewakoof.com/web/secure-payments-image.png" />
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Footer;
// https://images.bewakoof.com/web/secure-payments-image.png