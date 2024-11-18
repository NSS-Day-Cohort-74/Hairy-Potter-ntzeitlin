let potteryID = 1;

export const makePottery = (shapeString, weightNumber, heightNumber) => {
    const potteryObject = {
        id: potteryID,
        shape: shapeString,
        weight: weightNumber,
        height: heightNumber
    }
    potteryID++;
    return potteryObject

}