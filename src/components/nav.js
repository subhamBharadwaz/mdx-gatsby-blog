import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Flex } from "../styles/globalStyles";

export default function Nav() {
  return (
    <NavStyle>
      <ul>
        <Flex className="mr-left">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </Flex>
      </ul>
    </NavStyle>
  );
}

const NavStyle = styled.nav`
  .mr-left > li + li {
    margin-left: 3rem;
  }
  a {
  }
`;
