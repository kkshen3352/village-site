/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
const path = require(`path`)

exports.createPages = async function({ actions, graphql }) {
  const { createPage } = actions
  const { data, errors } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  data.allMdx.edges.forEach(({ node }, index) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: path.resolve(`./src/components/md/posts-layout.js`),
      // values in the context object are passed in as variables to page queries
      context: {
        id: node.id,
        slug: node.slug,
      },
    })
  })
}