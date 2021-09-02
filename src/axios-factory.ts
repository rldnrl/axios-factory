// 팩토리 패턴을 이용한 Axios 세팅
import axios from "axios";
import Cookies from "js-cookie";

const createAxios = (baseUrl: string, accessTokenKey: string) => {
  const client = axios.create();

  client.interceptors.request.use((config) => {
    config.baseURL = baseUrl;
    const accessToken = Cookies.get(accessTokenKey);
    const payload = accessToken
      ? {
          ...config.headers,
          authorization: `Bearer ${accessToken}`,
        }
      : config.headers;

    config.headers = payload;

    return config;
  });

  client.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return client;
};

export default createAxios;
