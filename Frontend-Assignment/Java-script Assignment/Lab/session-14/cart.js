
import { formatPrice, getDiscountedPrice } from "./utils.js";


const cartItems = [
    { name: "Shoes", price: 2000, discount: 10 },
    { name: "Watch", price: 5000, discount: 20 },
    { name: "Bag", price: 1500, discount: 5 }
];


cartItems.forEach(item => {
    const discounted = getDiscountedPrice(item.price, item.discount);

    console.log("Item:", item.name);
    console.log("Original Price:", formatPrice(item.price));
    console.log("Discounted Price:", formatPrice(discounted));
    console.log("----------------------");
});