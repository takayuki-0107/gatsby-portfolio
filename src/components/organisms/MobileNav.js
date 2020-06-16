import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { mq } from "../../styles/MediaQuery"
import Color from "../../styles/Color"

const MobileMenu = styled.nav`
  position: none;
  right: 0;
  top: 0;
  width: 300px;
  min-height: 100vh;
  background: gray;
  ${mq[1]} {
    display: none;
  }
  div {
    padding: 0px 40px;
    font-size: 38px;
  }
  ul {
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
    li {
      /* transform: translate3d(0, 0, -1000px); */
      padding: 0 40px;
      transition: transform 0.3s, opacity 0.2s;
      /* opacity: 0; */
      a {
        display: block;
        margin-top: 30px;
        color: ${Color.Black};
      }
    }
  }
`

const MobileMenuBtn = styled.button`
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;
  ${mq[1]} {
    display: none;
  }
  span {
    background-color: black;
    width: 35px;
    height: 2px;
    display: block;
    margin-bottom: 9px;
    transition: transform 0.7s;
    z-index: 999;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
const mobileMenu__cover = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s;
  cursor: pointer;
  z-index: 200;
`
const mainTitle = css`
  font-weight: 600;
  margin-bottom: 0;
  display: block;
`

export default () => (
  <>
    <div css={mobileMenu__cover}></div>
    <MobileMenu>
      <div>Menu</div>
      <ul>
        <li>
          <Link to="/about">
            <span css={mainTitle}>About</span>
          </Link>
        </li>
        <li>
          <Link to="/works">
            <span css={mainTitle}>Works</span>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <span css={mainTitle}>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span css={mainTitle}>Contact</span>
          </Link>
        </li>
      </ul>
    </MobileMenu>
    <MobileMenuBtn>
      <span></span>
      <span></span>
      <span></span>
    </MobileMenuBtn>
  </>
)
