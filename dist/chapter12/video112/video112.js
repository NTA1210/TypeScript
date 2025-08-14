console.log("video 112");
//class: định nghĩa tổng quát, miêu tả chung chung
class Lion {
    //miêu tả hành vi
    sleep() {
        console.log("Lion is sleeping...:", this.name);
    }
}
//miêu tả cụ thể từng lion => object
//clone : new
const lion1 = new Lion(); // clone
lion1.color = "yellow";
lion1.name = "Simba";
lion1.sleep();
console.log("=============");
const lion2 = new Lion(); // clone
lion2.color = "black";
lion2.name = "Nala";
lion2.sleep();
export {};
