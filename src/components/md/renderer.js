import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { StaticQuery } from "gatsby"

export default class MyPageLayout {
  render() {
    return <MDXRenderer>{this.props.data.mdx.body}</MDXRenderer>
  }
}

export const pageQuery = StaticQuery`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
    }
  }
`
