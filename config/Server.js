import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://loanlink.onrender.com/api/v1/',
  withCredentials: true,
  credentials: 'include',


});


export default instance;
