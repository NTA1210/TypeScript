export {};

console.log("video 127");

type MyArrString = string[];
type MyArrNumber = number[];

const arr: MyArrString = ["a", "b", "c"];

type MyArr<T> = T[];

const arr1: MyArr<string> = ["a", "b", "c"];
const arr2: MyArr<number> = [1, 2, 3];
