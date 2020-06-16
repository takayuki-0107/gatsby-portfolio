import React, { useState } from "react"
import styled from "@emotion/styled"

import HomeTitle from "../molecules/HomeTitle"
import FormModal from "./FormModal"
import { contentButton } from "../molecules/Button"

import Color from "../../styles/Color"
import Size from "../../styles/Size"

const Wrapper = styled.div`
  margin: ${Size(80)} 0 0;
  padding: ${Size(50)} 0;
  /* background-color: ${Color.ThinYellow}; */
  width: 100%;
`

const Form = styled.form`
  width: 80%;
  max-width: 650px;
  margin: 0 auto;
  span {
    text-align: center;
    display: inline-block;
    font-size: ${Size(12)};
    color: ${Color.White};
    background-color: ${Color.FormRequired};
    width: ${Size(35)};
    height: 20px;
    line-height: 20px;
    border-radius: 20px;
    margin-left: ${Size(10)};
    margin-bottom: ${Size(5)};
  }
  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #000;
    border-radius: 5px;
    padding: ${Size(10)} ${Size(10)};
    margin-bottom: ${Size(30)};
  }
`
const FormButton = styled.button`
  ${contentButton}
  outline: none;
`

export default () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")

  const ModalOpen = e => {
    return e.preventDefault(), setOpen(true)
  }

  return (
    <>
      <Wrapper>
        <HomeTitle title="Contact" subTitle="お問い合わせ" />
        <Form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            お名前
            <span>必須</span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="山田 太郎"
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            メールアドレス
            <span>必須</span>
            <input
              type="email"
              name="_replyto"
              id="email"
              placeholder="yourmail@example.com"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            お問い合わせ内容
            <span>必須</span>
            <textarea
              name="message"
              id="message"
              rows="5"
              onChange={e => setContent(e.target.value)}
            />
          </label>
          <FormButton onClick={ModalOpen}>内容の確認</FormButton>
          {open ? (
            <FormModal
              setOpen={setOpen}
              name={name}
              email={email}
              content={content}
            />
          ) : null}
        </Form>
      </Wrapper>
    </>
  )
}
