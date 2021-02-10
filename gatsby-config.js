module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
          posts: require.resolve("./src/components/md/posts-layout.js"),
          default: require.resolve(
            "./src/components/md/default-page-layout.js"
          ),
        },
        // shouldBlockNodeFromTransformation(node) {
        //   return (
        //     [`NPMPackage`, `NPMPackageReadme`].includes(node.internal.type) ||
        //     (node.internal.type === `File` &&
        //       path.parse(node.dir).dir.endsWith(`packages`))
        //   )
        // },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          // {
          //   // TODO solve line number pos and
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     // Class prefix for <pre> tags containing syntax highlighting;
          //     // defaults to 'language-' (e.g. <pre class="language-js">).
          //     // If your site loads Prism into the browser at runtime,
          //     // (e.g. for use with libraries like react-live),
          //     // you may use this to prevent Prism from re-processing syntax.
          //     // This is an uncommon use-case though;
          //     // If you're unsure, it's best to use the default value.
          //     classPrefix: "language-",
          //     // This is used to allow setting a language for inline code
          //     // (i.e. single backticks) by creating a separator.
          //     // This separator is a string and will do no white-space
          //     // stripping.
          //     // A suggested value for English speakers is the non-ascii
          //     // character '›'.
          //     inlineCodeMarker: null,
          //     // This lets you set up language aliases.  For example,
          //     // setting this to '{ sh: "bash" }' will let you use
          //     // the language "sh" which will highlight using the
          //     // bash highlighter.
          //     aliases: {
          //       sh: "bash",
          //     },
          //     // This toggles the display of line numbers globally alongside the code.
          //     // To use it, add the following line in gatsby-browser.js
          //     // right after importing the prism color scheme:
          //     //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
          //     // Defaults to false.
          //     // If you wish to only show line numbers on certain code blocks,
          //     // leave false and use the {numberLines: true} syntax below
          //     showLineNumbers: false,
          //     // If setting this to true, the parser won't handle and highlight inline
          //     // code used in markdown i.e. single backtick code like `this`.
          //     noInlineHighlight: false,
          //     // This adds a new language definition to Prism or extend an already
          //     // existing language definition. More details on this option can be
          //     // found under the header "Add new language definition or extend an
          //     // existing language" below.
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
          //     // Customize the prompt used in shell output
          //     // Values below are default
          //     prompt: {
          //       user: "root",
          //       host: "localhost",
          //       global: false,
          //     },
          //     // By default the HTML entities <>&'" are escaped.
          //     // Add additional HTML escapes by providing a mapping
          //     // of HTML entities and their escape value IE: { '}': '&#123;' }
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
