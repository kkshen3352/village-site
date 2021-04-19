import React, { useState } from "react"
// import { Link as GatsbyLink } from "gatsby"
import { Heading, Link } from "@chakra-ui/react"
import {
  // jsx,
  css,
} from "@emotion/react"

const OctIcon = () => (
  <svg
    className="octicon octicon-link"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    height="16"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
    ></path>
  </svg>
)

export default ({ as, size, children, ...props }) => {
  const [isHover, setIsHover] = useState(false)
  const visibility = isHover ? "visible" : "hidden"

  return (
    <Heading
      id={children}
      css={css`
        .anchor {
          padding-left: 4px;
          line-height: 1;
        }
        .octicon-link {
          color: #1b1f23;
          vertical-align: middle;
          visibility: ${visibility};
        }
      `}
      as={as}
      size={size}
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      margin="1.5rem 0"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      {children}
      <Link
        id={`user-content-${children}`}
        className="anchor"
        href={`#${children}`}
      >
        <OctIcon />
      </Link>
    </Heading>
  )
}
