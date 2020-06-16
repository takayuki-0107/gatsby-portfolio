import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import WorksPost from "../components/molecules/WorksPost"

import GlobalStyle from "../styles/GlobalStyle"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import TopHeading from "../components/organisms/TopHeading"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `)
  const edges = data.allMarkdownRemark.edges
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <WorksPost key={edge.node.id} post={edge.node} />)
  return (
    <>
      <GlobalStyle />
      <SEO title="Works" />
      <Layout>
        <TopHeading title="Works" info="開発物一覧" slug="works" />
        {Posts}
      </Layout>
    </>
  )
}
