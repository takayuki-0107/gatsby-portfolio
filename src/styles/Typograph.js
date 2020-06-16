import { css } from "@emotion/core"
import Size from "./Size"

const SectionTitle = css`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  h2 {
    font-size: ${Size(20)};
    &:after {
      content: "";
      display: block;
      height: ${Size(1)};
      background-color: black;
    }
  }
`

const Headline1 = css`
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 4.4rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 3.8rem;
  }
`

const Headline2 = css`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`

const Headline3 = css`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.8rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`

const Body1 = css`
  font-size: 1.6rem;
  line-height: 2.8rem;
`

const Body2 = css`
  font-size: 1.4rem;
  line-height: 2rem;
`

const Body3 = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
`

export default {
  SectionTitle: SectionTitle,
  Headline1: Headline1,
  Headline2: Headline2,
  Headline3: Headline3,
  Body1: Body1,
  Body2: Body2,
  Body3: Body3,
}
