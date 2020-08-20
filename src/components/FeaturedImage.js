import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FeaturedImageWrapper } from "../elements";

export const FeaturedImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: { originalName: { eq: "office.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `);
  return (
    <FeaturedImageWrapper>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fluid}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </FeaturedImageWrapper>
  );
};
