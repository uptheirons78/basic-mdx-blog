import React from "react";
import { Container, FeaturedImage, Content, ContentCard } from "../components";

const IndexPage = () => {
  return (
    <Container>
      <FeaturedImage />
      <Content>
        <ContentCard
          title="This is my first article"
          excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur quia inventore? Lorem ipsum dolor sit amet"
          slug="/test"
          date="Aug 22, 2020"
        />
      </Content>
    </Container>
  );
};

export default IndexPage;
