import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
// import { css } from "@emotion/core"

import Size from "../../styles/Size"

const Wrapper = styled.footer`
  text-align: center;
  padding: ${Size(50)} 0;
  h3 {
    font-size: ${Size(30)};
    margin-bottom: ${Size(15)};
  }
`
const Nav = styled.nav`
  width: 400px;
  margin: ${Size(30)} auto;
  ul {
    @media (min-width: 960px) {
      display: flex;
      justify-content: space-around;
    }
  }
  li {
    padding: ${Size(5)} 0;
  }
  a {
    font-size: ${Size(20)};
    &:hover {
      opacity: 0.5;
    }
  }
`

export default () => {
  return (
    <Wrapper>
      <h3>
        <Link to="/">Portfolio</Link>
      </h3>
      <Nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
      <p>© {new Date().getFullYear()}, takayuki tooyama</p>
    </Wrapper>
  )
}
