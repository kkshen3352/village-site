import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import kklogo from "../images/kklogo.png"
import { Image } from "@chakra-ui/react"

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, lg: 0 }} mr={6} display="block">
    {children}
  </Text>
)

const Header = ({ siteTitle, ...props }) => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <header>
      <Box
        as="nav"
        display={{ base: "block", lg: "flex" }}
        align={{ lg: "center" }}
        justify={{ lg: "space-between" }}
        wrap="wrap"
        padding="1.5rem"
        bg="black.000"
        color="white"
        
        {...props}
      >
        <Flex align="center" mr={5}>
          <Box
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <Heading as="h1" size="2xl">
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <Image src={kklogo} alt="kklogo"
                objectFit="center"
                boxSize="150px"
                />
              </Link>
            </Heading>
          </Box>

          <Box flex={{ base: 1 }} width={{ base: "full" }} />

          <Box
            display={{ base: "flex", lg: "none" }}
            onClick={handleToggle}
          >
            <svg
              fill="white"
              width="36px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </Box>
        </Flex>

        <Box
          align="center"
          display={{ base: show ? "block" : "none", lg: "flex" }}
          width={{ md: "full", lg: "auto" }}
          alignItems={{ lg: "center" }}
          flexGrow={1}
        >
          <MenuItems>首頁</MenuItems>
          <MenuItems>文章</MenuItems>
          <MenuItems>演示</MenuItems>
          <MenuItems>關於我</MenuItems>
        </Box>

        <Box
          display={{ base: show ? "block" : "none", lg: "flex" }}
          mt={{ base: 4, lg: 0 }}
          alignItems={{ lg: "center" }}
        >
          <Button 
          display={{ base: "flex", lg: "flex" }}
          margin="0 auto"
          align="center" justify="center" bg="transparent" border="1px">
            <MoonIcon />
          </Button>
        </Box>
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
