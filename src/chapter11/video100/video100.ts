export {};

console.log("video 100");

type TRole = string | number;
type TSuperRole = "USER" | "ADMIN" | "SUPERADMIN";

const user: TRole = "user";
const admin: TRole = 1;

const superAdmin: TSuperRole = "ADMIN";

enum RoleEnum {
  USER = "USER", //0
  ADMIN = "ADMIN", //1
  SUPERADMIN = "SUPERADMIN", //2
}

const myRole1: RoleEnum = RoleEnum.ADMIN;
const myRole2: RoleEnum = RoleEnum.USER;

console.log(myRole1);
console.log(myRole2);
