import axios from "axios";

export default axios.create({
  baseURL: "https://nx8ap2zr5e.execute-api.eu-central-1.amazonaws.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
