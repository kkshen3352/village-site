/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "@chakra-ui/react"
import Header from "../header"
import Footer from "../footer"
import ScrollArrow from "../arrtop"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          username
          keywords
        }
      }
    }
  `)
  return (
    <>
      <Box>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Flex
          margin="0 auto"
          maxWidth="1920px"
          flexDirection="column"
          minHeight="calc(100vh - 200px)"
        >
          <Box>{children}</Box>
        </Flex>
        <ScrollArrow />
        <Footer username={data.site.siteMetadata.username} />
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
