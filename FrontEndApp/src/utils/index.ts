function pushToArray<T>(array: T[] | null | undefined, ...items: T[]): T[] {
    const newArray = array ?? []
    newArray.push(...items)
    return newArray
}

export { pushToArray }
