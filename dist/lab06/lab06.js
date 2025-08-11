"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("lab06");
const student1 = {
    id: 1,
    name: "eric",
    email: "eric@naver",
    isPremium: true,
    contact: "010-1234-5678",
};
const student2 = {
    id: 2,
    name: "john",
    email: "john@naver",
    isPremium: false,
    contact: 123456789,
};
const myCourse = {
    courseId: 1,
    title: "typescript pro advanced",
    price: 10000,
    students: [],
};
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
    //   return course;
};
// Viết hàm printCourseInfo(course)
// Chức năng:
// In ra tên khóa học và số học viên đã đăng ký.
// Nếu chưa có học viên → in "Chưa có học viên nào."
// Nếu có học viên → liệt kê tên từng học viên.
const printCourseInfo = (course) => {
    console.log(`Ten khoa hoc: ${course.title}`);
    console.log(`So hoc vien: ${course.students.length}`);
    if (course.students.length === 0) {
        console.log("Chua co hoc vien nao");
        return;
    }
    const studentList = course.students.map((student) => student.name);
    console.log("liet ke hoc vien", studentList.join(", "));
};
registerStudentToCourse(student1, myCourse);
registerStudentToCourse(student2, myCourse);
printCourseInfo(myCourse);
