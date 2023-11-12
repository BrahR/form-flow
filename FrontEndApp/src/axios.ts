import axios from "axios";
import {useUserStore} from "@/store/user.ts";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.getToken();

    if (token) config.headers.Authorization = `Bearer ${token}`;
    config.headers.Accept = "application/json";

    return config;
})

export default axiosInstance;
