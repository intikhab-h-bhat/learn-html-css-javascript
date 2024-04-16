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

let count = 1;
while (count < 10) {
  if(count % 2 ==0){
    console.log(`${count}` + "is even number")
  }
  else
  {
    console.log(`${count}` + "is odd number")
  }

 
  count++;
}
