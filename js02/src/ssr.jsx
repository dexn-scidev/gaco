import React from "react";
import { renderToString } from "react-dom/server";
import Layout from "./layout";
import App from "./App";

const ssr = () =>
  renderToString(
    <Layout>
      <App />
    </Layout>
  );

export default ssr;
