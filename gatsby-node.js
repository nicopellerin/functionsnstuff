const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // const tutorialsData = await graphql(`
  //   query {
  //     allMdx(filter: { frontmatter: { type: { eq: "tutorials" } } }) {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             slug
  //             tech
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (tutorialsData.errors) {
  //   reporter.panicOnBuild("Error: Loading createPages query")
  // }

  // const tutorials = tutorialsData.data.allMdx.edges

  // tutorials.forEach(({ node }) => {
  //   createPage({
  //     path: `tutorials/${node.frontmatter.tech}/${node.frontmatter.slug}`,
  //     component: path.resolve("./src/templates/tutorials.tsx"),
  //     context: { id: node.id },
  //   })
  // })

  const tipsData = await graphql(`
    query {
      allMdx(filter: { frontmatter: { type: { eq: "tips" } } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              tech
              title
            }
          }
        }
      }
    }
  `)

  if (tipsData.errors) {
    reporter.panicOnBuild("Error: Loading createPages query")
  }

  const tips = tipsData.data.allMdx.edges

  tips.forEach(({ node }, index) => {
    const prevTip = index === 0 ? null : tips[index - 1].node
    const nextTip = index === tips.length - 1 ? null : tips[index + 1].node

    createPage({
      path: `tips/${node.frontmatter.tech}/${node.frontmatter.slug}`,
      component: path.resolve("./src/templates/tips.tsx"),
      context: { id: node.id, prevTip, nextTip },
    })
  })
}
