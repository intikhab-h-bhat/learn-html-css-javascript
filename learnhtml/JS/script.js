//terinary operator
let y = 0;
let isactive = y == 0 ? "login" : "logout"
document.write(`please  ${isactive}`)


//arrays in js
const car = ["Maruti", "Ford", "Espresso", "Ambasdor"];
for (i in car) {
  console.log(car[i]);
}

// javascript template string
let x = "Intikhab";

console.log(`hello ${x}`);

//javascript if else condition

let age = 14;
hasvotercard = false;
if (age >= 14 && hasvotercard == true) {
  console.log("you are eligible for voting");
} else if (age >= 14 && hasvotercard == false) {
  console.log("get voter card");
} else {
  console.log("You are not eligible");
}

// let isLoggedin = 0;

// if (isLoggedin == 1) {
//   document.write("Login");
// } else {
//   document.write("Logout");
// }
