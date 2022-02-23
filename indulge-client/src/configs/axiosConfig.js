import axios from "axios";
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export const serverBaseURL = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL
});