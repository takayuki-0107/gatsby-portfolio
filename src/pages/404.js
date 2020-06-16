import React from "react"

import GlobalStyle from "../styles/GlobalStyle"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <>
      <GlobalStyle />
      <SEO title="404: Not found" />
      <Layout>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </>
  )
}
