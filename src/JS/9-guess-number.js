const random = Math.floor(Math.random() * 10);
console.log(random);
let chances = 0;
let guessNumber = prompt("Guess The Number");

while (guessNumber != random) {
  if (guessNumber < random) {
    chances = chances + 1;
    guessNumber = prompt("Guess The Number again");
   
    console.log("guessNumber is less than the random nuumber");
  } else if (guessNumber > random) {
    chances = chances + 1;
    guessNumber = prompt("Guess The Number again");
    
    console.log("guessNumber is greater than the random nuumber");
  }
}
if (guessNumber == random) {
  console.log("guessNumber is correct");
  console.log(`No of chanse:  ${chances}`);
}
