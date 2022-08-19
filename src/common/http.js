import axios from "axios";
import { notification } from "antd";

const http = axios.create({
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

export const fetcher = (url) =>
  http
    .get(url)
    .then((res) => res.data)
    .catch(() => {
      notification.error({
        message: "Username is invalid.",
      });
    });

export default http;
