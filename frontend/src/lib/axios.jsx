import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://chatty-bwih.onrender.com/api' ,
    withCredentials: true
})