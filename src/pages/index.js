import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo"
import { Box, Flex } from "@chakra-ui/react"
import { graphql, Link } from "gatsby"
// import { Reacticon } from "../icon/reacticon"
// import { Gatsbyicon } from "../icon/gatsbyicon"
// import { Chakraicon } from "../icon/chakrsicon"
// import { Graphqlicon } from "../icon/graphqlicon"
// import { Emotionicon } from "../icon/emotionicon"
import Header from "../components/header"
import Footer from "../components/footer"
import urlGoogle2 from "../images/banner.jpg"

function IndexPage({ siteTitle }) {
  // console.log('siteTitle',data);
  // const {
  //   site: { pathPrefix },
  // } = data

  const style = { maxWidth: "1920px" }
  console.log("sssssss", siteTitle)
  return (
    // <Layout m="5">

    <Box maxWidth="1920px">
      <Layout wrap="none">
        {/* <Header /> */}
        <SEO title="Home" />
        <Flex flexDirection="column">
          <Box
            maxWidth="1920px"
            width="100%"
            width={{ base: "340px", lg: "960px" }}
            height={{ base: "210px", lg: "500px" }}
            flexDirection="column"
            fontSize={{ base: "24px", lg: "48px" }}
            position="absolute"
            top={{ base: "150px", sm: "300px", lg: "400px" }}
            left={{ base: "50px", sm: "120px", lg: "300px" }}
            zIndex="1"
          >
            <Box as="p" fontSize="18px">
              {" "}
              Hello, I am
            </Box>
            KKshen.
            <Box
              as="p"
              fontSize="18px"
              color={{ base: "white", sm: "white", lg: "black" }}
            >
              FromtEnd Developer / Photographer
            </Box>
            <Box
              as="button"
              width={{ base: "150px", lg: "200px" }}
              height={{ base: "45px", lg: "60px" }}
              color="black"
              background="#ffffff"
              borderRadius="30px"
              fontSize={{ base: "14px", lg: "20px" }}
              marginTop="1.5rem"
              _hover={{ color: "white", background: "black" }}
            >
              <Link to="/demo">View my works</Link>
            </Box>
          </Box>
          <Box
            as="img"
            maxHeight="850px"
            objectFit="cover"
            src={urlGoogle2}
            alt={urlGoogle2}
            position="relative"
            top="0"
          />
          <Box
            marginTop="2rem"
            maxWidth="1640px"
            margin="0 auto"
            paddingBottom={{ base: "0.5rem", lg: "4rem" }}
          >
            <Flex
              alignItems="center"
              justifyContent="center"
              fontSize={{ base: "18px", lg: "24px" }}
              margin={{ base: "3rem", lg: "5rem auto 3rem 0" }}
            >
              Enjoy my website design works!
            </Flex>
            <Flex
              flexWrap={{ base: "wrap" }}
              alignItems="center"
              margin="0 auto"
            >
              <Flex
                flexDirection={{ lg: "column" }}
                display={{ base: "block" }}
                alignItems="center"
                margin="0 auto"
                textAlign="center"
              >
                <Box
                  as="img"
                  maxWidth={{ base: "414px", lg: "450px" }}
                  width="100%"
                  height="300px"
                  margin="0 auto"
                  src={require("../images/triphome.jpg")}
                  alt={require("../images/triphome.jpg")}
                  objectFit="cover"
                  margin={{ base: "0 auto", lg: "0 2rem" }}
                />
                <Box
                  as="p"
                  fontSize={{ base: "18px", lg: "24px" }}
                  margin="1rem"
                >
                  旅歷 - 會員登入
                </Box>
              </Flex>
              <Flex
                flexDirection="column"
                textAlign="center"
                alignItems="center"
                margin="0 auto"
              >
                <Box
                  as="img"
                  maxWidth={{ base: "414px", lg: "450px" }}
                  width="100%"
                  height="300px"
                  margin="0 auto"
                  src={require("../images/tripindex.jpg")}
                  alt={require("../images/tripindex.jpg")}
                  objectFit="cover"
                  margin={{ base: "0 auto", lg: "0 2rem" }}
                />
                <Box
                  as="p"
                  fontSize={{ base: "18px", lg: "24px" }}
                  margin="1rem"
                >
                  旅歷 - 會員中心
                </Box>
              </Flex>
              <Flex
                flexDirection="column"
                textAlign="center"
                alignItems="center"
                margin="0 auto"
              >
                <Box
                  as="img"
                  maxWidth={{ base: "414px", lg: "450px" }}
                  width="100%"
                  height="300px"
                  margin="0 auto"
                  src={require("../images/tripsig.jpg")}
                  alt={require("../images/tripsig.jpg")}
                  objectFit="cover"
                  margin={{ base: "0 auto", lg: "0 2rem" }}
                />
                <Box
                  as="p"
                  fontSize={{ base: "18px", lg: "24px" }}
                  margin="1rem"
                >
                  旅歷 - 會員註冊
                </Box>
              </Flex>
            </Flex>
            {/* <Flex
              as="button"
              visibility="hidden"
              alignItems="center"
              justifyContent="center"
              margin="2rem auto"
              width="280px"
              height="60px"
              border="1px solid black"
              borderRadius="30px"
              background="black"
              color="white"
              _hover={{ color: "black", background: "white" }}
            >
              <Link to="">View More</Link>
            </Flex> */}
          </Box>
          <Flex
            maxWidth="1920px"
            width="100%"
            alignItems="center"
            justifyContent="center"
            margin="0 auto"
            flexWrap={{ base: "wrap" }}
          >
            <Flex alignItems="center" justifyContent="center" margin="0 auto">
              <Box
                zIndex="1"
                position="absolute"
                color="white"
                width={{ base: "390px", lg: "520px" }}
                height="400px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                margin="0 auto"
                textAlign="center"
                marginTop="6rem"
              >
                <Box as="p" fontSize="24px" marginBottom="1rem">
                  Blog
                </Box>
                <Box as="p" fontSize="16px">
                  記錄我個人學習生活心得筆記
                  <br />
                  將會不定期更新
                </Box>
                <Box
                  as="button"
                  width="280px"
                  height="50px"
                  color="black"
                  background="white"
                  borderRadius="30px"
                  margin="6rem"
                  _hover={{ color: "white", background: "black" }}
                >
                  <Link to="/blog">View More</Link>
                </Box>
              </Box>
              <Box
                as="img"
                maxWidth={{ base: "414px", sm: "758px", lg: "634.1px" }}
                width="100%"
                height={{ base: "400px", lg: "500px" }}
                src={require("../images/altumcode-P2SkP_PXhlU-unsplash.jpg")}
                alt={require("../images/altumcode-P2SkP_PXhlU-unsplash.jpg")}
                objectFit="cover"
              />
            </Flex>
            <Flex alignItems="center" justifyContent="center" margin="0 auto">
              <Box
                zIndex="1"
                position="absolute"
                color="black"
                width={{ base: "390px", lg: "520px" }}
                height="400px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                margin="0 auto"
                textAlign="center"
                marginTop="6rem"
              >
                <Box as="p" fontSize="24px" marginBottom="1rem">
                  WebApp Demo
                </Box>
                <Box as="p" fontSize="16px">
                  網頁小作品
                </Box>
                <Box
                  as="button"
                  width="280px"
                  height="50px"
                  color="white"
                  background="black"
                  borderRadius="30px"
                  margin="6rem"
                  _hover={{ color: "black", background: "white" }}
                >
                  <Link to="/demo">View More</Link>
                </Box>
              </Box>
              <Box
                as="img"
                maxWidth={{ base: "414px", sm: "758px", lg: "634.1px" }}
                width="100%"
                height={{ base: "400px", lg: "500px" }}
                background="#55848B"
                src={require("../images/artem-sapegin-b18TRXc8UPQ-unsplash.jpg")}
                alt={require("../images/artem-sapegin-b18TRXc8UPQ-unsplash.jpg")}
                objectFit="cover"
              />
            </Flex>
            <Flex alignItems="center" justifyContent="center" margin="0 auto">
              <Box
                zIndex="1"
                position="absolute"
                color="white"
                width={{ base: "390px", lg: "520px" }}
                height="400px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                margin="0 auto"
                textAlign="center"
                marginTop="6rem"
              >
                <Box as="p" fontSize="24px" marginBottom="1rem">
                  GitHub Repo
                </Box>
                <Box as="p" fontSize="16px" marginBottom="1rem">
                  使用Request API 清楚條列出我的GitHub專案
                </Box>
                <Box
                  as="button"
                  width="280px"
                  height="50px"
                  color="black"
                  background="white"
                  borderRadius="30px"
                  margin="6rem"
                  _hover={{ color: "white", background: "black" }}
                >
                  <Link to="/repo">View More</Link>
                </Box>
              </Box>
              <Box
                as="img"
                maxWidth={{ base: "414px", sm: "758px", lg: "634.1px" }}
                width="100%"
                height={{ base: "400px", lg: "500px" }}
                src={require("../images/emile-perron-xrVDYZRGdw4-unsplash.jpg")}
                alt={require("../images/emile-perron-xrVDYZRGdw4-unsplash.jpg")}
                objectFit="cover"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          maxWidth="1920px"
          width="100%"
          height={{ base: "200px", lg: "150px" }}
          background="#333333"
          alignItems="center"
          justifyContent="center"
          display={{ base: "block", lg: "flex" }}
          margin={{ base: "0 auto" }}
        >
          <Flex
            maxWidth={{ base: "414px", lg: "1910px" }}
            height="110px"
            fontSize={{ base: "24px", lg: "36px" }}
            color="white"
            alignItems="center"
            justifyContent={{ base: "center", lg: "left" }}
            margin={{ base: "0 auto", lg: "0 300px" }}
            marginRight={{ base: "0 auto", lg: "350px" }}
          >
            Learn more about me
          </Flex>
          <Box
            as="bottom"
            width="280px"
            height="50px"
            color="white"
            background="#333333"
            borderRadius="30px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            border="1px solid white"
            marginLeft={{ base: "0", lg: "250px" }}
            margin={{ base: "0 auto" }}
            _hover={{ color: "black", background: "white" }}
          >
            <Link to="/about">Viwe More</Link>
          </Box>
        </Flex>
        <Flex
          maxWidth="1920px"
          width="100%"
          height={{ base: "350px", lg: "150px" }}
          background="#333333"
          alignItems="center"
          justifyContent="center"
          flexWrap={{ base: "wrap" }}
          margin={{ base: "0 auto" }}
        >
          <Box
            width="1000px"
            height="148px"
            color="white"
            borderTop="1px solid #707070"
            borderBottom="1px solid #707070"
          >
            <Box
              display="flex"
              marginTop="4rem"
              alignItems="center"
              justifyContent={{ base: "center", lg: "right" }}
              marginLeft={{ base: "0", lg: "5rem" }}
            >
              This Blog is built with …{" "}
            </Box>
          </Box>
          <Box
            width="200px"
            height="148px"
            border={{ base: "none", lg: "1px solid #707070" }}
            
          />
          <Box
            width="398px"
            height="148px"
            textAlign={{ base: "center", lg: "right" }}
            color="white"
            borderTop={{ base: "none", lg: "1px solid #707070" }}
            borderBottom={{ base: "none", lg: "1px solid #707070" }}
            
          >
            <Box
              display={{ base: "block", sm: "flex", lg: "none" }}
              marginTop={{ base: "-4rem" ,sm:"2rem"}}
              marginLeft={{sm:"-1.5rem"}}
            >
              If you have any further questions,
              <br />
              feel free to contact me{" "}
            </Box>
            <Box
              marginTop={{ base: "0", lg: "4rem" }}
              marginLeft={{ base: "0", lg: "3rem" }}
              alignItems="center"
              justifyContent="center"
              display={{ base: "none", lg: "flex" }}
            >
              If you have any further questions,
              <br />
              feel free to contact me{" "}
            </Box>
          </Box>
        </Flex>
      </Layout>
    </Box>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      pathPrefix
    }
  }
`

// 舊的版面
{
  /* <Flex alignItems="center" justifyContent="center" margin="0 auto">
        <Box
          position="absolute"
          alignItems="center"
          justifyContent="center"
          margin="0 auto"
          opacity="1"
          zIndex="1"
          textShadow="#fc0 1px 0 10px"
        >
          <Box
            as="h1"
            fontSize={{ base: "21px", sm: "48px", lg: "68px" }}
            textAlign="center"
          >
            Hi people
          </Box>
          <Box
            as="h1"
            fontSize={{ base: "18px", sm: "38px", lg: "58px" }}
            color="{##8a4baf}"
          >
            Welcome to the new {""}
            {pathPrefix.slice(1, 12)}.
          </Box>
        </Box>
        <Box
          as="img"
          border="1px solid black"
          boxShadow="1px 2px 15px rgb(144, 144, 144, 0.9)"
          borderRadius="99px"
          objectFit="cover"
          opacity="0.6"
          maxWidth="100%"
          boxSize={{ base: "370px", sm: "590px", lg: "710px" }}
          src={urlGoogle2}
          alt={urlGoogle2}
        />
      </Flex>
      <Box paddingTop={{ base: "3rem", lg: "2rem" }}>
        <Box as="p">Use Library And UI</Box>
        <hr />
        <Box
          as="marquee"
          direction="left"
          height="60px"
          scrollamount="10"
          // behavior="alternate"
        >
          <Box
            marginTop="0"
            display={{ base: "flex", lg: "flex" }}
            alignItems="center"
            justifyContent="center"
            margin="0 auto"
          >
            <Flex width="100px" height="40px" margin="10px">
              <Reacticon width="10" height="10" marginRight="5px" />
              <Box as="p" fontSize="23px">
                React
              </Box>
            </Flex>
            <Flex width="100px" height="40px" margin="10px">
              <Gatsbyicon width="100" height="10" marginRight="5px" />
              <Box as="p" fontSize="23px">
                Gatsby
              </Box>
            </Flex>

            <Flex
              width="100px"
              height="40px"
              margin={{ base: "0px 20px 0px", lg: "0px 20px 0px" }}
            >
              <Graphqlicon marginRight="5px" />
              <Box as="p" fontSize="23px" color="#e10098">
                Graphql
              </Box>
            </Flex>
            <Flex
              width="100px"
              height="40px"
              margin={{ base: "0px 30px 0px", lg: "0px 15px 0px" }}
            >
              <Emotionicon marginRight="5px" />
              <Box as="p" fontSize="23px" color="#D36AC2">
                Emotion
              </Box>
            </Flex>
            <Flex
              width="100px"
              height="40px"
              margin={{ base: "0px 20px 0px", lg: "0px 25px 0px" }}
            >
              <Chakraicon marginRight="5px" />
              <Box as="p" fontSize="23px" margin="0px 5px 0px">
                Chakra
              </Box>
            </Flex>
          </Box>
        </Box>
        <hr />
      </Box>
      <Box>
        <Flex
          display={{ base: "column", lg: "flex" }}
          margin="2rem auto"
          borderWidth={{ base: "1rem", lg: "3rem" }}
          boxShadow="1px 2px 15px rgb(144, 144, 144, 0.9)"
        >
          <Flex
            as="h1"
            width={{ base: "auto", lg: "320px" }}
            fontSize="32px"
            textAlign="center"
            flexDirection="column"
            color="var(--theme-ui-colors-purple-60,#663399)"
          >
            Blog
            <Box as="p" fontSize="18px" height="110px">
              View Posts List <br />
              觀看我使用md檔列出來的文章，在將來的日子持續增加選寫文章。
            </Box>
            <Button
              width="120px"
              justifyContent="center"
              margin="1rem auto"
              _hover={{ color: "#3b5998" }}
            >
              <Link to="/blog">view more →</Link>
            </Button>
          </Flex>

          <Flex
            as="h1"
            width={{ base: "auto", lg: "320px" }}
            fontSize="32px"
            textAlign="center"
            flexDirection="column"
            color="var(--theme-ui-colors-blue-50,#0d96f2)"
          >
            Demo
            <Box as="p" fontSize="18px" height="110px">
              View My Demo <br />
              觀看我所做實作的程式作品，有計算機及網頁切版。
            </Box>
            <Button
              width="120px"
              justifyContent="center"
              margin="1rem auto"
              _hover={{ color: "#3b5998" }}
            >
              <Link to="/demo">view more →</Link>
            </Button>
          </Flex>
          <Flex
            as="h1"
            width={{ base: "auto", lg: "320px" }}
            fontSize="32px"
            textAlign="center"
            flexDirection="column"
            color="var(--theme-ui-colors-magenta-50,#bc027f)"
          >
            Repo
            <Box as="p" fontSize="18px" height="110px">
              List Github Repositories <br />
              使用 request API 列出我的 Github
              儲存庫，顯示內容並連結到對應專案。
            </Box>
            <Button
              width="120px"
              justifyContent="center"
              margin="1rem auto"
              _hover={{ color: "#3b5998" }}
            >
              <Link to="/repo">learm more →</Link>
            </Button>
          </Flex>
        </Flex>
        <Box marginTop="2rem">
          <Flex
            width={{ base: "200px", sm: "250px", lg: "250px" }}
            height={{ base: "200px", sm: "250px", lg: "250px" }}
            fontSize="32px"
            textAlign="center"
            margin="0 auto"
            flexDirection="column"
            border="1px solid black"
            borderRadius="full"
            boxShadow="1px 2px 15px rgb(144, 144, 144, 0.9)"
            _hover={{ color: "#fc0", background: "#3b5998" }}
          >
            <Box
              as="img"
              src={require("../images/kklogo.png")}
              alt="kkshen3352"
              position="relative"
              left="-15px"
              borde="1px solid red"
            />
            <Box position="relative" top="-20px">
              <Link to="/about">About me</Link>
            </Box>
          </Flex>
        </Box>
      </Box> */
}
