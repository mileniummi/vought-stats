const maxAmount = 840


export const gerRandomId = (notThisOne?: number): number => {
    const idx = Math.floor(Math.random() * maxAmount + 1)

    if (idx !== notThisOne) return idx
    return gerRandomId( notThisOne)
}

export const getVoteOptions = () => {
    const firstId = gerRandomId()
    const secondId = gerRandomId(firstId)

    return [firstId, secondId]
}