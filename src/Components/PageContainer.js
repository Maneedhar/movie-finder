import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../ThemeContext";

const Container = styled.div`
  background: ${(props) => (props.dark ? "#323232" : "#d3d3d3")};
  min-height: 100vh;
`;

const PageContainer = (props) => {
  const { theme } = useContext(ThemeContext);
  return <Container dark={theme}>{props.children}</Container>;
};

export default PageContainer;
