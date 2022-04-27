import axios from 'axios';

const BASE = `${process.env.REACT_APP_API_URL}/api`;
const request = axios.create({ baseURL: BASE });

const initializeHeader = token => {
  if (token) {
    request.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete request.defaults.headers.common.Authorization;
  }
};

export default async (method, url, token = null, data = null) => {
  initializeHeader(token);
  const { data: res } = await request[method](url, data);
  return res;
};
