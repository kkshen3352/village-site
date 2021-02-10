import React from "react"
import { Flex } from "@chakra-ui/react"

const Footer = () => (
  <Flex bg="black.000" align="center" justify="center"
  color="white" h="170px">
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">關於我</a>
    </footer>
  </Flex>
)

export default Footer
