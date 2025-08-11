export {};

console.log("lab06");

// id: số nguyên (number)
// name: chuỗi (string)
// email: chuỗi (string)
// isPremium: true nếu học viên đăng ký gói cao cấp, false nếu thường
// contact: có thể là email (string) hoặc số điện thoại (number) → dùng union type

type TStudent = {
  id: number;
  name: string;
  email: string;
  isPremium: boolean;
  contact: string | number; //union type
};

// courseId: số nguyên (number)
// title: tên khóa học (string)
// price: giá gốc (number)
// students: danh sách học viên đã đăng ký → mảng object chứa học viên

type TCourse = {
  courseId: number;
  title: string;
  price: number;
  students: TStudent[];
};

const student1: TStudent = {
  id: 1,
  name: "eric",
  email: "eric@naver",
  isPremium: true,
  contact: "010-1234-5678",
};

const student2: TStudent = {
  id: 2,
  name: "john",
  email: "john@naver",
  isPremium: false,
  contact: 123456789,
};

const myCourse: TCourse = {
  courseId: 1,
  title: "typescript pro advanced",
  price: 10000,
  students: [],
};

const registerStudentToCourse = (student: TStudent, course: TCourse) => {
  course.students.push(student);
  //   return course;
};

// Viết hàm printCourseInfo(course)
// Chức năng:
// In ra tên khóa học và số học viên đã đăng ký.
// Nếu chưa có học viên → in "Chưa có học viên nào."
// Nếu có học viên → liệt kê tên từng học viên.

const printCourseInfo = (course: TCourse) => {
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
