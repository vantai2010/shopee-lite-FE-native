import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import keyMap from "../constant/keyMap";

let token = await AsyncStorage.getItem(keyMap.KEY_TOKEN_STORE)

const customAxios = axios.create({
  baseURL: "http://192.168.42.105:5000",
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

customAxios.interceptors.response.use(
  (response) => {
    const responseData = response.data;
    return responseData;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;
