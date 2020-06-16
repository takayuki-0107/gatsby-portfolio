import React from "react"
import styled from "@emotion/styled"

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  z-index: 1;
`
export default () => {
  return (
    <>
      <Cover></Cover>
    </>
  )
}
