import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { FaGithub, FaInstagram } from "react-icons/fa"

const Footer = () => (
  <Flex
    bg="black.000"
    align="center"
    justify="center"
    margin="0 auto"
    color="white"
    h="100px"
    position="relative"
    pb="0"
  >
    <footer>
      <Box>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">gatsby</a>
      </Box>
      <Flex align="center" justify="center" margin="5px">
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
        <Box marginLeft="10px">by kkshen</Box>
      </Flex>
      <Flex align="center" justify="center" margin="5px">
        <Box>
          <a href="https://github.com/ClarityAcuity">
            <FaGithub />
          </a>
        </Box>
        <Box marginLeft="10px">by ClarityAcuity</Box>
      </Flex>
    </footer>
  </Flex>
)

export default Footer
