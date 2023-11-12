import {acceptHMRUpdate, defineStore} from "pinia";
import type {} from "vite";
import {reactive} from "vue";
import axiosInstance from "@/axios.ts";
import {UserStore} from "@/types/store/UserStore";

export const useUserStore = defineStore("user", () => {
    const user: UserStore = reactive(
        {
            data: {} as User,
            token: sessionStorage.getItem("TOKEN"),
            loggingOut: false,
            loading: false,
            hydrated: false
        },
    )

    const hydrate = async () => {
        user.loading = true

        await axiosInstance.get("/user").then((response) => {
            user.data = response.data.user
            user.loggingOut = false
        }).catch((err) => {
            console.log("Error while trying to hydrate: useUserStore")
            console.log(err)
            if (err.response.status == 401) dehydrate()
        }).finally(() => {
            user.loading = false
            user.hydrated = true
        })
    }

    const dehydrate = () => {
        console.log("DEHYDRATING")
        sessionStorage.removeItem("TOKEN");
        user.data = {} as User
        user.token = null
        user.loggingOut = false
        user.loading = false
        user.hydrated = false
    }

    // GETTERS
    const getUser = (): User => user.data
    const getToken = (): string | null => user.token
    const isLoading = (): boolean => user.loading
    const isHydrated = (): boolean => user.hydrated
    const isLoggingOut = (): boolean => user.loggingOut


    function setToken(token: string): void {
        user.token = token;
        sessionStorage.setItem("TOKEN", token)
    }

    async function registerUser(_user: User): Promise<void> {
        return axiosInstance.post("/register", _user).then((response) => {
            setToken(response.data.token);
            user.data = response.data.user;
        })
    }

    async function loginUser(_user: User): Promise<void> {
        return axiosInstance.post("/login", _user).then((response) => {
            setToken(response.data.token);
            user.data = response.data.user;
        })
    }

    async function logoutUser(): Promise<void> {
        user.loggingOut = true;
        return axiosInstance.post("/logout").then(() => {
            dehydrate();
            user.loggingOut = false;
        })
    }

    return {
        getUser,
        getToken,
        isLoading,
        isHydrated,
        isLoggingOut,

        registerUser,
        loginUser,
        logoutUser,

        hydrate,
        dehydrate
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
