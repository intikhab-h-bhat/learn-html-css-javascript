//Declaring a varable
let name = "Intikhab Hussain Bhat";
document.write(name);

// let firstNAme = "Intikhab";
// let lastName = "Bhat";

let firstNAme = "Intikhab",
  lastName = "Bhat";
document.write(firstNAme + " " + lastName);

//Another type of variable
const PI = 3.14;
console.log(PI);
typeof PI;

//Arrays
let selectedColor = ["RED", "BLUE", "GREEN"];
console.log(selectedColor);

// Objects
const person = {
  name: "Abdullah",
  age: 15,
  dob: "04/12/2009",
}
console.log(person)
// person = 45 this gives error because person is constant variable
person.name="Ahmad"
person["friend"] = "Tabeen"
console.log(person)

//Expression and Operators
let a=50;
let b=30;
console.log(`${a} + ${b} = `, a + b)//Addition
console.log(`${a} - ${b} = `, a - b)//Subtraction
console.log(`${a} / ${b} = `, a / b)//Division
console.log(`${a} % ${b} = `, a % b)//Modulas
console.log(`${a} * ${b} = `, a * b)//multplication
console.log(`${a} ** ${b} = `, a ** b)//Exponential


