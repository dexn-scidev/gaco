import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";

const Section = styled.section`
  padding: 25px 0;
`;

const Top = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  padding: 15px 0;

  & > p {
    text-indent: 1em;
    margin: 0;
  }
`;

const Left = styled.div`
  border: 2px solid #000;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  padding: 10px;

  & > dl {
    height: 100%;
    margin: 0;
    font-size: 1.1rem;
    display: flex;
    flex-wrap: wrap;

    & > dt {
      width: 25%;
      text-align-last: justify;
    }

    & > dd {
      margin: 0;
      width: 75%;

      &:before {
        content: "：";
      }

      & > ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    }
  }
`;

const ActorCard = ({
  name,
  kana,
  charactor,
  imagePath,
  belonging,
  performances,
  desc,
}) => {
  return (
    <Section>
      <Top>
        <Left>
          <img src={imagePath} alt={charactor} />
        </Left>
        <Right>
          <dl>
            <dt>{charactor}役</dt>
            <dd>
              {name} （{kana}）
            </dd>
            <dt>所属</dt>
            <dd>{belonging}</dd>
            <dt>主な出演作品</dt>
            <dd>
              <ul>
                {performances.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </dd>
          </dl>
        </Right>
      </Top>
      <Bottom>
        <p>{desc}</p>
      </Bottom>
    </Section>
  );
};

const IndexPage = () => {
  const actor = {
    name: "藤田淑子",
    kana: "ふじたとしこ",
    charactor: "八神太一",
    imagePath: "https://www.toei-anim.co.jp/tv/dejimon/images/taichi.jpg",
    belonging: "青二プロダクション",
    performances: [
      "「地獄先生ぬ～べ～」（広）",
      "「キテレツ大百科」（キテレツ）",
    ],
    desc: "少年役ならもちろんこの方、アニメファンなら知らない人はいない大ベテランの藤田さんです。デジモンでも熱血漢で行動的な太一を見事に演じて下さっています。",
  };

  return (
    <Layout>
      <ActorCard {...actor} />
    </Layout>
  );
};

export default IndexPage;
