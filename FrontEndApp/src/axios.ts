import axios from "axios";
import { useDataStore } from "@/store";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(config => {
    const store = useDataStore();

    const token = store.getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Accept = "application/json";
    return config;
})

export default axiosInstance;
