import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { ColorEnums } from "../lib/style-utils"

const { BLACK, WHITE } = ColorEnums

const Footer = () => (
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
          <a href="https://github.com/kkshen3352">
            <FaGithub />
          </a>
        </Box>
        <Box marginLeft="10px">
          <a href="https://www.instagram.com/kkshen3352/">
            <FaInstagram />
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

export default Footer
