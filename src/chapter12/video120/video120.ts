export {};

console.log("video 120");

abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  test() {
    console.log("test");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Dog is making sound...");
  }
}

const dog = new Dog("dog");
dog.test();
dog.makeSound();
