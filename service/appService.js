import customAxios from "../utils/customize/customAxios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import environment from "../utils/constant/environment";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const handleLoginService = async (data) => {
  let response = await axios.post(`${environment.URL_BE}/api/login`, data);
  return response.data
};

export const handleRegisterService = async (data) => {
  let response = await axios.post(`${environment.URL_BE}/api/register`, data);
  return response.data
};

export const handleRegisterInformations = async (data) => {
  let response = await axios.post(`${environment.URL_BE}/api/register-information`, data);
  return response.data
};
export const getProductService = async () => {
  let response = await axios.get(`${environment.URL_BE}/api/get-product`);
  return response.data
};

export const getInforProductByIdService = async (productId) => {
  let response = await axios.get(`${environment.URL_BE}/api/get-product-detail?productId=${productId}`);
  return response.data
};

export const pushPorductToCartService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/push-product-to-cart`, data);
  return response.data
};


export const getAllCartService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-all-cart`);
  return response.data
};
