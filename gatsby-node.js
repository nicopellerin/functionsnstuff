const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              tech
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error: Loading createPages query")
  }

  const tutorials = result.data.allMdx.edges

  tutorials.forEach(({ node }) => {
    createPage({
      path: `tutorials/${node.frontmatter.tech}/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/tutorials.tsx"),
      context: { id: node.id },
    })
  })
}
