import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  FeaturedImage,
  Content,
  ContentCard,
  Pagination,
} from "../components";
import { H1, P } from "../elements";

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `${currentPage + 1}`;

  const posts = data.allMdx.edges;

  return (
    <Container>
      <FeaturedImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Lorem ipsum dolor sit amet.
        </H1>
        <P textAlign="center" color="dark2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          tempora temporibus eveniet est porro omnis earum soluta eos deserunt
          error quasi officia iure, accusamus ratione, saepe eum provident quas
          fugit.
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  );
};

export default allPosts;

export const pageQuery = graphql`
  query allPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`;
