"use strict";
class User {
    constructor(name, email, role) {
        this.name = name;
        this._email = email;
        this.role = role ?? "student";
    }
    get email() {
        return this._email;
    }
    set email(value) {
        if (RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value)) {
            this._email = value;
        }
        else {
            console.log("invalid email");
        }
    }
    getInfo() {
        console.log(`[GET - INFO] Name: ${this.name} , Email: ${this.email} , Role: ${this.role}`);
    }
}
class Teacher extends User {
    constructor(name, email, role) {
        super(name, email, role);
        this.courses = [];
    }
    addCourse(courseName) {
        this.courses.push(courseName);
    }
    printUserInfo() {
        console.log(`[Teacher] ${this.name} - Courses Taught: ${this.courses.join(",")}`);
    }
}
class Student extends User {
    constructor(name, email) {
        super(name, email);
        this.enrolledCourses = [];
    }
    enrollCourse(courseName) {
        this.enrolledCourses.push(courseName);
    }
    printUserInfo() {
        console.log(`[Student] ${this.name} - Enrolled  Courses: ${this.enrolledCourses.join(",")}`);
    }
}
function printUserInfo(user) {
    user.printUserInfo();
}
const hoidanit = new Student("hoidanit", "hoidanit@hoidanit");
hoidanit.email = "hoidanithoidanit";
hoidanit.enrollCourse("Typescript Pro");
const eric = new Teacher("Eric", "eric@hoidanit", "teacher");
eric.addCourse("React Pro");
// hoidanit.printUserInfo();
// eric.printUserInfo();
printUserInfo(hoidanit);
printUserInfo(eric);
