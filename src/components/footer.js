import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { ColorEnums } from "../lib/style-utils"
import { GitHubicon } from "../icon/githubicon"
import { Instagramicon } from "../icon/Instagramicon"

const { BLACK, WHITE } = ColorEnums

const Footer = ({ githubicon, instagramicon }) => {
  return (
    <Flex
      background={BLACK}
      alignItems="center"
      justifyContent="center"
      margin="0 auto"
      color={WHITE}
      height="100px"
    >
      <footer>
        <Flex alignItems="center" justifyContent="center" margin="5px">
          <Box>
            <a href={githubicon}>
              <GitHubicon />
            </a>
          </Box>
          <Box marginLeft="15px">
            <a href={instagramicon}>
              <Instagramicon />
            </a>
          </Box>
        </Flex>
        <Box>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">gatsby</a>
        </Box>
      </footer>
    </Flex>
  )
}
export default Footer