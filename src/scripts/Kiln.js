export const firePottery = (rawPotteryObject, temperatureNumber = 2000) => {

    rawPotteryObject["fired"] = true
    rawPotteryObject["cracked"] = false

    if (temperatureNumber > 2200) {
        rawPotteryObject.cracked = true
    }

    return rawPotteryObject
}