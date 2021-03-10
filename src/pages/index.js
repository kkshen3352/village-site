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
import { Indexbk } from "../images/indexbk"

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
        >
          <Box as="h1" fontSize={{ base: "21", lg: "48px" }}>
            Hi people
          </Box>
          <Box
            as="h1"
            fontSize={{ base: "21px", lg: "48px" }}
            color="{##8a4baf}"
          >
            Welcome to yoBoxur new {""}
            {pathPrefix.slice(1, 12)}.
          </Box>
        </Box>
        <Indexbk />
      </Flex>
      <Flex>
        <Flex
          paddingTop="1rem"
          marginTop="1rem"
          display={{ base: "display", lg: "flex" }}
          alignItems="center"
          justifyContent="center"
          margin="0 auto"
        >
          <Flex width="120px" height="40px">
            <Reacticon width="10" height="10" />
            <Box as="p" fontSize="23px" marginLeft="5px">
              React
            </Box>
          </Flex>
          <Flex width="120px" height="40px">
            <Gatsbyicon width="100" height="10" />
            <Box as="p" fontSize="23px" marginLeft="-105px">
              Gatsby
            </Box>
          </Flex>
          <Flex width="120px" height="40px">
            <Chakraicon />
            <Box as="p" fontSize="23px">
              Chakra
            </Box>
          </Flex>
          <Flex width="120px" height="40px">
            <Graphqlicon />
            <Box as="p" fontSize="23px" color="#e10098">
              Graphql
            </Box>
          </Flex>
          <Flex width="120px" height="40px">
            <Emotionicon />
            <Box as="p" fontSize="23px" color="#D36AC2">
              Emotion
            </Box>
          </Flex>
        </Flex>
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
