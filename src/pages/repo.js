import React, { useState, useEffect } from "react"
import { Box, Badge } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import Layout from "../components/layout"
import { request } from "@octokit/request"
import { TimeIcon, TriangleDownIcon } from "@chakra-ui/icons"
import { SizeEnums, ColorEnums } from "../lib/style-utils"
const { LARGE, EXTRALARGE, XXL } = SizeEnums
const { GRAY } = ColorEnums
const gitList = require("../../user-config")

const RepoPage = () => {
  const [getData, setgetData] = useState([])

  async function getProjectRequest() {
    const gitusers = gitList[`usergit`]
    const result = await request(gitusers)
    return result
  }

  useEffect(async function() {
    const result = await getProjectRequest()
    setgetData(result?.data)
  }, [])

  return (
    <Layout>
      <Box
        as="h1"
        color="back"
        textShadow="2px 2px #bbb"
        m="6"
        height="670px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "26px", lg: "48px" }}
        margin="1rem"
        marginTop="0"
        width={{ base: "345px", lg: "895px" }}
      >
        Welcome to KKshen repo
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <TriangleDownIcon />
      </Box>
      <Box>
        {getData.map(
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
                <Box d="flex" alignItems="baseline">
                  <Badge borderRadius="full" colorScheme="teal">
                    {login}
                  </Badge>
                </Box>
                <Box as="h1" fontWeight="semibold" fontSize={EXTRALARGE}>
                  <Link href={html_url}>
                    {name}
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>
                <Box
                  margin="1.5rem 0"
                  marginTop="1"
                  as="p"
                  fontSize={LARGE}
                  isTruncated
                >
                  {description}
                </Box>
                <Box
                  display="flex"
                  margintop="10"
                  alignItems="center"
                  position="relative"
                >
                  <Box
                    as="span"
                    display="flex"
                    alignItems="center"
                    justifyItems="center"
                    color={GRAY}
                    fontSize="sm"
                    position="absolute"
                    right="0"
                  >
                    <TimeIcon margin="2" marginTop="10px" />{" "}
                    {updated_at.slice(0, 4) +
                      "/" +
                      updated_at.slice(5, 7) +
                      "/" +
                      updated_at.slice(8, 10) +
                      " " +
                      "-" +
                      " " +
                      updated_at.slice(11, 16)}
                  </Box>
                </Box>
              </Box>
            </Box>
          )
        )}
      </Box>
      <Link to="/repo">
        <Box textAlign="center">Go Top</Box>
      </Link>
    </Layout>
  )
}

export default RepoPage
