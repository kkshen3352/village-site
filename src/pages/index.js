import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Flex } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { Reacticon } from "../icon/reacticon"
import { Gatsbyicon } from "../icon/gatsbyicon"
import { Chakraicon } from "../icon/chakrsicon"
import { Graphqlicon } from "../icon/graphqlicon"
import { Emotionicon } from "../icon/emotionicon"
import urlGoogle2 from "../images/DSC_7875.jpg"

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
            fontSize={{ base: "21px", lg: "48px" }}
            textAlign="center"
          >
            Hi people
          </Box>
          <Box
            as="h1"
            fontSize={{ base: "21px", lg: "48px" }}
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
          boxSize={{ base: "330px", lg: "600px" }}
          src={urlGoogle2}
          alt={urlGoogle2}
        />
      </Flex>
      <Box paddingTop={{ base: "3rem", lg: "2rem" }}>
        <marquee
          direction="left"
          height="60"
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
        </marquee>
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
