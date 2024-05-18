import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { Icon } from '@iconify/react';

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { blog, html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={'https://github.com/Rubens1414/Proyecto_optimizacion'}
        aria-label="Check out our repositorie."
        className="link-icons"
      >
        <Icon icon="icomoon-free:github" />
      </a>
      {blog && (
        <a href={'https://github.com/Rubens1414/Proyecto_optimizacion'} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
      <a
        href={'https://colab.research.google.com/drive/1n24NH8fSOG1IQJeSn8IKzD01ADre7FC4?usp=sharing'}
        aria-label="Check out our repositorie."
        className="link-icons"
      >
        <Icon icon="simple-icons:googlecolab"/>
      </a>
      {blog && (
        <a href={'https://colab.research.google.com/drive/1n24NH8fSOG1IQJeSn8IKzD01ADre7FC4?usp=sharing'} aria-label="Google Colab" className="link-icons">
          {Blog}
        </a>
      )}
    </StyledSocialLinks>
  );
}
