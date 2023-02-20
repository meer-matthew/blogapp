import {
  Home,
  HomeSharp,
  LogoutSharp,
  NotificationsActive,
  Person2Sharp,
} from "@mui/icons-material";
import React from "react";
import defaultLogo from "../../../images/default-icon-image.png";
import {
  Avatar,
  BarContainer,
  Divider,
  ItemContainer,
  NavigationContainer,
  SideBarLink,
  Text,
} from "../../../components/SideNavigationComponents";
import jsCookies from "js-cookies";
import AddPost from "./AddPost";

export default function SideNavigation(props) {
  const { user, setPage } = props;
  return (
    <NavigationContainer>
      <SideBarAvatar user={user} />
      <Divider />
      <SideBarMenuItems user={user} setPage={setPage} />
    </NavigationContainer>
  );
}

function SideBarAvatar(props) {
  const { user } = props;

  const { name, emailAddress } = user;

  return (
    <div>
      <ItemContainer>
        <Avatar src={defaultLogo} />
      </ItemContainer>
      <ItemContainer>
        <Text>{name}</Text>
      </ItemContainer>
      <ItemContainer>
        <Text style={{ fontSize: "12px" }}>{emailAddress}</Text>
      </ItemContainer>
    </div>
  );
}

function renderSegments(icon) {
  switch (icon) {
    case "home":
      return (
        <>
          <HomeSharp style={{ color: "white" }} />;
          <SideBarLink to="/home" exact>
            Home
          </SideBarLink>
        </>
      );
    case "profile":
      return (
        <>
          <Person2Sharp style={{ color: "white" }} />
          <SideBarLink to="/profile" exact>
            Profile
          </SideBarLink>
        </>
      );
    case "notification":
      return (
        <>
          <NotificationsActive style={{ color: "white" }} />
          <SideBarLink to="/notifications" exact>
            Notifications
          </SideBarLink>
        </>
      );
    case "logout":
      return (
        <>
          <LogoutSharp style={{ color: "white" }} />
          <SideBarLink to="/" exact>
            Logout
          </SideBarLink>
        </>
      );
  }
}

function SideBarMenuItems(props) {
  const { user, setPage } = props;
  return (
    <div>
      <BarContainer onClick={() => setPage(0)}>
        {renderSegments("home")}
      </BarContainer>
      <BarContainer onClick={() => setPage(1)}>
        {renderSegments("notification")}
      </BarContainer>
      <BarContainer onClick={() => setPage(2)}>
        {renderSegments("profile")}
      </BarContainer>
      <BarContainer>
        <AddPost user={user} />
      </BarContainer>
      <BarContainer onSubmit={logout}>{renderSegments("logout")}</BarContainer>
    </div>
  );
}

function logout() {
  jsCookies.removeItem("token");
}
