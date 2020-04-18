module.exports = {
  siteMetadata: {
    title: `helloworldnstuff`,
    description: `Learn by building. Tutorials & tips for React, Go, NodeJS, Javascript, Gatsby and more!`,
    author: `@nicopellerin_io`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        names: "tutorials",
        path: `${__dirname}/src/tutorials`,
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
        background_color: `#FFE5FB`,
        theme_color: `#FFE5FB`,
        display: `minimal-ui`,
        icon: `../images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/tutorials.tsx"),
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
