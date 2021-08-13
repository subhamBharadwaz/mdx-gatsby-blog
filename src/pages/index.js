import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Card from "../components/postCard";
export const query = graphql`
  query GetPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          date(fromNow: true)
          description
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
`;

export default function IndexPage({ data }) {
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <h5>RECENTLY PUBLISHED</h5>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Card
              title={post.frontmatter.title}
              description={post.frontmatter.description}
              slug={post.slug}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
