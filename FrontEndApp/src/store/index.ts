import { acceptHMRUpdate, defineStore } from "pinia";
import type {} from "vite";
import { Ref, ref } from "vue";
import axiosInstance from "@/axios.ts";

import type { User } from "@/types/modals/User.d.ts";

type Data = {
    data: User,
    token: string | null
}

export const useDataStore = defineStore("data", () => {
    const data: Ref<Data> = ref(
        {
            data: {},
            token: sessionStorage.getItem("TOKEN")
        }
    );

    // getters
    function getToken() {
        return data.value.token;
    }

    function getUser() {
        return data.value.data;
    }

    async function getUserApi() {
        return axiosInstance.post("/user").then((response) => {
            setUser(response.data.user);
        })
    }

    // setters
    function setToken(token: string) {
        data.value.token = token;
        sessionStorage.setItem("TOKEN", token)
    }

    function setUser(user: User) {
        data.value.data = user;
    }

    function $reset() {
        sessionStorage.removeItem("TOKEN");
        data.value = {
            data: {},
            token: null
        }
    }

    async function registerUser(user: User) {
        return axiosInstance.post("/register", user).then((response) => {
            setToken(response.data.token);
            setUser(response.data.user);
        })
    }

    async function loginUser(user: User) {
        return axiosInstance.post("/login", user).then((response) => {
            setToken(response.data.token);
            setUser(response.data.user);
        })
    }

    async function logoutUser() {
        return axiosInstance.post("/logout").then(() => {
            $reset();
        })
    }

    return { data, getToken, getUser, getUserApi, registerUser, loginUser, logoutUser, $reset}
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
}
