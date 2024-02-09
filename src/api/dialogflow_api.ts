import axios from 'axios'

export const dialogFlowApi = axios.create({
  baseURL: 'https://proyecto-ihc.onrender.com/',
  headers:{
    'Content-Type': '	application/json'
  }
});

