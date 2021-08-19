import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "http://3f34eb1d4379.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    // config: url, method, headers
    const token = await AsyncStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
  }, // make request
  (err) => {
    return Promise.reject(err);
  } // error
);

export default instance;
