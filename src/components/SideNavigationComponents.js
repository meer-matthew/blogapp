import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  position: fixed;
  background-color: #2b4962;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: 100%;
  overflow: hidden;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  padding-bottom: 20px;
`;

export const BarContainer = styled.div`
  cursor: pointer;
  padding-top: 15px;
  padding-left: 30px;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  align-items: center;
  padding-bottom: 20px;
  text-decoration-shadow: -1px 2px 0 #000;
`;

export const Avatar = styled.img`
  padding-top: 15px;
  display: inline-block;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Text = styled.label`
  display: inline-block;

  font-weight: bold;
  ${({ hasShadow }) =>
    hasShadow ? "text-shadow: -1px 1px 0 #000; color: white;" : "color: white"}
`;

export const ModalText = styled.label`
  display: inline-block;
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export const SideBarLink = styled(NavLink)`
  display: inline-block;
  font-size: 15px;
  text-shadow: -1px 1px 0 #000;
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-family: inherit;
  padding-left: 10px;
  &:hover {
    text-shadow: -1px 2px 0 #000;
  }
`;

export const Divider = styled.div`
  border-bottom: 2px solid #355c7d;
  width: 100%;
`;
