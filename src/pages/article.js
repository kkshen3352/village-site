import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Badge } from "@chakra-ui/react"
import Layout from "../components/layout"
import { TimeIcon, ViewIcon } from "@chakra-ui/icons"

function IndexPageQuery( {data} ) {
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
          <Box
            key={id}
            maxW="xxl"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m="5"
          >
            <Box p="4">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="1" colorScheme="teal">
                  {author}
                </Badge>
              </Box>
              <Box as="h1" fontWeight="semibold" fontSize="xl">{title}</Box>
              <Box
                mt="1"
                as="h2"
                lineHeight="tight"
                fontSize="lg"
                isTruncated
              >
                {excerpt} 
              </Box>
              <Box
                d="flex"
                mt="2"
                alignItems="center"
                position="relative"
                mt="2"
              >
                <Box as="span" color="gray.600" fontSize="sm">
                  <ViewIcon m="2" />
                  {timeToRead} min read
                  <Link to={`/posts/${slug}`}>Read More</Link>
                </Box>
                <Box
                  as="span"
                  ml="2"
                  color="gray.600"
                  fontSize="sm"
                  position="absolute"
                  right="0"
                >
                  <TimeIcon m="2" />
                  {date}
                </Box>
              </Box>
            </Box>
          </Box>
        )
      }
    )
  }
  return <Layout>{_renderPosts()}</Layout>
}

export default IndexPageQuery
