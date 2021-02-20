import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import kklogo from "../images/kklogo.png"
import { Image } from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react"


const links = [
  { name: "首頁", path: "/" },
  { name: "文章", path: "/article" },
  { name: "演示", path: "/demo" },
  { name: "關於我", path: "/about" },
]

const Header = ({ siteTitle, ...props }) => {
  return (
    <header>
      <Box
        as="nav"
        display="flex"
        align={{ lg: "center" }}
        justify={{ lg: "space-between" }}
        wrap="wrap"
        height="100px"
        padding="1rem"
        background="black.000"
        color="white"
        {...props}
      >
        <Flex alignItems="center">
          <Heading as="h1" size="2xl">
            <Box margin="1rem">
              <Link to="/">
                <Image
                  src={kklogo}
                  alt="kklogo"
                  padding="0px"
                  objectFit="center"
                  boxSize="80px"
                />
              </Link>
            </Box>
          </Heading>
          <Box display={{ base: "none", lg: "flex" }}>
            {links.map(({path,name},i) => (
              <Box key={`key-${i}`} margin="1rem">
                <Link to={path}>{name}</Link>
              </Box>
            ))}
          </Box>
            <Menu>
              <MenuButton
                display={{ base: "block", lg: "none" }}
                margin="1rem"
                position="absolute"
                right="0"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                size="lg"
                variant="outline"
              />
              <MenuList color="black">
                {links.map(({path,name},i) => (
                  <MenuItem key={`key-${i}`} justifyContent="center">
                    <Link to={path}>{name}</Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
        </Flex>
      </Box>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
