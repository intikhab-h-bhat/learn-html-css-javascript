// program to find the sum of n natural numbers
// For Loop
// let n = prompt("Enter the value of n");
// let sum = 0;
// n = Number.parseInt(n);
// for (let i = 0; i < n; i++) {
// sum += i + 1;
// console.log(sum);
// }
//alert(sum);

// For IN Loop used to get the key of object
let stuMarks = {
  abdullah: 75,
  Mohammad: 80,
  Zaid: 75,
};
for (let stu in stuMarks) {
  console.log(`${stu} marks obtained:`, stuMarks[stu]);
}

// For of Loop used to get the value of an object and is used in arrays
for (stu of "Ahmad") {
  console.log(stu);
}

// While and do while loop

let n = prompt("Enter the value of n");
let sum = 0;
let i = 0;
n = Number.parseInt(n);
while (i < n) {
  sum += i;
  i++;
}
console.log(sum);

//**********Practise examples
//Example to grt the marks of students

const marks = {
  Ahmad: 90,
  Sareena: 95,
  Azka: 65,
};

// simple for loop
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]
  );
}

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// For In LOOP
for (let key in marks) {
  console.log("Marks of " + key + " are " + marks[key]);
}

// print try again untill yhe user enters correct number

let cn = 5;
let num;

while (num != cn) {
  console.log("try again");
  num = prompt("Enter the number");
}
console.log("You enetered correct number");

