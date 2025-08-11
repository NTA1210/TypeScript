"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 95");
const student1 = {
    id: "1",
    name: "eric",
    address: "seoul",
    age: 21,
};
const student2 = {
    id: "2",
    name: "eric2",
    address: "seoul",
    age: 22,
};
const printInfo = (st) => {
    console.log(st.id);
    console.log(st.name);
    console.log(st.address);
    console.log(st.age);
};
printInfo(student1);
printInfo(student2);
