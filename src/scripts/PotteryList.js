export const PotteryList = (potteryToSellArray) => {
    let potteryListHTML = ''
    for (const potteryObject of potteryToSellArray) {
        potteryListHTML += `
            <section class="pottery" id="pottery--${potteryObject.id}">
                <h2 class="pottery__shape">${potteryObject.shape}</h2>
                <div class="pottery__properties">
                    ${potteryObject.shape} weighs ${potteryObject.weight} grams and is ${potteryObject.height} cm in height
                </div>
                <div class="pottery__price">Price is $${potteryObject.price}</div>
            </section>
        `
    }
    return potteryListHTML
}