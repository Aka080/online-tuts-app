import axios from "axios";

export default axios.create({
  baseURL: " https://my-json-server.typicode.com/Aka080/online-tuts-app",
  headers: {
    "Content-type": "application/json"
  }
});
