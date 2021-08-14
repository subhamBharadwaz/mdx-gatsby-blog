module.exports = {
  siteMetadata: {
    siteUrl: "https://mdx-gatsby-blog.vercel.app",
    title: "Subham Blog",
    description:
      "All about trending technologies react, gatsby, next.js and many more.",
    image:
      "https://res.cloudinary.com/dkitlfy13/image/upload/v1628779534/pexels-pixabay-261662_1_worel6.jpg",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve("./src/components/post-layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
