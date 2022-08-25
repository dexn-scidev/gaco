import React from "react";
import { CssBaseline } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <html>
      <head>
        <title>sample</title>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
};

export default Layout;
