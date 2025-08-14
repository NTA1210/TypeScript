export {};
console.log("video 119");

//trong typescript dùng structual typing (kiểu cấu trúc), chứ ko phải nominal typing như Java
//Nói dễ hiểu:
//-- TS ko quan tâm tên class hay nó extends/implements class/interface gì.
//-- TS chỉ quan tâm "hình dạng" (shape) của đối tượng đó có khớp với class/interface hay ko
//==> Dễ gây “trùng hợp ngẫu nhiên” (two types giống nhau thì tự coi là tương thích)

interface IAnimal {
  makeSound(): void;
}

class Cat implements IAnimal {
  makeSound(): void {
    console.log("Cat is making sound...");
  }
}

class Bird implements IAnimal {
  makeSound(): void {
    console.log("Bird is making sound...");
  }
}

class Dog {
  goo(): void {
    console.log("Dog is making sound...");
  }
  makeSound(): void {
    console.log("Dog is making sound...");
  }
}

const cat = new Cat();
const bird = new Bird();
const dog = new Dog();
cat.makeSound();
bird.makeSound();
dog.makeSound();

const myArray: number[] = [1, 2, 3];
const myArray1: string[] = ["1", "2", "3"];

const myZoo: IAnimal[] = [cat, bird, dog];

myZoo.forEach((animal) => animal.makeSound());

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
