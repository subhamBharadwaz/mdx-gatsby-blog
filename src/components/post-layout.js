import React from "react";
import Layout from "./layout";

export default function PostLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter;
  return (
    <Layout title={title} description={description}>
      {children}
    </Layout>
  );
}
