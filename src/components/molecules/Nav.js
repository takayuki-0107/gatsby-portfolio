import React from "react"
import styled from "@emotion/styled"

import { NavLinkDefault, NavLinkBtn } from "../atoms/NavLink"

import { mq } from "../../styles/MediaQuery"

const Nav = styled.nav`
  display: none;
  ${mq[1]} {
    display: block;
  }
  ul {
    display: flex;
  }
`

export default () => {
  return (
    <Nav>
      <ul>
        <NavLinkDefault slug="about" name="About" />
        <NavLinkDefault slug="works" name="Works" />
        <NavLinkDefault slug="blog" name="Blog" />
        <NavLinkBtn slug="contact" name="Contact" />
      </ul>
    </Nav>
  )
}
