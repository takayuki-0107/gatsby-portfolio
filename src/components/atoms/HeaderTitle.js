import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Size from "../../styles/Size"

const HeaderTitle = styled.h1`
  line-height: 85px;
  a {
    font-size: ${Size(25)};
  }
`
export default ({ title }) => {
  return (
    <>
      <HeaderTitle>
        <Link to="/">{title}</Link>
      </HeaderTitle>
    </>
  )
}
