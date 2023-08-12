import axios, { AxiosInstance } from 'axios';

const ROOT_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ROOT_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
