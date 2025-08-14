export {};
console.log("video 116");

class Cat {
  public name: string;
  private age_: number;
  private _id: number = 1;
  private _color: string = "white";

  constructor(name: string, age: number) {
    this.name = name;
    this.age_ = age;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get color(): string {
    return this._color;
  }

  public set color(color: string) {
    this._color = color;
  }

  //setter
  set age(value: number) {
    this.age_ = value;
  }

  //getter

  get age() {
    return this.age_;
  }

  makeSound() {
    console.log("Cat is making sound...:", this.name);
  }
}

const myCat = new Cat("cat", 1);
console.log("myCat", myCat.age);
myCat.age = 3;
console.log("myCat", myCat.age);
