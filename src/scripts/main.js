// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 5, 7)
const cup = makePottery("cup", 2, 4)
const dish = makePottery("dish", 10, 23)
const vase = makePottery("vase", 12, 12)
const platter = makePottery("platter", 20, 19)

console.log(platter)
// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2000)
const firedCup = firePottery(cup, 2500)
const firedDish = firePottery(dish, 1900)
const firedVase = firePottery(vase, 3029)
const firedPlatter = firePottery(platter, 38)

console.log(firedMug)
console.log(firedCup)
console.log(firedDish)
console.log(firedVase)
console.log(firedPlatter)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

