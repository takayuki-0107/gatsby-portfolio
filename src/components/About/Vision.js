import React from "react"
import styled from "@emotion/styled"

// import Color from "../../styles/Color"
import Size from "../../styles/Size"
import Typograph from "../../styles/Typograph"

const Wrapper = styled.div`
  padding: ${Size(50)} 0;
  margin: 0 auto;
  width: 90%;
`
const SectionTitle = styled.div`
  ${Typograph.SectionTitle}
`

export default () => {
  return (
    <>
      <section>
        <Wrapper>
          <SectionTitle>
            <h2>Vision</h2>
          </SectionTitle>
        </Wrapper>
      </section>
    </>
  )
}
