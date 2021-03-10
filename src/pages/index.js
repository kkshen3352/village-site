import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Flex } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { Reacticon } from "../icon/reacticon"

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
          <circle
            as="circle"
            cx="441"
            cy="413"
            r="395.25"
            transform="rotate(-180 441 413)"
            stroke="#F5F5F5"
            stroke-width="1.5"
          />
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
      <Flex
        maxWidth={{ base: "560px", lg: "960px" }}
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
      >
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
            <Box
              as="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMpoO1zZjWZUxgcOndP_ksCe5weBpXf51VA&usqp=CAU"
              alt="Gatsby"
              width="30px"
              height="30px"
              objectFit="cover"
            />
            <Box as="p" fontSize="23px" marginLeft="5px" marginRight="5px">
              Gatsby
            </Box>
          </Flex>
          <Box
            as="img"
            src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true"
            alt="chakra"
            objectFit="center"
            marginRight="5px"
            maxWidth="100%"
            width="120px"
            height="40px"
          />
          <Box
            as="img"
            src="https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg"
            alt="GrqphQl"
            objectFit="cover"
            width="120px"
            height="40px"
            marginLeft="5px"
          />
          <Flex width="120px" height="40px">
            <Box
              as="img"
              src="https://emotion.sh/static/a76dfa0d18a0536af9e917cdb8f873b9/58e7f/emotion.png"
              alt="Emotion"
              width="35xp"
              height="35px"
              objectFit="cover"
              marginTop="-5px"
            />
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
