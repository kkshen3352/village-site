import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GitHubicon } from "../icon/githubicon"
import { Instagramicon } from "../icon/Instagramicon"

const SecondPage = ({ data }) => {
  const {
    site: {
      siteMetadata: { title, description, author, github, instagram },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} />
      <h1>About</h1>
      <h1>Author: {author}</h1>
      <p>{description}</p>
      <br />
      <Link to={github}>
        <GitHubicon />
        github
      </Link>
      <br />
      <Link to={instagram}>
        <Instagramicon />
        instagram
      </Link>
      <hr />
      <br />
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
        github
        instagram
      }
    }
  }
`