import React from "react";

export type Props = {
  children: React.ReactNode;
};

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <html>
      <head>
        <title>sample</title>
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
