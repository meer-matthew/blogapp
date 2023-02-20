import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/SideNavigationComponents";
import defaultLogo from "../../../images/default-icon-image.png";

export default function PostsSection(props) {
  const { posts } = props;

  return posts.length > 0 ? (
    posts.map((e) => {
      const name = e.user.name;
      const timestamp = new Date(e.timestamp).toLocaleString("en-US");
      return (
        <CardWrapper>
          <CardHeader>
            <CardHeader>
              <AvatarIcon src={defaultLogo} />
              <Text>{name}</Text>
            </CardHeader>
            <CardHeader>
              <Text>{timestamp}</Text>
            </CardHeader>
          </CardHeader>
          <PostContentWrapper>
            <Text>{e.content}</Text>
          </PostContentWrapper>
        </CardWrapper>
      );
    })
  ) : (
    <></>
  );
}

export const CardWrapper = styled.div`
  background-color: #384b61;
  overflow: hidden;
  padding: 0 10px 36px;
  margin: 50px 0 0;
  width: 80%;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0 10px;
`;

export const AvatarIcon = styled.img`
  display: inline-block;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const PostContentWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 10px;
  margin: 15px 15px 0 20px;
  width: 80%;
  font-family: Quicksand, arial, sans-serif;
`;
