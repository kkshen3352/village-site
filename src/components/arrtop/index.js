import React, { useState } from "react"
import { Box } from "@chakra-ui/react"
import "./style.css"

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  window.addEventListener("scroll", checkScrollTop)

  return (
    <bottom
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    >
      <Box
        as="button"
        width="50px"
        height="50px"
        borderRadius="50%"
        border="1px solid black"
        background="#fc0"
        _hover={{ color: "white", background: "#3b5998" }}
      >
        Top
      </Box>
    </bottom>
  )
}

export default ScrollArrow
