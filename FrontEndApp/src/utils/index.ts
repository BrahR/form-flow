interface hasId {
    id: number
}

function pushToArray<T>(array: T[] | null | undefined, ...items: T[]): T[] {
    const newArray = array ?? []
    newArray.push(...items)
    return newArray
}

function find<T extends hasId>(id: number, array: T[]): number {
    return array.findIndex((i: T) => i.id == id)
}

export { pushToArray, find }
