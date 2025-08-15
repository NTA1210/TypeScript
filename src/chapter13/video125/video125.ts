export {};
console.log("video 125");

function testNumber(value: number): number {
  return value;
}

function testString(value: string): string {
  return value;
}

function testGeneric<T>(value: T): T {
  return value;
}

const a = testGeneric<string>("abc");
const b = testGeneric<number>(123);

console.log(a);
console.log(b);

function getFirstElementInArray<T>(arr: T[]) {
  return arr[0];
}

const getFirstElementInArray2 = <T>(arr: T[]) => {
  return arr[0];
};
const c = getFirstElementInArray<string>(["a", "b", "c"]);
const d = getFirstElementInArray<number>([1, 2, 3]);
console.log(c);
console.log(d);
