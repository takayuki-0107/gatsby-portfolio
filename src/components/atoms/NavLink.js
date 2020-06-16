import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Color from "../../styles/Color"
import Size from "../../styles/Size"

const NavLink = styled(Link)`
  line-height: 85px;
  margin-left: ${Size(20)};
  font-size: ${Size(20)};
`
const blackBtn = css`
  background-color: ${Color.Black};
  color: ${Color.White};
  border: 1px solid ${Color.Black};
  padding: ${Size(12)} ${Size(32)};
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: ${Color.White};
    color: ${Color.Black};
  }
`

export const NavLinkDefault = ({ slug, name }) => {
  return (
    <>
      <li>
        <NavLink to={`/${slug}`}>{name}</NavLink>
      </li>
    </>
  )
}
export const NavLinkBtn = ({ slug, name }) => {
  return (
    <>
      <li>
        <NavLink to={`/${slug}`} css={blackBtn}>
          {name}
        </NavLink>
      </li>
    </>
  )
}
