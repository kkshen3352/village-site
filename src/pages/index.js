import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({ data }) {
  const query = useStaticQuery(graphql`
    query IndexPageQuery {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          id
          slug
          timeToRead
          excerpt
          frontmatter {
            title
            date
            author
          }
        }
      }
    }
  `)

  console.log(query)
  const {
    allMdx: { nodes },
  } = query

  function _renderPosts() {
    return nodes.map(
      ({
        id,
        slug,
        timeToRead,
        excerpt,
        frontmatter: { title, date, author },
      }) => {
        return (
          <Box key={id}>
            <h1>{title}</h1>
            <div>
              <span>{excerpt}</span>
            </div>
            <Flex>
              <div>{timeToRead} min read</div>
              <Link to={`/posts/${slug}`}>Read More</Link>
            </Flex>
            <Flex>
              <div>{author}</div>
              <div>{date}</div>
            </Flex>
          </Box>
        )
      }
    )
  }
  return (
    <Layout>
      <SEO title="Home" />
      {_renderPosts()}
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/geo">Go to geo page</Link>
      <Link to="/rect">Go to rect page</Link>
      <Link to="/rect-gl">Go to rect GL page</Link>
      <Link to="/ray-tracing">Go to ray tracing page</Link>
    </Layout>
    
  )
}

export default IndexPage
