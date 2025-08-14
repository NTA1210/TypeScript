console.log("video 117");
class Parent {
    //methods
    shareAHouse() {
        console.log("Parent is sharing a house...");
    }
}
class Child extends Parent {
    constructor() {
        super();
        this.name = "nta";
    }
}
const nta = new Child();
nta.shareAHouse();
console.log("nta", nta.gold);
export {};
