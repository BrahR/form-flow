import {acceptHMRUpdate, defineStore} from "pinia";
import type {} from "vite";
import {Ref, ref} from "vue";
import axiosInstance from "@/axios.ts";

import {User, Workspace} from "@/types/modals/index";

type StoreType = {
    user: {
        data: User,
        token: string | null,
        loggingOut: boolean
    },
    workspaces: {
        data: Workspace[]
        selected: number
    }
}

export const useDataStore = defineStore("data", () => {
    const data: Ref<StoreType> = ref(
        {
            user: {
                data: {},
                token: sessionStorage.getItem("TOKEN"),
                loggingOut: false,
            },
            workspaces: {
                data: [],
                selected: 0
            }
        }
    );

    // getters
    function getUser(): User {
        return data.value.user.data;
    }

    function getToken(): string | null {
        return data.value.user.token;
    }

    async function getUserApi(): Promise<void> {
        return axiosInstance.post("/user").then((response) => {
            setUser(response.data.user);
        })
    }

    async function getWorkspaces(): Promise<void> {
        return axiosInstance.get("/workspaces").then((response) => {
            data.value.workspaces = response.data.workspaces;
        })
    }

    function getSelectedFolder(): number {
        return data.value.workspaces.selected
    }

    function isLoggingOut(): boolean {
        return data.value.user.loggingOut;
    }

    // setters
    function setToken(token: string): void {
        data.value.user.token = token;
        sessionStorage.setItem("TOKEN", token)
    }

    function setUser(user: User): void {
        data.value.user.data = user;
    }

    function setWorkspaces(workspaces: Workspace[]): void {
        data.value.workspaces.data = workspaces;
    }

    function setSelectedFolder(id: number) {
        data.value.workspaces.selected = id
    }

    function appendWorkspace(workspace: Workspace): void {
        data.value.workspaces.data.push(workspace)
    }

    function $reset(): void {
        sessionStorage.removeItem("TOKEN");
        data.value = {
            user: {
                data: {},
                token: null,
                loggingOut: false,
            },
            workspaces: {
                data: [],
                selected: 0
            }
        }
    }

    async function registerUser(user: User): Promise<void> {
        return axiosInstance.post("/register", user).then((response) => {
            setToken(response.data.token);
            setUser(response.data.user);
        })
    }

    async function loginUser(user: User): Promise<void> {
        return axiosInstance.post("/login", user).then((response) => {
            setToken(response.data.token);
            setUser(response.data.user);
        })
    }

    async function logoutUser(): Promise<void> {
        data.value.user.loggingOut = true;
        return axiosInstance.post("/logout").then(() => {
            $reset();
            data.value.user.loggingOut = false;
        })
    }

    async function createWorkspace(workspace: Workspace): Promise<void> {
        return axiosInstance.post("/workspace/create", workspace).then((response) => {
            appendWorkspace(response.data.workspace);
        })
    }

    async function fetchWorkspaces(): Promise<Workspace[]> {
        await axiosInstance.get("/workspaces")
            .then((response) => {
                setWorkspaces(response.data.workspaces)
                setSelectedFolder(response.data.workspaces[0].id)
            })

        return data.value.workspaces.data
    }

    return {
        data,
        getToken,
        getUser,
        getUserApi,
        getWorkspaces,
        getSelectedFolder,
        setSelectedFolder,
        isLoggingOut,
        registerUser,
        loginUser,
        logoutUser,
        createWorkspace,
        fetchWorkspaces,
        $reset
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
}
