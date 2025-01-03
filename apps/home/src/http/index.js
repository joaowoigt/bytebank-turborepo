import axios from "axios";

const http = axios.create({
  baseURL: "http://44.203.160.113:443/",
});

http.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default http;
