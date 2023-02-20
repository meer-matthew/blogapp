import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../../redux/creator/ActionCreator";
import { baseUrl } from "../../util/UrlHelper";
import ProfilePage from "../Profile/ProfilePage";
import PostsSection from "./components/PostsSection";
import SideNavigation from "./components/SideNavigation";

export default function HomePage() {
  const data = useSelector((store) => store.user);
  const postData = useSelector((store) => store.post);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios.get(`${baseUrl}/posts/`).then((res) => {
      const postData = res.data;
      setPosts(postData);
      dispatch(ActionCreator.showPosts());
    });
  }, []);

  const renderPage = () => {
    switch (page) {
      case 0:
        return <PostsSection posts={posts} />;
      case 1:
        return <></>;
      case 2:
        return <ProfilePage />;
    }
  };

  return (
    <Grid container style={{ height: "100%" }}>
      <Grid item md={4} xs={6}>
        <SideNavigation user={data.user} setPage={setPage} />
      </Grid>
      <Grid item md={8} xs={6}>
        {renderPage()}
      </Grid>
    </Grid>
  );
}
