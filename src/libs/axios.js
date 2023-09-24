import axios from "axios";



export const Api = axios.create({
    baseURL: "https://api-matchband.onrender.com/"
    //baseURL:"http://localhost:3001"
})