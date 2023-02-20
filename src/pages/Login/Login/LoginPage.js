import React, { useState } from "react";
import {
  CardBody,
  CardButton,
  CardFieldset,
  CardInput,
  CardLink,
  ErrorText,
} from "../../../components/CommonComponents";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../../redux/creator/ActionCreator";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { baseUrl } from "../../../util/UrlHelper";
import ContentCard from "../components/ContentCard";
import { LinearProgress } from "@mui/material";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    emailAddress: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      emailAddress: user.emailAddress,
      password: user.password,
    };
    setUser(newUser);
    axios
      .post(`${baseUrl}/user/login`, newUser)
      .then((res) => {
        console.log(res);
        const userToken = res.data.token;
        const decodedToken = jwtDecode(userToken);
        document.cookie = `token=${userToken}`;
        dispatch(ActionCreator.userLogin(decodedToken.user));
        navigate("/home");
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  console.log(user);

  return (
    <ContentCard>
      <form>
        <CardBody>
          <CardFieldset>
            <CardInput
              placeholder="Email Address"
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, emailAddress: e.target.value })
              }
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
              placeholder="Password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </CardFieldset>
          {error && (
            <CardFieldset>
              <ErrorText>Failed to login account</ErrorText>
            </CardFieldset>
          )}
          <CardFieldset>
            <CardButton type="submit" onClick={handleSubmit}>
              Login
            </CardButton>
          </CardFieldset>
          <CardFieldset>
            <CardLink to="/new-user" exact>
              Don't have an account? Sign up
            </CardLink>
          </CardFieldset>
        </CardBody>
      </form>
    </ContentCard>
  );
}
