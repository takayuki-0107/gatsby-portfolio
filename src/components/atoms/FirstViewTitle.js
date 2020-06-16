import React from "react"
import styled from "@emotion/styled"

import Color from "../../styles/Color"
import Size from "../../styles/Size"
// import Typograph from "../../styles/Typograph"

const FirstViewTitle = styled.h2`
  font-size: ${Size(30)};
  width: 400px;
  padding-left: 2rem;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: ${Color.White};
  @media (min-width: 480px) {
    font-size: ${Size(38)};
  }
  span {
    font-size: ${Size(20)};
    display: block;
  }
`
export default () => {
  return (
    <>
      <FirstViewTitle>
        Takayuki Tooyama
        <span>Front Engineer</span>
      </FirstViewTitle>
    </>
  )
}
