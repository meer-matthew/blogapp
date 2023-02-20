import React, { useEffect, useRef, useState } from "react";
import defaultLogo from "../../images/default-icon-image.png";
import {
  Avatar,
  ModalText,
  Text,
} from "../../components/SideNavigationComponents";
import { useDispatch, useSelector } from "react-redux";
import {
  CardHeader,
  CardHeaderItem,
  CardTabs,
  ContentWrapper,
  EditButton,
  LeftContentWrapper,
  ProfileField,
  ProfileFieldItem,
  ProfileWrapper,
  RightContentWrapper,
  SubProfileWrapper,
  TabHeader,
  TextWrapper,
} from "./components/ProfileComponents";
import PostsSection from "../Homepage/components/PostsSection";
import axios from "axios";
import { ActionCreator } from "../../redux/creator/ActionCreator";
import { baseUrl } from "../../util/UrlHelper";
import jsCookies from "js-cookies";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  LinearProgress,
} from "@mui/material";
import {
  CardButton,
  CardFieldset,
  CardInput,
  SecondaryCardButton,
} from "../../components/CommonComponents";

export default function ProfilePage(props) {
  const data = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [page, setPage] = useState("activity");
  const [editProfile, setEditProfile] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const token = jsCookies.getItem("token");
  const headers = { Authorization: "Bearer " + token };
  const inputFile = useRef(null);
  const [updatedUserData, setUpdatedUserData] = useState({
    name: data.user.name,
    emailAddress: data.user.emailAddress,
    contactNo: data.user.contactNo,
    address: data.user.address,
    gender: data.user.gender,
    birthDate: data.user.birthDate,
    profilePhoto: data.user.profilePhoto,
  });

  useEffect(() => {
    axios
      .get(`${baseUrl}/posts/user/${data.user.userId}`, { headers: headers })
      .then((res) => {
        const postData = res.data;
        setUserPosts(postData);
        dispatch(ActionCreator.showPosts());
        console.log(postData);
      });
  }, []);

  const updateUser = (e) => {
    setLoading(true);
    e.preventDefault();
    const transformData = Object.keys(updatedUserData).map((key) => ({
      key,
      value: updatedUserData[key],
    }));
    axios
      .patch(`${baseUrl}/user/${data.user.userId}`, transformData, {
        headers: headers,
      })
      .then(() => {
        dispatch(ActionCreator.updateUser(updatedUserData));
        console.log(updatedUserData);
      })
      .catch(() => {});
    setLoading(false);
    handleClose();
  };

  const updateUserData = () => {};

  const handleClickOpen = () => {
    setEditProfile(true);
  };

  const handleClose = () => {
    setEditProfile(false);
  };
  return (
    <ProfileWrapper>
      <CardHeader>
        <CardHeaderItem>
          <Avatar src={defaultLogo} />
          <ProfileField>
            <ProfileFieldItem>
              <label>{data.user.name}</label>
            </ProfileFieldItem>
            <ProfileFieldItem>
              <label style={{ fontSize: "12px", color: "grey" }}>
                {data.user.emailAddress}
              </label>
            </ProfileFieldItem>
          </ProfileField>
        </CardHeaderItem>
        <EditButton onClick={handleClickOpen}>
          <label
            style={{
              fontSize: "10px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Edit Profile
          </label>
        </EditButton>
      </CardHeader>
      <TabHeader>
        <CardTabs onClick={() => setPage("activity")}>
          <label style={{ fontSize: "10px" }}>Activity</label>
        </CardTabs>
        <CardTabs onClick={() => setPage("profile")}>
          <label style={{ fontSize: "10px" }}>Profile</label>
        </CardTabs>
      </TabHeader>
      <SubProfileWrapper>
        {page === "activity" ? (
          <ActivityCard userPosts={userPosts} />
        ) : (
          <ProfileCard user={data.user} />
        )}
      </SubProfileWrapper>
      <Dialog open={editProfile} onClose={handleClose} fullWidth>
        {isLoading && <LinearProgress />}
        <DialogTitle style={{ textAlign: "center" }}>Edit Profile</DialogTitle>
        <DialogContent>
          <div>
            <div
              style={{ display: "flex", alignItems: "center", padding: "10px" }}
            >
              <Avatar src={defaultLogo} />
              <div style={{ padding: "20px" }}>
                <EditButton onClick={updateUserData}>
                  <label
                    style={{
                      fontSize: "10px",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Upload photo
                  </label>
                </EditButton>
              </div>
            </div>

            <CardFieldset>
              <ModalText>Name</ModalText>
              <CardInput
                placeholder="Name"
                type="text"
                onChange={(e) =>
                  setUpdatedUserData({
                    ...updatedUserData,
                    name: e.target.value,
                  })
                }
                value={updatedUserData.name}
                required
              />
            </CardFieldset>
            <CardFieldset>
              <ModalText>Email Address</ModalText>
              <CardInput
                placeholder="Email Address"
                type="email"
                onChange={(e) =>
                  setUpdatedUserData({
                    ...updatedUserData,
                    emailAddress: e.target.value,
                  })
                }
                value={updatedUserData.emailAddress}
                required
              />
            </CardFieldset>
            <CardFieldset>
              <ModalText>Contact Number</ModalText>
              <CardInput
                placeholder="Contact number"
                type="number"
                onChange={(e) =>
                  setUpdatedUserData({
                    ...updatedUserData,
                    contactNo: e.target.value,
                  })
                }
                value={updatedUserData.contactNo}
              />
            </CardFieldset>
            <CardFieldset>
              <ModalText>Gender</ModalText>
              <CardInput
                placeholder="Gender"
                type="text"
                onChange={(e) =>
                  setUpdatedUserData({
                    ...updatedUserData,
                    gender: e.target.value,
                  })
                }
                value={updatedUserData.gender}
              />
            </CardFieldset>
            <CardFieldset>
              <ModalText>Address</ModalText>
              <CardInput
                placeholder="Address"
                type="text"
                onChange={(e) =>
                  setUpdatedUserData({
                    ...updatedUserData,
                    address: e.target.value,
                  })
                }
                value={updatedUserData.address}
              />
            </CardFieldset>
          </div>
        </DialogContent>
        <DialogActions>
          <CardButton type="button" onClick={updateUser} disabled={isLoading}>
            Post
          </CardButton>
          <SecondaryCardButton onClick={handleClose}>
            Cancel
          </SecondaryCardButton>
        </DialogActions>
      </Dialog>
    </ProfileWrapper>
  );
}

function ActivityCard(props) {
  const { userPosts } = props;
  return (
    <>
      <PostsSection posts={userPosts} />
    </>
  );
}

function ProfileCard(props) {
  const { user } = props;
  console.log(user);
  return (
    <>
      <ContentWrapper>
        <label>Name:</label>
        <TextWrapper>
          <label>{user.name}</label>
        </TextWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <label>E-mail:</label>
        <TextWrapper>
          <label>{user.emailAddress}</label>
        </TextWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <label>Contact Number:</label>
        <TextWrapper>
          <label>{user.contactNo ? user.contactNo : "-"}</label>
        </TextWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <label>Address:</label>
        <TextWrapper>
          <label>{user.address ? user.address : "-"}</label>
        </TextWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <label>Gender:</label>
        <TextWrapper>
          <label>{user.gender ? user.gender : "-"}</label>
        </TextWrapper>
      </ContentWrapper>
    </>
  );
}
