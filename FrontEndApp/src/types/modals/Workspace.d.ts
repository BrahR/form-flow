type Workspace = {
    id: number,
    name: string,
    owner: User,
    members: User[],
    tasks: Task[]
}
