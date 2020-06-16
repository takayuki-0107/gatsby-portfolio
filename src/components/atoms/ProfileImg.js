import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const ProfileImg = styled(Img)`
  margin: 0 auto;
  @media (min-width: 785px) {
    margin: 0;
  }
  width: 220px;
  height: 220px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
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
      <ProfileImg fluid={data.file.childImageSharp.fluid} alt="profile-image" />
    </>
  )
}
