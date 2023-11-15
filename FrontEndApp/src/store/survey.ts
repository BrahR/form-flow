import {acceptHMRUpdate, defineStore} from "pinia";
import type {} from "vite"
import {SurveyStore} from "@/types/store/SurveyStore";
import {reactive} from "vue";
import axiosInstance from "@/axios.ts";
import {useWorkspaceStore} from "@/store/workspace.ts";
import {pushToArray} from "@/utils";

export const useSurveyStore = defineStore("survey", () => {
    const useWorkspace = useWorkspaceStore()

    const surveys: SurveyStore = reactive({
        data: [] as Survey[],
        creating: false
    })

    const hydrate = (): void => {

    }

    const dehydrate = (): void => {
        surveys.data = [] as Survey[]
    }

     const createSurvey = async (survey: Survey): Promise<void> => {
        if (surveys.creating) return
        surveys.creating = true

        const selected: Workspace = useWorkspace.getSelected as Workspace

        return axiosInstance.post(`/workspace/${selected.id}/survey/create`, survey).then((r) => {
            selected.surveys = pushToArray(selected.surveys, r.data.survey)
            surveys.creating = false
        })
    }

    return {
        surveys,

        createSurvey,

        hydrate,
        dehydrate
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSurveyStore, import.meta.hot))
}
