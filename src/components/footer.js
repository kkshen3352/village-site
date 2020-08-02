import React from "react"
import { Flex } from "@chakra-ui/core"

const Footer = () => (
  <Flex bg="blue.50" align="center" justify="center">
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Flex>
)

export default Footer
