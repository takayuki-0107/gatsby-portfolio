import React from "react"
import styled from "@emotion/styled"

import { contentButton } from "../molecules/Button"

// import Color from "../styles/Color"
import Size from "../../styles/Size"
// import Typograph from "../../styles/Typograph"

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
`
const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: inherit;
  height: inherit;
  position: absolute;
`
const ModalContent = styled.div`
  background: #fff;
  padding: ${Size(20)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  p {
    width: 80%;
    max-width: 380px;
    margin: 0 auto;
    word-wrap: break-word;
    margin-bottom: ${Size(20)};
    font-size: ${Size(18)};
  }
`
const FormButton = styled.button`
  ${contentButton}
  outline: none;
  margin-top: 50px;
`

export default ({ setOpen, name, email, content }) => {
  const ModalClose = e => {
    return e.preventDefault(), setOpen(false)
  }
  return (
    <>
      <Modal>
        <Background onClick={ModalClose}></Background>
        <ModalContent>
          <p>お名前： {name}</p>
          <p>メールアドレス： {email}</p>
          <p>お問い合わせ内容： {content}</p>
          <FormButton type="submit">Send</FormButton>
        </ModalContent>
      </Modal>
    </>
  )
}
