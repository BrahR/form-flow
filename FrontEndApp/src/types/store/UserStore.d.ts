export type UserStore = {
    data: User
    token: string | null
    loggingOut: boolean
    loading: boolean
    hydrated: boolean
}
