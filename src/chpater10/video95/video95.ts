export {};

console.log("video 95");

type TStudent = {
  id: string;
  name: string;
  address: string;
  age: number;
};

const student1: TStudent = {
  id: "1",
  name: "eric",
  address: "seoul",
  age: 21,
};

const student2: TStudent = {
  id: "2",
  name: "eric2",
  address: "seoul",
  age: 22,
};

const printInfo = (st: TStudent) => {
  console.log(st.id);
  console.log(st.name);
  console.log(st.address);
  console.log(st.age);
};

printInfo(student1);
printInfo(student2);
