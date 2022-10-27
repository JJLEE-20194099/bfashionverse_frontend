import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const baseURL = 'http://192.168.31.157:2701/'
export async function postRequest(url, body) {
  try {
    let response = await axios.post(
      baseURL + url,
      body,
      await generateRequestHeader()
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
      await generateRequestHeader()
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

export const generateRequestHeader = async() => {
  let token = await AsyncStorage.getItem("accessToken")
  return {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, 
    },
  };
};

export const handleErrorCode = (err) => {
  console.log("Err", err);
};
export const SetStorage = async (token) => await AsyncStorage.setItem('accessToken', token)
export const GetStorage = async () => await AsyncStorage.getItem('accessToken')
export const RemoveStorage = async () => await AsyncStorage.removeItem('accessToken')