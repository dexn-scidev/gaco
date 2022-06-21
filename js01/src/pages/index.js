import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <div>
          <div>
            <img
              src="https://www.toei-anim.co.jp/tv/dejimon/images/taichi.jpg"
              alt="八神太一"
            />
          </div>
          <div>
            <dl>
              <dt>八神太一役</dt>
              <dd>藤田淑子 （ふじたとしこ）</dd>
              <dt>所属</dt>
              <dd>青二プロダクション</dd>
              <dt>主な出演作品</dt>
              <dd>
                「地獄先生ぬ～べ～」（広）
                <br />
                「キテレツ大百科」（キテレツ）他
              </dd>
            </dl>
          </div>
        </div>
        <div>
          <p>
            少年役ならもちろんこの方、アニメファンなら知らない人はいない大ベテランの藤田さんです。デジモンでも熱血漢で行動的な太一を見事に演じて下さっています。
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
