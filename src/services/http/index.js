import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  transformRequest: [],
});

if(process.env.NODE_ENV === "development" ) {
  window.http = http
}


export {http}