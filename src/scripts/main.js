// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 5, 7)
const cup = makePottery("cup", 2, 4)
const dish = makePottery("dish", 10, 23)
const vase = makePottery("vase", 12, 12)
const platter = makePottery("platter", 20, 19)

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2000)
const firedCup = firePottery(cup, 200)
const firedDish = firePottery(dish, 1900)
const firedVase = firePottery(vase, 3029)
const firedPlatter = firePottery(platter, 38)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedCup)
toSellOrNotToSell(firedDish)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedPlatter)

// Invoke the component function that renders the HTML list

const potteryListHTML = PotteryList(usePottery())
const potteryListElement = document.querySelector(".potteryList")
potteryListElement.innerHTML = potteryListHTML