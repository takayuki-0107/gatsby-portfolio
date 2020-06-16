import React from "react"
import styled from "@emotion/styled"

import HomeTitle from "../molecules/HomeTitle"
import { ContentButton } from "../molecules/Button"
import PostLink from "../molecules/PostLink"

import Size from "../../styles/Size"

const Wrapper = styled.div`
  margin: ${Size(80)} 0 0;
`
const Container = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 960px) {
    width: 80%;
    max-width: 750px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export default () => {
  return (
    <>
      <Wrapper>
        <HomeTitle title="Works" subTitle="作品一覧" />
        <Container>
          <PostLink />
          <PostLink />
        </Container>
        <ContentButton to={"/works"}>もっと詳しく</ContentButton>
      </Wrapper>
    </>
  )
}
