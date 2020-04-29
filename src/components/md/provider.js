import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { Heading } from '@chakra-ui/core'

const shortcodes = { Link }

const MyH1 = props => <h1 style={{ color: "tomato" }} {...props} />
const MyParagraph = props => <p style={{ fontSize: "18px", lineHeight: 1.6 }} />

const components = {
  h1: MyH1,
  p: MyParagraph,
  ...shortcodes,
}

export const Provider = ({ children }) => (
  <main>
    <MDXProvider components={components}>{children}</MDXProvider>
  </main>
)
