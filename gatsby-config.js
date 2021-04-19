const siteMetadata = require(`./user-config`)
const capitalize = require(`remark-capitalize`)
const emoji = require(`remark-emoji`)

module.exports = {
  pathPrefix: "/kkshen-site",
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kkshen site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: require.resolve(`./src/images/kklogo.png`), // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-glslify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages/posts/`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve(`${__dirname}/src/components/md/posts-layout.js`),
          default: require.resolve(
            `${__dirname}/src/components/md/default-page-layout.js`
          ),
        },
        // shouldBlockNodeFromTransformation(node) {
        //   return (
        //     [`NPMPackage`, `NPMPackageReadme`].includes(node.internal.type) ||
        //     (node.internal.type === `File` &&
        //       path.parse(node.dir).dir.endsWith(`packages`))
        //   )
        // },
        remarkPlugins: [capitalize, emoji],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     classPrefix: "language-",
          //     inlineCodeMarker: null,
          //     aliases: {
          //       sh: "bash",
          //     },
          //     showLineNumbers: false,
          //     noInlineHighlight: false,
          //     languageExtensions: [
          //       {
          //         language: "superscript",
          //         extend: "javascript",
          //         definition: {
          //           superscript_types: /(SuperType)/,
          //         },
          //         insertBefore: {
          //           function: {
          //             superscript_keywords: /(superif|superelse)/,
          //           },
          //         },
          //       },
          //     ],
          //     prompt: {
          //       user: "root",
          //       host: "localhost",
          //       global: false,
          //     },
          //     escapeEntities: {},
          //   },
          // },
        ],
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
}