import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { HamburgerIcon  } from '@chakra-ui/icons'
import kklogo from "../images/kklogo.png"
import { Image } from "@chakra-ui/react"

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react"



// const MenuItems = ({ children }) => (
//   <Text mt={{ base: 4, lg: 0 }} mr={6} display="block">
//     {children}
//   </Text>
// )

const Header = ({ siteTitle, ...props }) => {
  const [show, setShow] = React.useState(false)

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
        bg="black.000"
        color="white"
        {...props}
      >
        <Flex align="center" mr={5}>
        <Heading as="h1" size="2xl">
        <Box margin="1rem">  
        <Link to="/">
          <Image src={kklogo} alt="kklogo"
          padding="0px"
          objectFit="center"
          boxSize="80px"
          />
        </Link>
        </Box>
        </Heading>
        <Box display={{ base: "none", lg: "flex" }}>
        <Box margin="1rem"><Link to="/">首頁</Link></Box>
        <Box margin="1rem"><Link to="/docs">文章</Link></Box>
        <Box margin="1rem"><Link to="/demo">演示</Link></Box>
        <Box margin="1rem"><Link to="/about">關於我</Link></Box>
        </Box>
        
        <Box display={{ base: "block", lg: "none" }} 
        margin="1rem"
        position="absolute"
        right="0"
        >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            size="xs"
            variant="outline"
          />
          <MenuList
          color="black"
          
          >
            <MenuItem justifyContent="center"><Link to="/">首頁</Link></MenuItem>
            <MenuItem justifyContent="center"><Link to="/docs">文章</Link></MenuItem>
            <MenuItem justifyContent="center"><Link to="/demo">演示</Link></MenuItem>
            <MenuItem justifyContent="center"><Link to="/about">關於我</Link></MenuItem>
          </MenuList>
        </Menu>
        </Box>
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
