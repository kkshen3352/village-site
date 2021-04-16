import React, { useState, useEffect } from "react"
import { Box, Badge, Flex } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import Layout from "../components/layout"
import { request } from "@octokit/request"
import { SizeEnums } from "../lib/style-utils"
import { useStaticQuery, graphql } from "gatsby"

const { LARGE, EXTRALARGE, XXL } = SizeEnums
const RepoPage = () => {
  const [repoData, setrepoData] = useState([])
  const data = useStaticQuery(graphql`
    query useStaticQuery {
      site {
        siteMetadata {
          username
        }
      }
    }
  `)

  async function getProjectRequest() {
    const result = await request({
      method: "GET",
      url: `/users/${data.site.siteMetadata.username}/repos`,
      username: `${data.site.siteMetadata.username}`,
      sort: "updated",
    })
    return result
  }

  useEffect(() => {
    async function resRepo() {
      const result = await getProjectRequest()
      setrepoData(result?.data)
    }
    resRepo()
  })

  return (
    <Layout>
      <Flex
        maxWidth="960px"
        padding="1.45rem 1.0875rem 1.45rem"
        alignItems="center"
        justifyContent="center"
        margin="0 auto"
      >
        <Box maxWidth="960px" width="100%">
          {repoData.map(
            (
              { name, description, html_url, updated_at, owner: { login } },
              n
            ) => (
              <Box
                key={n}
                maxW={XXL}
                borderWidth="1px"
                borderRadius={LARGE}
                overflow="hidden"
                margin="5"
              >
                <Box padding="4">
                  <Flex alignItems="baseline">
                    <Badge borderRadius="full" colorScheme="teal">
                      {login}
                    </Badge>
                  </Flex>
                  <Box as="h1" fontWeight="semibold" fontSize={EXTRALARGE}>
                    <Link href={html_url} isExternal>
                      {name}
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Box>
                  <Box
                    as="p"
                    margin="1.5rem 0rem"
                    marginTop="1"
                    fontSize={LARGE}
                    isTruncated
                  >
                    {description}
                  </Box>
                  <Flex margintop="10" alignItems="center" position="relative">
                    <Flex
                      as="span"
                      alignItems="center"
                      justifyItems="center"
                      fontSize="sm"
                      position="absolute"
                      right="0"
                    >
                      Latest Updated:{" "}
                      {updated_at.slice(0, 4) +
                        "-" +
                        updated_at.slice(5, 7) +
                        "-" +
                        updated_at.slice(8, 10)}
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            )
          )}
        </Box>
      </Flex>
    </Layout>
  )
}

export default RepoPage
