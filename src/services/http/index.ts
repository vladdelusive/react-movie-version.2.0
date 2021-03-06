import axios, {AxiosRequestConfig} from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

declare global {
  interface Window {
    http: typeof http
  }
}

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  transformRequest: [],
});

if(process.env.NODE_ENV === "development" ) {
  window.http = http
}

/*
** Do delete and set correct (api key)
** cuz anyway - exist or no the key will be deleted and changed
 */

http.interceptors.request.use((res: AxiosRequestConfig) => {
  if(res?.baseURL && res?.url){
    const url = new URL(res.baseURL + res.url);
    url.searchParams.delete("api_key");
    url.searchParams.set("api_key", API_KEY!);
    res.url = res.url.split("?")[0] + url.search;
    return res;
  }
  return res;
})

export {http}