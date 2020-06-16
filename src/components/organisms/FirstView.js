import React from "react"
import styled from "@emotion/styled"

import Cover from "../atoms/Cover"
import FirstImg from "../atoms/FirstImg"
import FirstViewTitle from "../atoms/FirstViewTitle"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`

export default () => {
  return (
    <>
      <Wrapper>
        <Cover />
        <FirstImg />
        <FirstViewTitle />
      </Wrapper>
    </>
  )
}
