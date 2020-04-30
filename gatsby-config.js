require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `functionsnstuff`,
    description: `Tutorials & tips for React, Go, NodeJS, Javascript, Gatsby and more!`,
    author: `@nicopellerin_io`,
    image: "/og-image.png",
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
        name: "tutorials",
        path: `${__dirname}/src/tutorials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "tips",
        path: `${__dirname}/src/tips`,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165259414-1",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFE5FB`,
        theme_color: `#FFE5FB`,
        display: `minimal-ui`,
        icon: `./src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          tutorials: require.resolve("./src/templates/tutorials.tsx"),
          tips: require.resolve("./src/templates/tips.tsx"),
        },
      },
    },

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cache`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
