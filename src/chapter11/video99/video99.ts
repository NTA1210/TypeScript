export {};
console.log("video 99");

type TName = string | null;

let name: TName = null;
let name2: undefined = undefined;

const printName = (myName: TName) => {
  // if(myName){
  //     myName.toUpperCase();
  // }
  myName!.toLowerCase();
  myName?.toUpperCase();
  console.log(name);
};
