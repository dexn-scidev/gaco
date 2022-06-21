import React from "react";
import styled from "styled-components";
import "modern-css-reset";

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 50px;
  background: linear-gradient(to bottom, #003b9d, #003b9d 56%, #3782ff 56%);
  display: flex;
  justify-content: center;

  & > img {
    height: 100%;
  }
`;

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  width: 642px;
  border-bottom: 1px solid #666;
`;

const Footer = styled.footer`
  height: 20px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const IndexPage = () => {
  return (
    <Page>
      <Header>
        <img
          src="https://www.toei-anim.co.jp/tv/dejimon/picture/titlelogo.gif"
          alt="logo"
        />
      </Header>
      <Main>hoge</Main>
      <Footer>&copy;本郷あきよし・東映アニメーション</Footer>
    </Page>
  );
};

export default IndexPage;
