import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "../elements";

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "Social/facebook.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "Social/instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "Social/twitter.svg" }) {
        publicURL
      }
      pinterest: file(relativePath: { eq: "Social/pinterest.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook Logo" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="Instagram Logo" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="Twitter Logo" />
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.pinterest.publicURL} alt="Pinterest Logo" />
          </a>
        </FooterSocialIcons>
        <p>&copy; 2020 Company. All Rights Reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  );
};
