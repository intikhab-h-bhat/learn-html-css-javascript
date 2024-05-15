const random = Math.floor(Math.random() * 10);
console.log(random);

let guessNumber = prompt("Guess The Number");

while (guessNumber != random) {
  if (guessNumber < random) {
    guessNumber = prompt("Guess The Number again");
    console.log("guessNumber is less than the random nuumber");
  
  } else if (guessNumber > random) {
    guessNumber = prompt("Guess The Number again");
    console.log("guessNumber is greater than the random nuumber");
    
  }
}
if (guessNumber == random) {
  console.log("guessNumber is correct");
}
