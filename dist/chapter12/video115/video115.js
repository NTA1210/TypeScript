console.log("video 115");
class Animal {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    makeSound() {
        console.log("Animal is making sound...:", this.id);
    }
    sleep() {
        console.log("Animal is sleeping...:", this.name);
    }
}
const myDog = new Animal("dog", 1);
console.log("myDog", myDog.name);
myDog.makeSound();
myDog.sleep();
export {};
