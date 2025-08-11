export {};
console.log("video 93");

let username: string | number = "eric";
username = 23;

console.log(username);

const printUsername = (username: string | number) => {
  if (typeof username === "string") {
    console.log(username.toUpperCase());
    return;
  }
  console.log(username);
};

printUsername("eric");
printUsername(23);
