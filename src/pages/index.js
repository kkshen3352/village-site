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
// import Header from "../components/header"
// import Footer from "../components/footer"
import urlGoogle2 from "../images/banner.jpg"

function IndexPage({ data }) {
  const {
    site: { pathPrefix },
  } = data

  return (
    <Layout>
      <SEO title={pathPrefix} />
      <Flex flexDirection="column" maxWidth="1920px" margin="0 auto">
        <Box
          maxWidth="1920px"
          width="100%"
          width={{ base: "220px", lg: "460px" }}
          height={{ base: "180px", lg: "500px" }}
          flexDirection="column"
          fontSize={{ base: "24px", sm: "42px", lg: "48px" }}
          position="absolute"
          top={{ base: "260px", sm: "340px", lg: "370px", xl: "400px" }}
          left={{ base: "60px", sm: "70px", lg: "80px", xl: "300px" }}
          zIndex="1"
          textShadow="1px 2px 3px #707070"
        >
          <Box as="p" fontSize="18px">
            {" "}
            Hello, I am
          </Box>
          <Box fontSize={{ base: "24px", sm: "42px", lg: "48px" }}>KKshen.</Box>
          <Box
            as="p"
            fontSize="18px"
            // color={{ base: "white", sm: "white", lg: "black" }}
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
            boxShadow="-1px 1px 10px#707070"
            _hover={{ color: "white", background: "black" }}
          >
            <Link to="/demo">View my works</Link>
          </Box>
        </Box>
        <Box
          as="img"
          maxHeight={{ lg: "850px" }}
          height={{ base: "570px", sm: "720px", lg: "900px" }}
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
            fontSize={{ base: "18px", sm: "20px", lg: "24px" }}
            margin={{
              base: "4.5rem 0 4.5rem",
              sm: "6rem",
              lg: "5rem auto 3rem 0",
            }}
          >
            Enjoy my website design works!
          </Flex>
          <Flex flexWrap={{ base: "wrap" }} alignItems="center" margin="0 auto">
            <Flex
              flexDirection={{ lg: "column" }}
              display={{ base: "block" }}
              alignItems="center"
              margin="0 auto"
              textAlign="center"
            >
              <Box
                as="img"
                maxWidth={{ base: "340px", sm: "530px", lg: "450px" }}
                width="100%"
                height={{ sm: "400px", lg: "300px" }}
                margin="0 auto"
                src={require("../images/triphome.jpg")}
                alt={require("../images/triphome.jpg")}
                objectFit="cover"
                margin={{ base: "0 auto", lg: "0 2rem" }}
                borderRadius="10px"
                border={{ base: "1px solid black" }}
                boxShadow={{ base: "1px 1px 7px 3px #aaaaaa" }}
              />
              <Box
                as="p"
                fontSize={{ base: "18px", lg: "24px" }}
                margin={{ base: "2rem 0", lg: "1rem" }}
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
                maxWidth={{ base: "340px", sm: "530px", lg: "450px" }}
                width="100%"
                height={{ lg: "300px" }}
                margin="0 auto"
                src={require("../images/tripindex.jpg")}
                alt={require("../images/tripindex.jpg")}
                objectFit="cover"
                margin={{ base: "0 auto", lg: "0 2rem" }}
                borderRadius="10px"
                border={{ base: "1px solid black" }}
                boxShadow={{ base: "1px 1px 7px 3px #aaaaaa" }}
              />
              <Box
                as="p"
                fontSize={{ base: "18px", lg: "24px" }}
                margin={{ base: "2rem 0", lg: "1rem" }}
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
                maxWidth={{ base: "340px", sm: "530px", lg: "450px" }}
                width="100%"
                height="300px"
                margin="0 auto"
                src={require("../images/tripsig.jpg")}
                alt={require("../images/tripsig.jpg")}
                objectFit="cover"
                margin={{ base: "0 auto", lg: "0 2rem" }}
                borderRadius="10px"
                border={{ base: "1px solid black" }}
                boxShadow={{ base: "1px 1px 7px 3px #aaaaaa" }}
              />
              <Box
                as="p"
                fontSize={{ base: "18px", lg: "24px" }}
                margin={{
                  base: "2rem 0 4rem",
                  sm: "2rem 0 5rem",
                  lg: "1rem",
                }}
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
              width={{ base: "305px", lg: "520px" }}
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
              maxWidth={{ base: "414px", sm: "768px", lg: "634.3px" }}
              width="100%"
              height={{ base: "400px", lg: "550px" }}
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
              width={{ base: "305px", lg: "520px" }}
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
              maxWidth={{ base: "414px", sm: "768px", lg: "634.3px" }}
              width="100%"
              height={{ base: "400px", lg: "550px" }}
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
              width={{ base: "305px", lg: "520px" }}
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
              maxWidth={{ base: "414px", sm: "768px", lg: "634.3px" }}
              width="100%"
              height={{ base: "400px", lg: "550px" }}
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
          maxWidth={{
            base: "340px",
            sm: "530px",
            lg: "1910px",
            xl: "1024px",
          }}
          height="110px"
          fontSize={{ base: "24px", lg: "36px" }}
          color="white"
          alignItems="center"
          justifyContent={{ base: "center", lg: "left" }}
          margin={{ base: "0 auto", lg: "0 150px", xl: "0 300px" }}
          marginRight={{ base: "0 auto", lg: "0", xl: "300px" }}
        >
          Learn more about me
        </Flex>
        <Box
          as="button"
          width="280px"
          height="50px"
          color="white"
          background="#333333"
          borderRadius="30px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid white"
          marginLeft={{ base: "0", lg: "150px", xl: "250px" }}
          margin={{ base: "0 auto" }}
          _hover={{ color: "black", background: "white" }}
        >
          <Link to="/about">Viwe More</Link>
        </Box>
      </Flex>
      <Flex
        flexWrap="wrap"
        maxWidth="1920px"
        height="154px"
        height="100%"
        margin="0 auto"
        background="#333333"
        color="white"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          width={{ base: "768px", lg: "960px", xl: "1620px" }}
          border="1px solid #707070"
          alignItems="center"
          justifyContent="center"
        ></Flex>
        <Flex
          width={{ base: "350px", sm: "578px", lg: "768px", xl: "900px" }}
          height="150px"
          alignItems="center"
          justifyContent={{ base: "center", xl: "left" }}
          borderBottom={{
            base: "1px solid #707070",
            lg: "1px solid #707070",
            xl: "none",
          }}
          marginLeft={{ xl: "150px" }}
        >
          This Blog is built with …{" "}
        </Flex>
        <Flex
          width="200px"
          height="150px"
          borderRight="1px solid #707070"
          borderLeft="1px solid #707070"
          alignItems="center"
          justifyContent="center"
          display={{ base: "none", xl: "block" }}
        ></Flex>
        <Flex
          width="350px"
          height="150px"
          textAlign={{ base: "center", xl: "right" }}
          alignItems="center"
          justifyContent={{ base: "center", xl: "center" }}
        >
          If you have any further questions,
          <br />
          feel free to contact me{" "}
        </Flex>
        <Flex
          width={{ base: "960px", xl: "1620px" }}
          border="1px solid #707070"
          alignItems="center"
          justifyContent="center"
        ></Flex>
      </Flex>
    </Layout>
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
