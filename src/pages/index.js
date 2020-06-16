import React from "react"

import GlobalStyle from "../styles/GlobalStyle"
import SEO from "../components/Seo"
import Layout from "../components/Layout"

import FirstView from "../components/organisms/FirstView"
import About from "../components/organisms/About"
import Works from "../components/organisms/Works"
import Blog from "../components/organisms/Blog"
import Contact from "../components/organisms/Contact"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO title="Home" />
    <Layout>
      <FirstView />
      <About />
      <Works />
      <Blog />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
