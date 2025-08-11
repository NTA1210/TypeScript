"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 92");
const sayHi = (name) => {
    console.log("hi", name);
};
const sum = (a, b = 5) => {
    return a + b;
};
const mySum = sum(2);
console.log(mySum);
sayHi("eric");
