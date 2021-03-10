import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Flex } from "@chakra-ui/react"
import { graphql } from "gatsby"

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
        <Box
          as="svg"
          width="888"
          height="809"
          viewBox="0 0 888 809"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="css-jkl1fc"
        >
          <Box
            as="circle"
            cx="441"
            cy="413"
            r="395.25"
            transform="rotate(-180 441 413)"
            stroke="#F5F5F5"
            stroke-width="1.5"
          ></Box>
          <path
            d="M105.75 413C105.75 227.846 255.846 77.75 441 77.75C626.153 77.75 776.25 227.846 776.25 413C776.25 598.153 626.153 748.25 441 748.25C255.846 748.25 105.75 598.153 105.75 413Z"
            stroke="#F0F0F2"
            stroke-width="1.5"
          ></path>
          <ellipse
            cx="96"
            cy="215"
            rx="7.99996"
            ry="8"
            fill="#FEC21E"
          ></ellipse>
          <ellipse
            cx="276.235"
            cy="123"
            rx="6.00001"
            ry="6"
            fill="#59C156"
          ></ellipse>
          <ellipse
            cx="774"
            cy="198"
            rx="6.00026"
            ry="6"
            fill="#B17ACC"
          ></ellipse>
          <ellipse
            cx="192.999"
            cy="637"
            rx="5.99947"
            ry="6"
            fill="#F67300"
          ></ellipse>
          <ellipse
            cx="695.2"
            cy="635.956"
            rx="10.0001"
            ry="10"
            fill="#DBF0FF"
          ></ellipse>
          <ellipse
            cx="6.00014"
            cy="525"
            rx="6.00014"
            ry="6"
            fill="#E899CE"
          ></ellipse>
          <ellipse
            cx="879"
            cy="400"
            rx="7.99983"
            ry="8"
            fill="#BCE939"
          ></ellipse>
        </Box>
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
