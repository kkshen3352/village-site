import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const { site :{ siteMetadata: { title, description, author } } } = data;

   return (
    <Layout>
      <SEO title={title} />
      <h1>About</h1>
      <h1>Author: {author}</h1>
      <p>{description}</p>
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