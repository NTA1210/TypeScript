console.log("video 113");
class Student {
    constructor() {
        //Attributes
        this.name = "nta";
    }
    //Methods
    sleep() {
        console.log("Student is sleeping...:", this.name);
    }
}
const student1 = new Student();
student1.id = 1;
student1.sleep();
console.log("==============");
const student2 = new Student();
student2.name = "john";
student2.id = 2;
student2.sleep();
export {};
