import React from "react"

import TopHeading from "../components/organisms/TopHeading"
import Vision from "../components/About/Vision"
import Profile from "../components/About/Profile"
import Skill from "../components/About/Skill"

import GlobalStyle from "../styles/GlobalStyle"
import SEO from "../components/Seo"
import Layout from "../components/Layout"

export default () => {
  return (
    <>
      <GlobalStyle />
      <SEO title="About" />
      <Layout>
        <TopHeading
          title="About"
          info="Takayuki Tooyamaについて"
          slug="about"
        />
        <Vision />
        <Profile />
        <Skill />
      </Layout>
    </>
  )
}
