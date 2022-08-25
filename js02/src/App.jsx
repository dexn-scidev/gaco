import React from "react";
import { SvgIcon } from "@mui/material";
import Add from "./Add.svg";

const AddIcon = (props) => (
  <SvgIcon {...props}>
    <Add />
  </SvgIcon>
);

const App = () => (
  <h1>
    <AddIcon />
  </h1>
);

export default App;
