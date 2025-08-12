export {};
console.log("video 103");

interface IStudent {
  id: number;
  name: string;
  address?: string; //optional
  readonly language: string;
  sayHi: () => void;
}

const student: IStudent = {
  id: 1,
  name: "eric",
  language: "typescript",
  sayHi: () => console.log("hi"),
};

const student1: IStudent = {
  id: 2,
  name: "eric",
  address: "seoul",
  language: "Java",
  sayHi: () => console.log("hello"),
};

console.log(student.id);

//=====================

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "dog",
  breed: "pug",
};
