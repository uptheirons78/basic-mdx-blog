import React from "react";
import { ContainerWrapper } from "../elements/index";
import { Nav } from "./Nav";

export const Container = ({ children }) => (
  <ContainerWrapper>
    <Nav />
    {children}
  </ContainerWrapper>
);
