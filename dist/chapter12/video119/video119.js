console.log("video 119");
class Cat {
    makeSound() {
        console.log("Cat is making sound...");
    }
}
class Bird {
    makeSound() {
        console.log("Bird is making sound...");
    }
}
class Dog {
    goo() {
        console.log("Dog is making sound...");
    }
    makeSound() {
        console.log("Dog is making sound...");
    }
}
const cat = new Cat();
const bird = new Bird();
const dog = new Dog();
cat.makeSound();
bird.makeSound();
dog.makeSound();
const myArray = [1, 2, 3];
const myArray1 = ["1", "2", "3"];
const myZoo = [cat, bird, dog];
myZoo.forEach((animal) => animal.makeSound());
export {};
// class BaseAnimal {
//   name: string | undefined;
//   makeSound(): void {
//     console.log("Base animal sound...");
//   }
// }
// class Dog {
//   name: string | undefined;
//   makeSound(): void {
//     console.log("Dog is making sound...");
//   }
//   bark(): void {
//     console.log("Dog is barking...");
//   }
// }
// const dog = new Dog();
// // Mặc dù Dog không implements IAnimal
// // Nhưng nó vẫn vào được mảng IAnimal[] vì có makeSound()
// const arr: BaseAnimal[] = [dog];
// arr[0].makeSound(); // OK
