console.log("video 125");
function testNumber(value) {
    return value;
}
function testString(value) {
    return value;
}
function testGeneric(value) {
    return value;
}
const a = testGeneric("abc");
const b = testGeneric(123);
console.log(a);
console.log(b);
function getFirstElementInArray(arr) {
    return arr[0];
}
const getFirstElementInArray2 = (arr) => {
    return arr[0];
};
const c = getFirstElementInArray(["a", "b", "c"]);
const d = getFirstElementInArray([1, 2, 3]);
console.log(c);
console.log(d);
export {};
