import React from "react"
import { Link } from "@chakra-ui/react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { GitHubicon } from "../icon/githubicon"
import { Instagramicon } from "../icon/Instagramicon"

const SecondPage = ({ data }) => {
  const {
    site: {
      siteMetadata: { title, description, author, username },
    },
  } = data

  return (
    <Layout>
      <SEO title={title} />
      <h1>About</h1>
      <h1>Author: {author}</h1>
      <p>{description}</p>
      <br />
      <Link href={`https://github.com/${username}`}>
        <GitHubicon />
        github
      </Link>
      <br />
      <Link href={`https://www.instagram.com/${username}`}>
        <Instagramicon />
        instagram
      </Link>
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
        username
      }
    }
  }
`
