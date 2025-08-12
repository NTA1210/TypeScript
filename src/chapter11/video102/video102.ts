export {};

console.log("video 102");

type TUsername = string | number; // union type

type TStudent = {
  id: number;
  name: string;
};

type TCoder = {
  address: string;
  language: string;
};

type TProgrammer = TStudent & TCoder;

let username: TUsername = "eric";
username = 123;

let programmer: TProgrammer = {
  id: 1,
  name: "eric",
  address: "seoul",
  language: "typescript",
};

console.log(programmer.id);
