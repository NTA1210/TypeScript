export {};
console.log("video 94");

const student1: {
  name: string;
  id: number;
  phone?: string;
} = {
  name: "eric1",
  id: 1,
};

const student2: {
  name: string;
  id: number;
  phone?: string;
} = {
  name: "eric1",
  id: 1,
  phone: "010-1234-5678",
};

// const person: {
//   name: string;
//   age: number;
//   address: string;
//   isStudent?: boolean;
// } = {
//   name: "eric",
//   age: 21,
//   address: "seoul",
// };

const person = {
  name: "eric",
  age: 21,
  address: "seoul",
  isStudent: true,
  phone: "010-1234-5678",
  id: 1,
};

const printInfo = (person: {
  name: string;
  age: number;
  address: string;
  isStudent?: boolean;
}) => {
  console.log(person.name);
  console.log(person.age);
  console.log(person.address);
  console.log(person.isStudent);
};

printInfo(person);
