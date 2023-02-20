import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  CardBody,
  CardButton,
  CardFieldset,
  CardInput,
  CardLink,
} from "../../../components/CommonComponents";
import { ActionCreator } from "../../../redux/creator/ActionCreator";
import axios from "axios";
import { baseUrl } from "../../../util/UrlHelper";
import jwtDecode from "jwt-decode";
import ContentCard from "../components/ContentCard";

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    name: "",
    emailAddress: "",
    birthDate: "",
    gender: "",
    address: "",
    profilePic: "",
    contactNo: "",
    password: "",
  });
  console.log(user.birthDate);
  const createUser = (e) => {
    e.preventDefault();

    const newUser = {
      name: user.name,
      emailAddress: user.emailAddress,
      birthDate: user.birthDate,
      gender: user.gender,
      address: user.address,
      profilePic: user.profilePic,
      contactNo: user.contactNo,
      password: user.password,
    };
    setUser(newUser);
    axios
      .post(`${baseUrl}/user/sign-up`, newUser)
      .then((res) => {
        console.log(res);
        const userToken = res.data.token;
        const decodedToken = jwtDecode(userToken);
        document.cookie = `token=${userToken}`;
        dispatch(ActionCreator.createUser(decodedToken.user));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ContentCard>
      <form onSubmit={createUser}>
        <CardBody>
          <CardFieldset>
            <CardInput
              placeholder="Name"
              type="text"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
              placeholder="Email Address"
              type="email"
              onChange={(e) =>
                setUser({ ...user, emailAddress: e.target.value })
              }
              value={user.emailAddress}
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
              placeholder="Birthday"
              type="date"
              onChange={(e) => setUser({ ...user, birthDate: e.target.value })}
              value={user.birthDate}
              required
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
              placeholder="Password"
              type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              required
            />
          </CardFieldset>
          {/* <CardFieldset>
            <CardInput
              placeholder="Confirm Pasword"
              type="password"
              value={user.name}
              required
            />
          </CardFieldset> */}
          <CardFieldset>
            <CardButton type="submit">Register</CardButton>
          </CardFieldset>
          <CardFieldset>
            <CardLink to="/" exact>
              I already have an account
            </CardLink>
          </CardFieldset>
        </CardBody>
      </form>
    </ContentCard>
  );
}
