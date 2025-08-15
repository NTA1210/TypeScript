console.log("video 130");
function logLength(value) {
    return value.length;
}
console.log(logLength("hello"));
console.log(logLength([1, 2, 3]));
console.log(logLength({ length: 10 }));
function testInterface(value) { }
//ràng buộc với class
class Animal {
    move() {
        console.log("Animal is moving...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog is barking...");
    }
}
function testClass(value) {
    value.move();
}
testClass(new Dog());
testClass(new Animal());
//ràng buộc keyof
function getProperty(obj, key) {
    return obj[key];
}
const user = { id: 1, name: "John" };
console.log(getProperty(user, "id"));
console.log(getProperty(user, "name"));
export {};
