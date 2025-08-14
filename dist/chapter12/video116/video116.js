console.log("video 116");
class Cat {
    constructor(name, age) {
        this._id = 1;
        this._color = "white";
        this.name = name;
        this.age_ = age;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    //setter
    set age(value) {
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
export {};
