import styled, { createGlobalStyle, css } from "styled-components";
import variables from "./variables";

export const GlobalStyles = createGlobalStyle`

${variables}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}



/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--ff-primary);
  font-size: var(--body-1);
  background: var(--primary-500);
  color: var(--secondary-500);
  
}

/* Typography */
h1,h2,h3,h4,h5{
  margin: 2rem 0;
}
h1{
  font-size: var(--heading-1);
}
h2{
  font-size: var(--heading-2);
}
h3{
  font-size: var(--heading-3);
}
h4{
  font-size: var(--heading-4);
}
h5{
  font-size: var(--heading-5);
}

p {
  font-size: var(--body-2);
  line-height: 200%;
}

.logo{
  font-size: var(--heading-4);
}


/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}


ul {
  list-style: none;
}


/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


`;

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 12px 32px;
  position: relative;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100% !important;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `}
`;
