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
  res.url = res.url.replace("?api_key=", `?api_key=${API_KEY}`)
  return res
})

export {http}