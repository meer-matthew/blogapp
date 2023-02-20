import axios from "axios";
import jsCookies from "js-cookies";

export const baseUrl = "http://localhost:3000";

export function getToken() {
  return jsCookies.getItem("token");
}

export function setTokenToHeader() {
  return { Authorization: "Bearer " + getToken() };
}

export const getData = (url, data, headers) => {
  axios.get(url, data, headers).then((response) => {});
};
