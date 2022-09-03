import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Add from "./Add.svg";

const Component: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 132 84">
    <Add />
  </SvgIcon>
);

export default Component;
