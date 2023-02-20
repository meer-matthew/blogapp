import { AddSharp } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  LinearProgress,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uid } from "uid";
import {
  CardButton,
  CardFieldset,
  CardInput,
  CircularButton,
  LongCardInput,
  SecondaryCardButton,
} from "../../../components/CommonComponents";
import { ActionCreator } from "../../../redux/creator/ActionCreator";
import { baseUrl } from "../../../util/UrlHelper";
import jsCookies from "js-cookies";
import { Text } from "../../../components/SideNavigationComponents";

export default function AddPost(props) {
  const { user } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState("");
  const token = jsCookies.getItem("token");
  const headers = { Authorization: "Bearer " + token };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createPost = (e) => {
    setLoading(true);
    e.preventDefault();
    const arr = [];
    const newPost = {
      userId: user._id || user.userId,
      content: post,
    };
    axios
      .post(`${baseUrl}/posts/`, newPost, { headers: headers })
      .then((res) => {
        const postData = res.data;
        setPost(postData);
        arr.push(newPost);
        dispatch(ActionCreator.createPost(arr));
      });
    setPost("");
    setLoading(false);
    handleClose();
  };
  return (
    <div>
      <CircularButton onClick={handleClickOpen}>
        <AddSharp />
        <Text>Create</Text>
      </CircularButton>
      <Dialog open={open} onClose={handleClose}>
        {loading && <LinearProgress />}
        <DialogTitle>Create post</DialogTitle>
        <DialogContent>
          <CardFieldset>
            <LongCardInput
              placeholder="What's on your mind?"
              type="textarea"
              onChange={(e) => setPost(e.target.value)}
              value={post}
              required
            />
          </CardFieldset>
        </DialogContent>
        <DialogActions>
          <CardButton type="button" onClick={createPost}>
            Post
          </CardButton>
          <SecondaryCardButton onClick={handleClose}>
            Cancel
          </SecondaryCardButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
