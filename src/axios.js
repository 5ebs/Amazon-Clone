import axios from "axios";

// URL for deployed cloudfunction
const instance = axios.create({
  baseURL: "https://us-central1-clone-amzn-5ebs.cloudfunctions.net/api",

});

export default instance;
