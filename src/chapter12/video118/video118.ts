export {};
console.log("video 118");

interface IAnimal {
  makeSound(): void;
}

interface IFlyable {
  doFly(): void;
}

class Bird implements IAnimal, IFlyable {
  name: string | undefined;

  makeSound() {
    console.log("Bird is making sound...:", this.name);
  }
  doFly(): void {
    console.log("Fly...");
  }
}

class Person {
  gender: string | undefined;
}

class NhanVien {
  id: number | undefined;
  name: string | undefined;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class LapTrinhVien extends NhanVien {
  skill: string | undefined;

  constructor(skill: string, id: number, name: string) {
    super(id, name);
    this.skill = skill;
  }
}

const nta = new LapTrinhVien("js", 1, "nta");
console.log("nta", JSON.stringify(nta));

const bird = new Bird();
bird.makeSound();
bird.doFly();

const nta1: NhanVien = nta;
console.log("nta1", JSON.stringify(nta1));
