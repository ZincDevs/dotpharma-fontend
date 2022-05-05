import axios from 'axios';

// const BASE = `${process.env.REACT_APP_API_URL}/api`;
const BASE = 'http://localhost:8000';
export const axiosPrivate = axios.create({
  baseURL: BASE,
  header: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
export default axios.create({
  baseURL: BASE,
  withCredentials: true,
});

// const initializeHeader = token => {
//   if (token) {
//     request.defaults.headers.common.Authorization = `Bearer ${token}`;
//   } else {
//     delete request.defaults.headers.common.Authorization;
//   }
// };

// export default async token => {
//   initializeHeader(token);
//   return request;
// };
