import React from "react";
import { CardWrapper, P, H2 } from "../elements";
import { Button } from "./index";

export const ContentCard = ({ date, title, excerpt, slug }) => {
  return (
    <CardWrapper>
      <P size="xSmall" textAlign="center" margin="0 0 0.5rem 0" color="dark2">
        {date}
      </P>
      <H2 margin="0 0 1rem 0" textAlign="center">
        {title}
      </H2>
      <P size="small" textAlign="center" margin="0 0 1.25rem 0" color="dark2">
        {excerpt}
      </P>
      <Button href={`/${slug}`}>Read More</Button>
    </CardWrapper>
  );
};
