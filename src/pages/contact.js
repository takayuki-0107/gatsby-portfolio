import React from "react"
// import styled from "@emotion/styled"

import Contact from "../components/organisms/Contact"

import GlobalStyle from "../styles/GlobalStyle"
import SEO from "../components/Seo"
import Layout from "../components/Layout"
import TopHeading from "../components/organisms/TopHeading"

export default () => {
  return (
    <>
      <GlobalStyle />
      <SEO title="Contact" />
      <Layout>
        <TopHeading title="Contact" info="お問い合わせ" slug="contact" />
        <Contact />
      </Layout>
    </>
  )
}
