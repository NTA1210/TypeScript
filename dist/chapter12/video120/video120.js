console.log("video 120");
class Animal {
    constructor(name) {
        this.name = name;
    }
    test() {
        console.log("test");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Dog is making sound...");
    }
}
const dog = new Dog("dog");
dog.test();
dog.makeSound();
export {};
