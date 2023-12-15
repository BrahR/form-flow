import {MultipleChoice} from "@/types/store/question/MultipleChoice";

export type QuestionStore = {
    data: MultipleChoice
    selected: Question | null
    creating: boolean
    loading: boolean
    hydrated: boolean
}
