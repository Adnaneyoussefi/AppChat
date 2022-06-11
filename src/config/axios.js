import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:44382/api/"
});

export default instance;