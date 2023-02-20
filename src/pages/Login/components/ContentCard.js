import React from "react";
import {
  CardBody,
  CardButton,
  CardFieldset,
  CardHeader,
  CardHeading,
  CardInput,
  CardLink,
  CardWrapper,
  Logo,
} from "../../../components/CommonComponents";

import image from "../../../images/logo_blog.png";

export default function ContentCard(props) {
  const { title } = props;

  return (
    <CardWrapper>
      <CardHeader>
        <Logo src={image} />
      </CardHeader>
      <CardHeading>{title}</CardHeading>
      {props.children}
    </CardWrapper>
  );
}

export function renderResetPW() {}
