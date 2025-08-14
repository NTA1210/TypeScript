type TRole = "student" | "teacher";

abstract class User {
  name: string;
  private _email: string;
  protected role: TRole;

  constructor(name: string, email: string, role?: TRole) {
    this.name = name;
    this._email = email;
    this.role = role ?? "student";
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    if (
      RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(value)
    ) {
      this._email = value;
    } else {
      console.log("invalid email");
    }
  }

  getInfo(): void {
    console.log(
      `[GET - INFO] Name: ${this.name} , Email: ${this.email} , Role: ${this.role}`
    );
  }

  abstract printUserInfo(): void;
}

class Teacher extends User {
  courses: string[];

  constructor(name: string, email: string, role: TRole) {
    super(name, email, role);
    this.courses = [];
  }

  addCourse(courseName: string): void {
    this.courses.push(courseName);
  }

  printUserInfo(): void {
    console.log(
      `[Teacher] ${this.name} - Courses Taught: ${this.courses.join(",")}`
    );
  }
}

class Student extends User {
  enrolledCourses: string[];

  constructor(name: string, email: string) {
    super(name, email);
    this.enrolledCourses = [];
  }

  enrollCourse(courseName: string): void {
    this.enrolledCourses.push(courseName);
  }

  printUserInfo(): void {
    console.log(
      `[Student] ${this.name} - Enrolled  Courses: ${this.enrolledCourses.join(
        ","
      )}`
    );
  }
}

function printUserInfo(user: User): void {
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
