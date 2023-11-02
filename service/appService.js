import customAxios from "../utils/customize/customAxios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import environment from "../utils/constant/environment";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import * as FileSystem from 'expo-file-system';


export const handleLoginService = async (data) => {
  let response = await axios.post(`${environment.URL_BE}/api/login`, data);
  return response.data
};


export const loginWithTokenService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/login-token`);
  return response.data
};

export const handleRegisterService = async (data) => {
  let response = await axios.post(`${environment.URL_BE}/api/register`, data);
  return response.data
};

export const handleRegisterInformations = async (data) => {
  let keyData = Object.keys(data)
  const formData = new FormData()

  keyData?.forEach(key => {
    if (key === "image") {
      formData.append(key, {
        uri: data[key],
        type: 'image/jpeg', // Đổi kiểu dữ liệu phù hợp
        name: 'image.jpg',
      })
    } else {
      formData.append(key, data[key])
    }
  })
  let response = await axios.post(`${environment.URL_BE}/api/register-information`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
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

export const buyProductService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/buy-product`, data);
  return response.data
};


export const deleteCartService = async (cartId) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.delete(`${environment.URL_BE}/api/delete-product-from-cart?cartId=${cartId}`);
  return response.data
};

export const getAllCartService = async () => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-all-cart`);
  return response.data
};

export const getInforShopBySupplierIdService = async (supplierId) => {
  let response = await axios.get(`${environment.URL_BE}/api/get-information-shop?supplierId=${supplierId}`);
  return response.data
};

export const setFollowShopService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/set-follow-shop`, data);
  return response.data
};

export const setUnFollowShopService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/set-unfollow-shop`, data);
  return response.data
};

export const updateQuantityCartService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.put(`${environment.URL_BE}/api/update-quantity-cart?cartId=${data.cartId}&quantity=${data.quantity}&productFee=${data.productFee}`);
  return response.data
};

export const getAllVouchersService = async (productId) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let url
  if (productId) {
    url = `${environment.URL_BE}/api/get-all-vouchers-by-user?productId=${productId}`
  } else {
    url = `${environment.URL_BE}/api/get-all-vouchers-by-user`
  }
  let response = await axios.get(url);
  return response.data
};


export const getBanksForUserService = async () => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-banks-for-user`);
  return response.data
};


export const createBankForUserService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/create-bank-for-user`, data);
  return response.data
};

export const verifyPassBankForUserService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/verify-pass-bank-for-user`, data);
  return response.data
};

export const getTransactionByUserService = async (statusId) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-transaction-by-user?statusId=${statusId}`);
  return response.data
};


export const getListProductUnReviewService = async () => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-list-product-bought-unReview-by-user`);
  return response.data
};

export const handleConfirmReceivedProductByUserService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/confirm-received-product`, data);
  return response.data
};


export const handleCancelBuyProductService = async (cartId) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/cancel-buy-product?cartId=${cartId}`);
  return response.data
};


export const handleReviewProductBoughtService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/review-product-bought`, data);
  return response.data
};


export const getNumberTransactionByUserService = async () => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-number-transaction-by-user`);
  return response.data
};


export const getListHistoriesByUserService = async () => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-histories-by-user`);
  return response.data
};

export const getListReviewOfProductService = async (productId) => {
  let response = await axios.get(`${environment.URL_BE}/api/get-list-review-of-product?productId=${productId}`);
  return response.data
};


export const getListInteracChatService = async (search) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let url
  if (search) {
    url = `${environment.URL_BE}/api/list-user-chat-by-user?search=${search}`
  } else {
    url = `${environment.URL_BE}/api/list-user-chat-by-user`
  }
  let response = await axios.get(url);
  return response.data
};



export const getListContentChatService = async (contactUserId) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/list-content-chat-by-user?contactUserId=${contactUserId}`);
  return response.data
};


export const sendMessChatByUserService = async (data) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.post(`${environment.URL_BE}/api/send-mess-chat-by-user`, data);
  return response.data
};


export const getListNotifyService = async () => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-list-notify-by-user`);
  return response.data
};


export const deleteNotifyByIdService = async (notifyId) => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.delete(`${environment.URL_BE}/api/delete-notify-by-notifyId?notifyId=${notifyId}`);
  return response.data
};


export const getNumberNotifyService = async () => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-number-notifycation-by-user`);
  return response.data
};

export const getNumberCartService = async () => {
  let token = await AsyncStorage.getItem(environment.KEY_TOKEN_STORE)
  setAuthToken(token)
  let response = await axios.get(`${environment.URL_BE}/api/get-number-cart-by-user`);
  return response.data
};