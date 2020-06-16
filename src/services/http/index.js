import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  transformRequest: [],
});

if(process.env.NODE_ENV === "development" ) {
  window.http = http
}

http.interceptors.request.use((res) => {
  const fullUrl = res.baseURL + res.url;
  const url = new URL(fullUrl);
  url.searchParams.set("api_key", API_KEY);
  res.url = url.toString();
  return res;
})

export {http}