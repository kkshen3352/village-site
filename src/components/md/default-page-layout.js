import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

const shortcodes = { Link }

export default ({ children }) => (
  <div>
    <h1>Default Layout</h1>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </div>
)
