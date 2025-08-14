export {};
console.log("video 117");

class Parent {
  //fields
  gold: number | undefined;
  money: number | undefined;

  //methods
  shareAHouse() {
    console.log("Parent is sharing a house...");
  }
}

class Child extends Parent {
  //fields
  name: string;

  constructor() {
    super();
    this.name = "nta";
  }

  //methods
  //   override shareAHouse() {
  //     console.log("Child is sharing a house...");
  //   }
}

const nta = new Child();
nta.shareAHouse();
console.log("nta", nta.gold);
