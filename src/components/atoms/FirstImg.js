import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const FirstImg = styled(Img)`
  width: inherit;
  height: inherit;
`
export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <FirstImg fluid={data.file.childImageSharp.fluid} alt="first-view" />
    </>
  )
}
