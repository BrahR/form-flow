import {acceptHMRUpdate, defineStore} from "pinia";
import type {} from "vite";

export const useDataStore = defineStore("data", () => {

    return { }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
}
