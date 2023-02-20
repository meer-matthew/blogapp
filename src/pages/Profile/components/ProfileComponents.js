import styled from "styled-components";

export const ProfileWrapper = styled.div`
  background-color: white;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 50px auto 0 10px;
  width: 75%;
  justify-content: center;
  align-items: center;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
`;

export const ProfileField = styled.div`
  display: inline-block;
  padding-top: 15px;
  padding-left: 30px;
  justify-content: flex-start;
  margin: 0 auto;
  align-items: center;
  padding-bottom: 20px;
`;
export const ProfileFieldItem = styled.div`
  padding: 2px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0 10px;
`;
export const TabHeader = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  align-items: center;
  padding: 10px 10px 0 10px;
`;
export const CardTabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 1px;
  background-color: #81b2d6;
  height: 1.5em;
  width: 3em;
  align-items: center;
  color: white;
  border-radius: 10%;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -1px);
  }
  &:active {
    background-color: grey;
  }
`;
export const CardHeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px 0 10px;
`;

export const EditButton = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: #81b2d6;
  color: white;
  height: 2em;
  width: 5em;
  border-radius: 10%;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
`;

export const SubProfileWrapper = styled.div`
  display: inline-block;
  justify-content: center;
  background-color: white;
  overflow: hidden;
  padding: 0 0 20px 70px;
  margin: 0 20px 20px 45px;
  width: 80%;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const ContentWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  width: 80%;
  padding: 10px 0 10px 0;
`;
export const TextWrapper = styled.div`
  padding-left: 20px;
  margin-right: 10px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: black;
`;
