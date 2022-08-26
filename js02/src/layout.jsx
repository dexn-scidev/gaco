import React from "react";

const Layout = ({ children }) => {
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
