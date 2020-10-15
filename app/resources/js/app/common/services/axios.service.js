import axios from "axios";

let headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Accept: "application/json"
};

let axiosInstance = axios.create({
  headers: headers,
  baseURL: "http://localhost/api/"
});

export default axiosInstance;
