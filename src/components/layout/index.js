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

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          github
          instagram
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Flex
        margin="0 auto"
        maxWidth="960px"
        padding="1.45rem 1.0875rem 1.45rem"
        flexDirection="column"
        minHeight="80vh"
      >
        <Box flexGrow="1">
          <main>{children}</main>
        </Box>
      </Flex>
      <Footer
        githubicon={data.site.siteMetadata.github}
        instagramicon={data.site.siteMetadata.instagram}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout