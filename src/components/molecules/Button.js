import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Size from "../../styles/Size"

export const contentButton = css`
  width: 250px;
  text-align: center;
  margin: 0 auto;
  display: block;
  border: 1px solid #000;
  padding: ${Size(15)} 0;
  background-color: #000;
  color: #fff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  transition: all 0.2s;
  &:hover {
    font-weight: bold;
    transform: translate(3px, 3px);
    background-color: #fff;
    color: #000;
    box-shadow: none;
  }
`

export const ContentButton = props => {
  return (
    <>
      <Link css={contentButton} to={props.to}>
        {props.children}
      </Link>
    </>
  )
}
