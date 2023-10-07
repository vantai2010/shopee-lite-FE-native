import axios from "axios"


const customAxios = axios.create({
    baseURL: 'http://192.168.42.104:5000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    },
});


customAxios.interceptors.response.use(
    response => {

        const responseData = response.data;
        return responseData;
    },
    error => {
        return Promise.reject(error);
    }
);

export default customAxios
