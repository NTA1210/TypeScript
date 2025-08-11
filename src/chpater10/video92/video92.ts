export {};
console.log("video 92");

const sayHi = (name: string) => {
  console.log("hi", name);
};

const sum = (a: number, b = 5): number => {
  return a + b;
};

const mySum = sum(2);
console.log(mySum);
sayHi("eric");
