module.exports = {
  siteMetadata: {
    title: `MOONOW`,
    name: `MOONOW`,
    siteUrl: `https://jovial-allen-097f49.netlify.app`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `안녕하세요, 돈 되는 일이면 뭐든 하는 블로그입니다. 말만 하세용.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118232427-3",
      },
    },
  ],
};
