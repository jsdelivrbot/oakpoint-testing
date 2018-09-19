module.exports = {
  siteMetadata: {
    title: 'Oakpoint Digital',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Oakpoint Digital',
        short_name: 'Oakpoint',
        start_url: '/',
        background_color: '#39b73f',
        theme_color: '#39b73f',
        display: 'minimal-ui',
        icon: 'src/images/favicon-oakpoint-min.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
