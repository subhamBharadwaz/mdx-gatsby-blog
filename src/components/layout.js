import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Seo from "./seo";
import Nav from "./nav";
import { GlobalStyles, Flex, Container } from "../styles/globalStyles";

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <GlobalStyles />

      <Header>
        <Container>
          <Flex spaceBetween>
            <div className="logo">
              <Link to="/">Blog</Link>
            </div>
            <Nav />
          </Flex>
        </Container>
      </Header>
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
}

const Header = styled.header`
  a {
    text-decoration: none;
    color: #64ffda;
    padding: 5px;
  }

  a:hover,
  a:focus {
    outline: 2px dashed var(--tertiary-500);
    outline-offset: 3px;
  }
  a:focus {
    background-color: var(--tertiary-300);
  }
`;
