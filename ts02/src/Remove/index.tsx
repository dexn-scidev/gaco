import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Remove from "./Remove.svg";

const Component: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 132 84">
    <Remove />
  </SvgIcon>
);

export default Component;
