import axios from "axios";

// Change the API Key in Sign Up with the API Key
const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1"
});

export default instance;
