let input;
input = "n";
switch (input) {
  case 1:
  case "y":
  case "yes":
    document.write("Continue");
    break;
  case 0:
  case "n":
  case "no":
    document.write("end");
    break;
  default:
    document.write("Enter the correct value");
}

// Loops concept

let count = 0;
while (count < 10) {
  console.log("Hello");
 
  count++;
}
