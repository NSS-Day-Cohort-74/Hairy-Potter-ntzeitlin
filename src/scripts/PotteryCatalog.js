let potteryCatalogArray = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked) {
        return potteryObject
    }

    if (potteryObject.weight >= 6) {
        potteryObject["price"] = 40
    } else {
        potteryObject["price"] = 20
    }
    potteryCatalogArray.push(potteryObject)
    return potteryObject
}

export const usePottery = () => {
    return potteryCatalogArray.map(potteryObject => ({ ...potteryObject }))
}