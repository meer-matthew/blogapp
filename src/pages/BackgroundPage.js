import { Grid } from "@mui/material";
import React from "react";
import { BackgroundContainer } from "../components/CommonComponents";

export default function BackgroundPage(props) {
  return <BackgroundContainer>{props.children}</BackgroundContainer>;
}
