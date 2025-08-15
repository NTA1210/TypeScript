export {};
console.log("video 130");

function logLength<T extends { length: number }>(value: T) {
  return value.length;
}

console.log(logLength("hello"));
console.log(logLength([1, 2, 3]));
console.log(logLength({ length: 10 }));

interface IUser {
  id: number;
  name: string;
}

function testInterface<T extends IUser>(value: T) {}

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

function testClass<T extends Animal>(value: T) {
  value.move();
}

testClass(new Dog());
testClass(new Animal());

//ràng buộc keyof

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { id: 1, name: "John" };

console.log(getProperty(user, "id"));
console.log(getProperty(user, "name"));
