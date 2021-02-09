/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from "react"
import { ColorModeScript } from "@chakra-ui/react"

// You can delete this file if you're not using it
// gatsby-ssr.js
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<ColorModeScript key="chakra-ui-no-flash" />])
}