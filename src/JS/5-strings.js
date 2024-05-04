//string using ""
let name = "Ahmad";
//string using ''
let fname = "ahmad";
console.log(name, fname);

//Template string
let num1 = 2;
let num2 = 3;
let num3 = num1 + num2;
console.log(`${num1}  + ${num2} is ${num3}`);

//STRING METHODS

//get the length of the string
console.log(name.length);
//To upper case
console.log(fname.toUpperCase());

//string slicing
console.log(fname.slice(2, 4));
console.log(fname.slice(1));
// replace meyhod
console.log(fname.replace("a", "e"));
// string Concatination
let lname = "Intikhab";
console.log(fname.concat(" ", lname));

//Using loop to go through the string
for (let i = 0; i < fname.length; i++) {
  console.log(fname[i]);
}

for(let i in fname){
    console.log(fname[i])
}

// using includes
const sentence="The quick fox ran over a lazy dog";
const word='hello';
console.log(sentence.includes(word))
console.log(`The word "${word}"  ${sentence.includes(word)? "is" : "is not"} in the sentence`)