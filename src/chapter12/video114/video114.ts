export {};
console.log("video 114");

class Person {
  name: string;
  age: number;

  //   Nhưng nếu bạn khai báo string | null, thì TypeScript hiểu là:
  // "Thuộc tính này phải được gán giá trị khi tạo object, trừ khi bạn gán null rõ ràng."
  // → Nếu không gán, mặc định nó là undefined, mà undefined không nằm trong kiểu string | null ⇒ lỗi.

  //constructor
  constructor();
  constructor(name: string, age: number);
  constructor(name?: string, age?: number) {
    this.name = name ?? "";
    this.age = age ?? 0;
  }
}

const person1 = new Person("nta", 21);
console.log("person1", person1.name);
