import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const MainVisual = styled.section`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #666;
  padding: 30px 0;

  & > img {
    max-width: 400px;
  }
`;

const NavSection = styled.section`
  padding: 30px 0;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;

  & > ul {
    width: 75%;
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
      width: calc(100% / 3);
      height: 34px;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      &:nth-child(2n + 1) {
        background-color: #ff9999;
      }

      &:nth-child(2n) {
        background-color: #9999ff;
      }

      & > a {
        font-weight: bold;
      }
    }
  }
`;

const Zero2Block = styled.div`
  padding: 20px;

  & p {
    margin: 0;
    text-align: center;
    font-size: 1.1rem;

    & a {
      font-weight: bold;
    }
  }
`;

const MusicBlock = styled.div`
  border: 1px solid #000;
  outline: 1px solid #666;
  outline-offset: 2px;
  background-color: #ffcccc;
  width: 75%;
  margin: 0 auto;

  & > p {
    margin: 0;
  }
`;

const Star = styled.span`
  color: #ffff33;
`;

const IndexPage = () => {
  return (
    <Layout>
      <MainVisual>
        <img
          src="https://www.toei-anim.co.jp/tv/dejimon/picture/degimon3.jpg"
          alt="top"
        />
      </MainVisual>
      <NavSection>
        <Navigation>
          <ul>
            <li>
              <Link to="#">各話あらすじ</Link>
            </li>
            <li>
              <Link to="#">スタッフ</Link>
            </li>
            <li>
              <Link to="/voice">出演声優紹介</Link>
            </li>
            <li>
              <Link to="#">ストーリー</Link>
            </li>
            <li>
              <Link to="#">キャラクター</Link>
            </li>
            <li>
              <Link to="#">デジモンランキング</Link>
            </li>
          </ul>
        </Navigation>
        <Zero2Block>
          <p>０２ホームページへはこちらから</p>
          <p>
            <a href="https://www.toei-anim.co.jp/tv/digimon02/">
              デジモンアドベンチャー０２
            </a>
          </p>
        </Zero2Block>
        <MusicBlock>
          <p>
            <Star>★</Star>
            さらにデジモンＭＵＳＩＣ　ＣＤのキャンペーンもスタート！
            <br />
            デジモンのＣＤ情報なら
            <br />
            http://musicnavi.cplaza.ne.jp/です
          </p>
        </MusicBlock>
      </NavSection>
    </Layout>
  );
};

export default IndexPage;
