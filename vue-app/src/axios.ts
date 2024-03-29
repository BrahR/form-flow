import axios from "axios";
import { useUserStore } from "@/stores/user.ts";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const useUser = useUserStore();
  const token = useUser.token;

  config.headers.Accept = "application/json";
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      useUserStore().dehydrate();
      console.log("Caught in 4K");
      window.location.reload();
    }

    return Promise.reject(err);
  },
);

export default axiosInstance;
