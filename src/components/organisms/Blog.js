import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import styled from "@emotion/styled"

import Color from "../../styles/Color"
import Size from "../../styles/Size"
import { ContentButton } from "../molecules/Button"
import HomeTitle from "../molecules/HomeTitle"

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
const Content = styled.div`
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.7);
  width: 90%;
  max-width: 480px;
  margin: 0 auto ${Size(50)};
  color: ${Color.White};
  @media (min-width: 960px) {
    width: 100%;
    /* max-width: 480px; */
  }
`
const ContentHeader = styled.div`
  background-color: ${Color.DarkBlue};
  padding: ${Size(15)} ${Size(25)};
  @media (min-width: 960px) {
    width: 350px;
  }
  h3 {
    font-size: ${Size(20)};
    font-weight: 700;
  }
  p {
    font-size: ${Size(14)};
  }
  div {
    @media (min-width: 785px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`
const ContentImg = styled.div`
  height: 250px;
  @media (min-width: 480px) {
    height: 300px;
  }
`

export default () => {
  return (
    <>
      <Wrapper>
        <HomeTitle title="Blog" subTitle="最近の更新" />
        <Container>
          <Link to="/works/work1">
            <Content>
              <ContentHeader>
                <div>
                  <h3>タイトル</h3>
                  <p>React/Firebace/TypeScript</p>
                </div>
                {/* <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキ
              </p> */}
              </ContentHeader>
              <ContentImg>comming soon...</ContentImg>
              {/* <Img /> */}
            </Content>
          </Link>
          <Link to="/works/work1">
            <Content>
              <ContentHeader>
                <div>
                  <h3>タイトル</h3>
                  <p>React/Firebace/TypeScript</p>
                </div>
                {/* <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキ
              </p> */}
              </ContentHeader>
              <ContentImg>comming soon...</ContentImg>
              {/* <Img /> */}
            </Content>
          </Link>
        </Container>
        <ContentButton to={"/works"}>もっと詳しく</ContentButton>
      </Wrapper>
    </>
  )
}
