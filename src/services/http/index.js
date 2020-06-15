import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  transformRequest: [],
});

if(process.env.NODE_ENV === "development" ) {
  window.http = http
}

export default http