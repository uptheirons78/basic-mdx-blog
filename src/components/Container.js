import React from "react";
import { ContainerWrapper } from "../elements/index";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Container = ({ children }) => (
  <ContainerWrapper>
    <Nav />
    {children}
    <Footer />
  </ContainerWrapper>
);
