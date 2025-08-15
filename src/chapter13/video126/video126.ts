export {};

console.log("video 126");

function merge<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const merged = merge<string, number>("abc", 123);
console.log(merged);
