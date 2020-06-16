import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import Color from "../../styles/Color"
import Size from "../../styles/Size"
import Typograph from "../../styles/Typograph"

const ProfileSection = styled.div`
  background-color: ${Color.ThinYellow};
`

const Wrapper = styled.div`
  padding: ${Size(50)} 0;
  margin: 0 auto;
  width: 90%;
  position: relative;
`
const SectionTitle = styled.div`
  ${Typograph.SectionTitle}
`
const SubTitle = styled.div`
  ${Typograph.subTitle}
`
const SnsLink = styled.div`
  position: absolute;
  top: ${Size(80)};
  right: ${Size(20)};
  @media (min-width: 960px) {
    right: 11%;
  }
  @media (min-width: 1100px) {
    right: 20%;
  }
  a {
    font-size: ${Size(30)};
    margin-left: ${Size(15)};
    display: inline-block;
  }
`
const Image = styled(Img)`
  margin: 0 auto;
  @media (min-width: 785px) {
    margin: 0;
  }
  width: 220px;
  height: 220px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
`
const ContentWrapper = styled.div`
  width: 80%;
  max-width: 700px;
  margin: ${Size(50)} auto 0;
  @media (min-width: 960px) {
    max-width: 600px;
    width: 85%;
  }
`
const ContentTitle = styled.div`
  margin-bottom: ${Size(30)};
  text-align: center;
`
const Content = styled.div`
  @media (min-width: 785px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  div {
    margin-bottom: 3rem;
    @media (min-width: 785px) {
      margin-bottom: 0;
    }
    p {
      margin: 0 auto ${Size(60)};
      width: 80%;
      max-width: 300px;
      text-align: left;
      @media (min-width: 785px) {
        margin: 0 auto ${Size(30)};
      }
    }
  }
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
      <ProfileSection>
        <Wrapper>
          <SectionTitle>
            <h2>Profile</h2>
          </SectionTitle>
          <SnsLink>
            <a href="https://github.com/takayuki-0107">
              <FontAwesomeIcon color="#333" icon={faGithubSquare} />
            </a>
            <a href="https://twitter.com/tooyama107">
              <FontAwesomeIcon color="#3eaded" icon={faTwitterSquare} />
            </a>
            <a href="https://qiita.com/takayuki_107">
              <FontAwesomeIcon
                color="white"
                style={{
                  overflow: "hidden",
                  height: "0.9em",
                  width: "0.9em",
                  backgroundColor: "#4cb10d",
                  borderRadius: "2px",
                  marginTop: "2px",
                }}
                icon={faSearch}
              />
            </a>
          </SnsLink>
          <ContentWrapper>
            <ContentTitle>
              <SubTitle>
                <h3>Takayuki Tooyama</h3>
                <span>学生エンジニア</span>
              </SubTitle>
            </ContentTitle>
            <Content>
              <Image fluid={data.file.childImageSharp.fluid} alt="first-view" />
              <div>
                <p>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
              </div>
            </Content>
          </ContentWrapper>
        </Wrapper>
      </ProfileSection>
    </>
  )
}
