import React from "react"
import styled from "@emotion/styled"

import Size from "../../styles/Size"

const HomeTitle = styled.div`
  margin-bottom: ${Size(50)};
  text-align: center;
  line-height: 3rem;
  h2 {
    font-size: ${Size(30)};
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
export default ({ title, subTitle }) => {
  return (
    <>
      <HomeTitle>
        <h2>{title}</h2>
        <span>{subTitle}</span>
      </HomeTitle>
    </>
  )
}
