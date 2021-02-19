import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage() {
  
  return (
    <Layout m="5">
      <SEO title="Home" />
      <h1>Hello World</h1>
      {/* <Flex><Link to="/page-2/">Go to page 2</Link></Flex>
      <Flex><Link to="/geo">Go to geo page</Link></Flex>
      <Flex><Link to="/rect">Go to rect page</Link></Flex>
      <Flex><Link to="/rect-gl">Go to rect GL page</Link></Flex>
      <Flex><Link to="/ray-tracing">Go to ray tracing page</Link></Flex> */}
    </Layout>
  )
}

export default IndexPage
