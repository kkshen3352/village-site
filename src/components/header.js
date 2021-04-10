import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Box,
  Flex,
  Heading,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react"
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import { SizeEnums, ColorEnums } from "../lib/style-utils"

const links = [
  { name: "Blog", path: "/blog" },
  { name: "Demo", path: "/demo" },
  { name: "Repo", path: "/repo" },
  { name: "About", path: "/about" },
]
const { LARGE, EXTRALARGE } = SizeEnums
const { BLACK, WHITE } = ColorEnums

const Header = ({ siteTitle }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Box
        as="nav"
        display="flex"
        alignContent={{ lg: "center" }}
        justifyContent={{ lg: "space-between" }}
        wrap="wrap"
        height="100px"
        padding="1rem"
        background={BLACK}
        color={WHITE}
      >
        <Flex alignItems="center" width="960px" margin="0 auto">
          <Heading as="h4" size={EXTRALARGE} marginLeft="1rem">
            <Box
              margin="1rem"
              _hover={{
                color: "#3b5998",
              }}
            >
              <Link to="/" width={{ base: "240px", ms: "300px", lg: "390px" }}>
                {siteTitle}
              </Link>
            </Box>
          </Heading>
          <Box display={{ base: "none", lg: "flex" }} marginTop="5px">
            {links.map(({ path, name }, i) => (
              <Box
                key={`key-${i}`}
                marginLeft="2rem"
                _hover={{
                  color: "#3b5998",
                }}
              >
                <Link as="a" to={path}>
                  {name}
                </Link>
              </Box>
            ))}
          </Box>
          <Box
            onClick={toggleColorMode}
            size="sm"
            position="absolute"
            size="lg"
            right={{ base: "6.5rem", lg: "2rem" }}
          >
            {colorMode === "light" ? (
              <IconButton
                aria-label="Search database"
                color="black"
                icon={<SunIcon />}
              >
                Dark
              </IconButton>
            ) : (
              <IconButton
                aria-label="Search database"
                color="white"
                icon={<MoonIcon />}
              >
                Light
              </IconButton>
            )}
          </Box>
          <Menu closeOnSelect={false}>
            <MenuButton
              display={{ base: "block", lg: "none" }}
              margin="1rem"
              position="absolute"
              right="5"
              as={IconButton}
              aria-label="Menu"
              icon={<HamburgerIcon />}
              size={LARGE}
              variant="outline"
              background="black"
              _hover={{
                background: "white",
                color: "black",
              }}
              _active={{ background: "white", color: "black" }}
            />

            <MenuList
              color="black"
              margin="0 auto"
              textAlign="center"
              alignItems="center"
              justifyContent="center"
            >
              {links.map(({ path, name }, i) => (
                <Link key={`key-${i}`} to={path}>
                  <MenuItem
                    justifyContent="center"
                    _hover={{
                      background: "black",
                      color: "white",
                    }}
                  >
                    {name}
                  </MenuItem>
                </Link>
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
