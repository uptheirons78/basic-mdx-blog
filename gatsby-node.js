exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Create paginated pages for posts
  const postsPerPage = 3;
  const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create Single Blog Post

  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/singlePost.js"),
      context: { id },
    });
  });
};
