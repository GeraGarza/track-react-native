import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://cb5f79d4cfdd.ngrok.io",
});

export default instance;
