export {};
console.log("video 131");

function printValue<T = string>(value: T) {
  return value;
}

const a1 = printValue("abc");
const b1 = printValue(123);

interface ITest<T = string> {
  data: T;
}

const a: ITest = {
  data: "hello",
};
