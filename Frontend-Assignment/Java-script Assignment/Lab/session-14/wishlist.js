
import {
    addToWishlist,
    removeFromWishlist,
    listWishlist
} from "./wishlistUtils.js";


let wishlist = [];


wishlist = addToWishlist(wishlist, { name: "Shoes", price: 2000 });
wishlist = addToWishlist(wishlist, { name: "Watch", price: 5000 });
wishlist = addToWishlist(wishlist, { name: "Bag", price: 1500 });

console.log("Wishlist after adding:");
listWishlist(wishlist);


wishlist = removeFromWishlist(wishlist, "Watch");

console.log("\nWishlist after removal:");
listWishlist(wishlist);