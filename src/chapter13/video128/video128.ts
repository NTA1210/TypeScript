export {};

console.log("video 128");

class NumberBox {
  content: number;

  constructor(content: number) {
    this.content = content;
  }
}

class MagicBox<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }
}

const a = new MagicBox<number>(1);
const b = new MagicBox<string>("hello");
