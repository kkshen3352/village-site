import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Flex, Button } from "@chakra-ui/react"
import { graphql, Link } from "gatsby"
import { Reacticon } from "../icon/reacticon"
import { Gatsbyicon } from "../icon/gatsbyicon"
import { Chakraicon } from "../icon/chakrsicon"
import { Graphqlicon } from "../icon/graphqlicon"
import { Emotionicon } from "../icon/emotionicon"
import urlGoogle2 from "../images/DSC_7875_1.jpg"

function IndexPage({ data }) {
  const {
    site: { pathPrefix },
  } = data
  return (
    <Layout m="5">
      <SEO title="Home" />
      <Flex alignItems="center" justifyContent="center" margin="0 auto">
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
      </Box>
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
