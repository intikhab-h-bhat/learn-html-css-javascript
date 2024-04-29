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
};
console.log(person);
// person = 45 this gives error because person is constant variable
person.name = "Ahmad";
person["friend"] = "Tabeen";
console.log(person);

//Expression and Operators
let a = 50;
let b = 30;
console.log(`${a} + ${b} = `, a + b); //Addition
console.log(`${a} - ${b} = `, a - b); //Subtraction
console.log(`${a} / ${b} = `, a / b); //Division
console.log(`${a} % ${b} = `, a % b); //Modulas
console.log(`${a} * ${b} = `, a * b); //multplication
console.log(`${a} ** ${b} = `, a ** b); //Exponential

// Increament and Decreament operator
console.log(a++, "increamented by 1");
console.log(a);

console.log(++a);

console.log(a--, "Decreament by 1");
console.log(a);

console.log(--a);

// Assignment opertors
let c = 8;
console.log(c);
c += 5;
console.log(c);

c -= 2;

// Comparison opertors
let comp1=6
let comp2="6"
console.log(`${comp1} equals ${comp2}`,comp1 == comp2 )
console.log(`${comp1} not equals ${comp2}`,comp1 != comp2 )
console.log(`${comp1} === ${comp2}`,comp1 === comp2 )
console.log(`${comp1} !== ${comp2}`,comp1 !== comp2 )

// logical operators
let num1=5
let num2=6
let num3=5
console.log(num1==num2 && num1==num3)
console.log(num1==num2 || num1==num3)