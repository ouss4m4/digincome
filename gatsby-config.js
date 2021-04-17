module.exports = {
  siteMetadata: {
    title: `DigIncome`,
    author: {
      name: `DigIncome`,
      summary: `Financial Freedom should be your Goal. Passive income should be your Path. Digital Marketing is your guide`,
    },
    description: `be it eCommerce, Affiliate Marketing, or Day Trading. We Got you covered with Guides, Tips and Tricks to start earning as soon as possible. Pick your favorite niche and Start building your digital career now .`,
    siteUrl: `https://digincome.com`,
    social: {
      twitter: `digincome`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-EZ1VZCGP0T", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //  "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://digincome.us1.list-manage.com/subscribe/post?u=4d14180d272fd5384972be751&amp;id=31f371bc1c", // string; add your MC list endpoint here; see instructions below
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Digital Income`,
        short_name: `digincome`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-digincome-com`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://digincome.com`,
        stripQueryString: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
