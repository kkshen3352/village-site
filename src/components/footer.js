import React from "react"
import { Box, Flex } from "@chakra-ui/react"

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
      <Box align="center" justify="center" margin="0 auto">
        <a href="http://localhost:8000/about">關於我</a>
      </Box>
    </footer>
  </Flex>
)

export default Footer
