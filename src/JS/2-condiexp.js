// Conditional expression
//let age = prompt("what is your age?");
// age = Number.parseInt(age);
// if (age > 16) {
//   alert("You are elligble for voting");
// } else {
//   alert("you are not elligble");
// }


// Switch Statement
// switch (age) {
//   case age > 16:
//     alert("You are elligble for voting");

//     break;
//   case age <= 16:
//     alert("you are not elligble");
//     break;
//   default:
//     alert("Nothing");
//     break;
// }

// Check whether the nunmber is divisible by both 2 and 3
let divnum = prompt("Enter the number");
divnum = Number.parseInt(divnum);
if (divnum % 2 == 0 && divnum % 3 == 0) {
  alert(`${divnum} is divisible by both 2 and 3`);
} else {
    alert(`${divnum} is not divisible by both 2 and 3`)
}
