import React from "react"
import styled from "@emotion/styled"

import HomeTitle from "../molecules/HomeTitle"
import ProfileTitle from "../molecules/ProfileTitle"
import ProfileImg from "../atoms/ProfileImg"
import ProfileText from "../atoms/ProfileText"
import { ContentButton } from "../molecules/Button"
import SNSLink from "../molecules/SnsLink"

import Size from "../../styles/Size"

const Wrapper = styled.div`
  padding: ${Size(50)} 0;
  margin: ${Size(80)} ${Size(20)} 0;
  border: 2px solid #000;
  text-align: center;
  box-shadow: 10px 10px 0px #000;
  @media (min-width: 960px) {
    width: 70%;
    margin: ${Size(80)} auto 0;
  }
`

const ProfileWrapper = styled.div`
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  @media (min-width: 960px) {
    max-width: 600px;
    width: 85%;
  }
`
const ProfileHeader = styled.div`
  margin-bottom: ${Size(30)};
  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const ProfileContent = styled.div`
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
  }
`

export default () => {
  return (
    <>
      <Wrapper>
        <HomeTitle title="ABOUT" subTitle="プロフィール" />
        <ProfileWrapper>
          <ProfileHeader>
            <ProfileTitle />
            <SNSLink />
          </ProfileHeader>
          <ProfileContent>
            <ProfileImg />
            <div>
              <ProfileText />
              <ContentButton to={"/about"}>もっと詳しく</ContentButton>
            </div>
          </ProfileContent>
        </ProfileWrapper>
      </Wrapper>
    </>
  )
}
