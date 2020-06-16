import React from "react"
import styled from "@emotion/styled"

import Size from "../../styles/Size"

const ProfileTitle = styled.div`
  h3 {
    font-size: ${Size(28)};
  }
  span {
    position: relative;
    display: inline-block;
    padding: 0 ${Size(30)};
    font-size: ${Size(14)};
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      display: inline-block;
      width: ${Size(15)};
      height: ${Size(1)};
      background-color: black;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
`

export default () => {
  return (
    <>
      <ProfileTitle>
        <h3>Takayuki Tooyama</h3>
        <span>学生エンジニア</span>
      </ProfileTitle>
    </>
  )
}
