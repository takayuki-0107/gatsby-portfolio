import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import Size from "../../styles/Size"

const SnsLink = styled.div`
  margin-right: 5rem;
  a {
    display: none;
    @media (min-width: 960px) {
      font-size: ${Size(30)};
      margin-left: ${Size(15)};
      display: inline-block;
    }
  }
`

export default () => {
  return (
    <>
      <SnsLink>
        <a href="https://github.com/takayuki-0107">
          <FontAwesomeIcon color="#333" icon={faGithubSquare} />
        </a>
        <a href="https://twitter.com/tooyama107">
          <FontAwesomeIcon color="#3eaded" icon={faTwitterSquare} />
        </a>
        <a href="https://qiita.com/takayuki_107">
          <FontAwesomeIcon
            color="white"
            style={{
              overflow: "hidden",
              height: "0.9em",
              width: "0.9em",
              backgroundColor: "#4cb10d",
              borderRadius: "2px",
              marginTop: "2px",
            }}
            icon={faSearch}
          />
        </a>
      </SnsLink>
    </>
  )
}
