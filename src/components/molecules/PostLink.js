import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Color from "../../styles/Color"
import Size from "../../styles/Size"

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
    </>
  )
}
