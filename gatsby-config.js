require("dotenv").config({
  path: `.env${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipies site",
    author: "Daniel Weber",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_API_KEY,
        spaceId: `m4yx096ojmx1`,
      },
    },
  ],
}
