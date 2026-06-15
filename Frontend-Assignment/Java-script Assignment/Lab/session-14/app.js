
import { formatPrice, getDiscountedPrice } from "./utils.js";


const price = 500;
const discount = 10;


const finalPrice = getDiscountedPrice(price, discount);


console.log("Original Price:", formatPrice(price));
console.log("Discounted Price:", formatPrice(finalPrice));