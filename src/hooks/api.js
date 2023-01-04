import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const baseURL = 'http://192.168.31.157:2701/'

let token = null

export async function postRequest(url, body) {
  try {
    let response = await axios.post(
      baseURL + url,
      body,
      generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}

export async function postRequestJson(url, body) {
  try {
    let response = await axios.post(
      baseURL + url,
      body,
      generateRequestHeader('json')
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}


export async function getRequest(url) {
  try {
    let response = await axios.get(
      baseURL + url,
      generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}

export async function deleteRequest(url) {
  try {
    let response = await axios.delete(
      process.env.REACT_APP_BASE_URL + url,
      generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}

export async function patchRequest(url, body) {
  try {
    let response = await axios.patch(
      process.env.REACT_APP_BASE_URL + url,
      body,
      generateRequestHeader()
    );
    return response.data;
  } catch (error) {
    handleErrorCode(error);
    throw error;
  }
}

export const generateRequestHeader = (type) => {
  // let token = await AsyncStorage.getItem("accessToken")
  return {
    headers: {
      "Content-Type": type=="json"?"application/json":"multipart/form-data",
      "Authorization": `Bearer ${token}`, 
    },
  };
};

export const handleErrorCode = (err) => {
  console.log("Err", err);
};
export const SetStorage = async (token) => token =  await AsyncStorage.setItem('accessToken', token)
export const GetStorage = async () =>token =  await AsyncStorage.getItem('accessToken')
export const RemoveStorage = async () =>{
  await AsyncStorage.removeItem('accessToken')
  token = null
} 