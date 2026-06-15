
import { addToCart, removeFromCart, calculateTotal } from "./cartUtils.js";


let cart = [];


cart = addToCart(cart, { name: "Shoes", price: 2000 });
cart = addToCart(cart, { name: "Watch", price: 5000 });
cart = addToCart(cart, { name: "Bag", price: 1500 });

console.log("Cart after adding items:", cart);


cart = removeFromCart(cart, "Watch");
console.log("Cart after removal:", cart);


const total = calculateTotal(cart);
console.log("Total Price:", total);