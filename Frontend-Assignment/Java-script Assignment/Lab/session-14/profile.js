
import formatFollowers from "./instaHelpers.js";


const users = [
    { name: "Aman", followers: 1200 },
    { name: "Riya", followers: 2500000 },
    { name: "John", followers: 980 }
];


users.forEach(user => {
    console.log(`${user.name} has ${formatFollowers(user.followers)} followers`);
});