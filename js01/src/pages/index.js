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
`;

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  width: 642px;
`;

const Footer = styled.footer`
  height: 20px;
`;

const IndexPage = () => {
  return (
    <Page>
      <Header>hoge</Header>
      <Main>hoge</Main>
      <Footer>hoge</Footer>
    </Page>
  );
};

export default IndexPage;
