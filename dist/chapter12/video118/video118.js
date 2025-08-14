console.log("video 118");
class Bird {
    makeSound() {
        console.log("Bird is making sound...:", this.name);
    }
    doFly() {
        console.log("Fly...");
    }
}
class Person {
}
class NhanVien {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class LapTrinhVien extends NhanVien {
    constructor(skill, id, name) {
        super(id, name);
        this.skill = skill;
    }
}
const nta = new LapTrinhVien("js", 1, "nta");
console.log("nta", JSON.stringify(nta));
const bird = new Bird();
bird.makeSound();
bird.doFly();
const nta1 = nta;
console.log("nta1", JSON.stringify(nta1));
export {};
