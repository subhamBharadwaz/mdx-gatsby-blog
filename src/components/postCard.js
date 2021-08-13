import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export default function PostCard({ title, description, slug }) {
  return (
    <Card>
      <Link to={slug}>
        <Link className="title" to={slug}>
          {title}
        </Link>
        <p>{description}</p>
      </Link>
    </Card>
  );
}

const Card = styled.div`
  cursor: pointer;
  margin: 3rem 0;
  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;
  }

  :hover,
  :focus {
    .title {
      color: #64ffda;
    }
  }

  p {
    margin: 1rem 0;
  }
`;
