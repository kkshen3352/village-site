import React from "react"
import { Link } from "gatsby"
import { Flex } from "@chakra-ui/react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} />
      <h1>Demo1</h1>
      <h1>Author: {author}</h1>
      <p>{description}</p>
      <Flex><Link to="/page-2/">Go to page 2</Link></Flex>
      <Flex><Link to="/geo">Go to geo page</Link></Flex>
      <Flex><Link to="/rect">Go to rect page</Link></Flex>
      <Flex><Link to="/rect-gl">Go to rect GL page</Link></Flex>
      <Flex><Link to="/ray-tracing">Go to ray tracing page</Link></Flex>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
