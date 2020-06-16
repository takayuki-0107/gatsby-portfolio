import React from "react"
// import Img from "gatsby-image"
import styled from "@emotion/styled"

import { ContentButton } from "../molecules/Button"

import Color from "../../styles/Color"
import Size from "../../styles/Size"
import Typograph from "../../styles/Typograph"

const Wrapper = styled.div`
  padding: ${Size(50)} 0;
  margin: 0 auto;
  width: 90%;
  position: relative;
`
const SectionTitle = styled.div`
  ${Typograph.SectionTitle}
  margin-bottom: ${Size(30)};
`
const Development = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  @media (min-width: 785px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  div {
    margin: 0 auto ${Size(30)};
    text-align: center;
    padding: ${Size(20)} ${Size(20)};
    width: 80%;
    max-width: 350px;
    height: 350px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
    @media (min-width: 785px) {
      width: 45%;
    }
  }
  h3 {
    font-size: ${Size(20)};
    line-height: 1;
  }
  span {
    font-size: ${Size(14)};
  }
  p {
    text-align: left;
  }
`
const Skill = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: inherit;
  max-width: 800px;
  height: auto;
  text-align: center;
  margin: 0 auto ${Size(50)};
`
const SkillWrapper = styled.div`
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  margin-bottom: ${Size(30)};
  @media (min-width: 960px) {
    display: flex;
    justify-content: center;
    margin: 1px;
    box-shadow: none;
    height: 80px;
  }
`
const SkillTitle = styled.div`
  padding: ${Size(20)};
  background-color: ${Color.LightBlue};
  @media (min-width: 960px) {
    width: 35%;
    max-width: 300px;
    height: 80px;
  }
`
const SkillName = styled.div`
  padding: ${Size(20)};
  color: ${Color.Black};
  background-color: ${Color.ThinBlue};
  @media (min-width: 960px) {
    width: 66%;
    height: 80px;
  }
`

export default () => {
  return (
    <>
      <section>
        <Wrapper>
          <SectionTitle>
            <h2>Skill</h2>
            <p>提供出来る技術と開発物一覧</p>
          </SectionTitle>
          <Development>
            <div>
              <h3>WEBサイト制作</h3>
              <span>WEBSITE PRODUCTION</span>
              {/* <Img /> */}
              <p>
                企業サイト、個人ポートフォリオ
                、LPなどWebサイト制作全般を承ります。デザイン性はもちろん、検索エンジンからの流入を強化する「SEOに強いサイト」の制作が得意です。
              </p>
            </div>
            <div>
              <h3>WEBアプリ開発</h3>
              <span>WEB APP DEV</span>
              {/* <Img /> */}
              <p>
                リアルタイム性が重視されるSNSアプリやチャットアプリなどを開発できます。
                これまで開発してきたWebアプリの一部を制作事例として公開しています。
              </p>
            </div>
          </Development>
          <Skill>
            <SkillWrapper>
              <SkillTitle>
                <p>マークアップ</p>
              </SkillTitle>
              <SkillName>
                <p>{`HTML5, CSS3, Bootstrap4, Sass(scss)`}</p>
              </SkillName>
            </SkillWrapper>
            <SkillWrapper>
              <SkillTitle>
                <p>フロントエンド</p>
              </SkillTitle>
              <SkillName>
                <p>
                  {`JavaScript(ES6), React, Redux, TypeScript,`}
                  <br />
                  Next.js, Gatsby, Webpack, Babel
                </p>
              </SkillName>
            </SkillWrapper>
            <SkillWrapper>
              <SkillTitle>
                <p>バックエンド</p>
              </SkillTitle>
              <SkillName>
                <p>Node.js, Firebace</p>
              </SkillName>
            </SkillWrapper>
            <SkillWrapper>
              <SkillTitle>
                <p>その他ツール</p>
              </SkillTitle>
              <SkillName>
                <p>git, npm, yarn, XDなど</p>
              </SkillName>
            </SkillWrapper>
          </Skill>
          <ContentButton to={"/works"}>Contact</ContentButton>
        </Wrapper>
      </section>
    </>
  )
}
