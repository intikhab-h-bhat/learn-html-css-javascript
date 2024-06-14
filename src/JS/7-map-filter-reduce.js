//Map Filter and Reduce

//1.Array  Map method (Map is used if you want to create anew array from the existing one)
let array1 = [24, 35, 45];
let a = array1.map((value, index, array) => {
  //   console.log(value, index, array);
  value = value + 3;
  return value;
});
// console.log(a);

// Filter Method
let arrayFilter = [23, 45, 10, 20, 0, 3, 50];

let a2 = arrayFilter.filter((value) => {
  return value < 20;
});
// console.log(a2);

//Reduce Method

let arrayReduce = [2, 3, 4, 5, 6, 7];
let newArray = arrayReduce.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(newArray);
