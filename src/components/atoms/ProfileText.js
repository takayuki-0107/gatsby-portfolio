import React from "react"
import styled from "@emotion/styled"

import Size from "../../styles/Size"

const ProfileText = styled.p`
  margin: 0 auto ${Size(60)};
  width: 80%;
  max-width: 300px;
  text-align: left;
  @media (min-width: 785px) {
    margin: 0 auto ${Size(30)};
  }
`

export default () => {
  return (
    <>
      <ProfileText>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </ProfileText>
    </>
  )
}
