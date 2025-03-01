module.exports = {
  siteMetadata: {
    title: `Stripe Store`,
    description: `Learning Gatsby & Stripe`,
    author: `Francis Pham`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-stripe`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product', 'Sku'],
        secretKey: `sk_test_EvgBDKvSJYs3zqxZSlhuTjWA`,
        downloadFiles: true,
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
