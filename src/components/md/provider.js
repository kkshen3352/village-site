import React, { useState } from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { Box } from "@chakra-ui/core"
import { jsx, css } from "@emotion/core"
import CustomHeading from "./custom-heading"

const shortcodes = { Link }

const h1 = props => <CustomHeading as="h1" size="2xl" {...props} />
const h2 = props => <CustomHeading as="h2" size="xl" {...props} />
const h3 = props => <CustomHeading as="h3" size="lg" {...props} />
const h4 = props => <CustomHeading as="h4" size="md" {...props} />
const h5 = props => <CustomHeading as="h5" size="sm" {...props} />
const h6 = props => <CustomHeading as="h6" size="xs" {...props} />
const p = props => (
  <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
)

const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ...shortcodes,
}

export const Provider = ({ children }) => (
  <Box as="main" p={{ base: 8, lg: 16 }}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Box>
)
