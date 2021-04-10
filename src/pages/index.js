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

function IndexPage({ data }) {
  const {
    site: { pathPrefix },
  } = data
  const urlGoogle2 =
    "https://lh3.googleusercontent.com/RJW5As6mPiqbG5Z2IwzDyw4Fy3f3Fw7D8LUz4l-Z4b6THVbZaN--EL08CRADl2Nqj8oxcP_nOABWa22auZB2B-0xbpo5ETdnyoQ1bccwKtx_vLJzGtcpddOUtAZ0h_zNMzNuvSUP1AYLvhHpL8CNG3ehJliJ6posY5RVRIMNoEPl3oDnxrlrb8MYYU6xtstOTyly-ghQIu565V15zAM5goxN4wpMP-oEIXrpZeTBgOencIMenI-bVUcX8JUVAY1Fojv1JKucSVV1Tna0Ldj5DDLBZNh6vZzLXMNr5EZ25_hFmcwAozHjSrZNT7rN3OZsysiTs76fwnpctpXJcclFI30VNgzncwu7t450PzdV4fvTk7JypXwJGf-RJciuS-4iD5GbMhh5TrfBhavZrbJMkFuFlxNchxRbcaQrXfxOOoRWGcgACXLfkMgRh01erFKfpBDkAfud0lJh92Ai8hucuGUJ4I7qajFUFzGHOhokegP6E6MnMzMgR5qDBqUQH3d9TdPHdIpF5TuWVPWnPhGLk8ZFwot2RP2jsxNILp2g0fwFsEjSbpXIIrHbU-X2pZl-w33ePzjQwI9-WYUHFyIekKwnw-eWT1a21mjnANdJ_jzcurkoVYVQjHvR5L1xM_kkSwMukg9JKu5_PHmlkIFdxmMPSb2GVd9EzU8bqgyuwenDj_vvOMQqB2GzIu3T1-uCqCDZg4FL1JIfCZZzVLp_7J1CVg=w1322-h881-no?authuser=0"

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
