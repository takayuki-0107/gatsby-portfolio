import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Color from "../../styles/Color"
import Size from "../../styles/Size"

const Wrapper = styled.div`
  width: 100%;
  margin-top: 85px;
  margin-bottom: ${Size(30)};
`
const Topheading = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`
const Background = styled.div`
  width: 100%;
  height: inherit;
  background-color: ${Color.Black};
  @media (min-width: 785px) {
    width: 70%;
    &::after {
      background: ${Color.Black};
      content: "";
      position: absolute;
      height: 250px;
      top: 0;
      bottom: 0;
      left: calc(70% - 60px);
      transform: skewX(20deg);
      width: 120px;
    }
  }
`
const Inner = styled.div`
  padding: 0 ${Size(30)};
  width: 100%;
  position: absolute;
  top: 60%;
  left: 0;
  transform: translateY(-50%);
  color: ${Color.White};
  h2 {
    font-size: ${Size(28)};
    margin-bottom: ${Size(15)};
  }
  p {
    &:last-of-type {
      margin-top: 3rem;
      color: #fff;
    }
  }
  span {
    margin: 0 ${Size(10)};
  }
`
export default ({ title, info, slug }) => {
  return (
    <>
      <Wrapper>
        <Topheading>
          <Background></Background>
          <Inner>
            <h2>{title}</h2>
            <p>{info}</p>
            <p>
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to={`/${slug}`}>{title}</Link>
            </p>
          </Inner>
        </Topheading>
      </Wrapper>
    </>
  )
}
