import React from "react"
import styled from "@emotion/styled"

import HeaderTitle from "../atoms/HeaderTitle"
import Nav from "../molecules/Nav"
// import MobileNav from "./MobileNav"

import Size from "../../styles/Size"

const Header = styled.header`
  width: 100%;
  height: 85px;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: rgba(365, 365, 365, 0.9);
  div {
    width: inherit;
    display: flex;
    justify-content: space-between;
    padding: 0 ${Size(20)};
  }
`

export default ({ siteTitle }) => (
  <Header>
    <div>
      <HeaderTitle title={siteTitle} />
      <Nav />
      {/* <MobileNav /> */}
    </div>
  </Header>
)
