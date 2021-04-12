import React from "react"
import { MDXProvider } from "@mdx-js/react"
// import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  List,
  ListItem,
  Link,
  Image,
  Heading,
  // Code
} from "@chakra-ui/react"
// import { jsx, css } from "@emotion/react"
// import Heading from "./heading"
import CodeBlock from "./code-block"

const shortcodes = { Link }

export default props => (
  <MDXProvider components={components}>
    <main {...props}></main>
  </MDXProvider>
)
const components = {
  h1: props => <Heading as="h1" size="2xl" marginBottom="1rem" {...props} />,
  h2: props => <Heading as="h2" size="xl" marginBottom="1rem" {...props} />,
  h3: props => <Heading as="h3" size="lg" marginBottom="1rem" {...props} />,
  h4: props => <Heading as="h4" size="md" marginBottom="1rem" {...props} />,
  h5: props => <Heading as="h5" size="sm" marginBottom="1rem" {...props} />,
  h6: props => <Heading as="h6" size="xs" marginBottom="1rem" {...props} />,

  p: props => <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />,

  ol: props => <List as="ol" styleType="decimal" {...props} />,
  ul: props => <List as="ul" {...props} styleType="disc" />,
  li: props => <ListItem {...props} marginLeft="1re2m" />,

  a: props => <Link color="#0366d6" {...props} />,

  img: props => <Image {...props} marginBottom="1rem" />,

  // ``` ``` => <pre><code></code></pre>, ` ` => <code></code>
  pre: props => (
    <Box
      as="pre"
      mb="1.45rem"
      backgroundColor="gray.100"
      overflow="auto"
      {...props}
    />
  ),
  // inlineCode: props => <Code colorScheme="gray.100" {...props} />,
  code: props => <CodeBlock colorScheme="gray.100" {...props} />,

  table: props => <Box as="table" border="2px solid black" boxShadow="-1px -1px 3px white"{...props} />,
  thead: props => <Box as="thead" border="1px solid black" boxShadow="1px -1px 5px white"{...props} />,
  tr: props => <Box as="tr" border="1px solid black" boxShadow="1px 1px 1px white"{...props} />,
  th: props => <Box as="th" border="1px solid black" boxShadow="3px 2px 3px white"{...props} />,
  tbody: props => <Box as="tbody" border="1px solid black" boxShadow="3px 2px 10px white"{...props} />,
  td: props => <Box as="td" border="1px solid black" boxShadow="3px 2px 3px white"{...props} />,

  blockquote: props => (
    <Box
      as="blockquote"
      p={[0, 4]}
      color="gray.200"
      borderLeft=".25em solid gray.100"
      // css={css`
      //   padding: 0 1em;
      //   color: #6a737d;
      //   border-left: 0.25em solid #dfe2e5;
      // `}
      {...props}
    />
  ),

  ...shortcodes,
}

export const Provider = ({ children }) => (
  <Box margin="0 auto" maxWidth="960px" padding="1.45rem 1.0875rem 1.45rem">
    <MDXProvider components={components}>{children}</MDXProvider>
  </Box>
)
