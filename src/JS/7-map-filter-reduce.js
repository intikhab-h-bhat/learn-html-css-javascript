//Map Filter and Reduce

//1.Array  Map method (Map is used if you want to create anew array from the existing one)
let array1 = [24, 35, 45];

let a = array1.map((value,index,array) => {
  console.log(value,index,array);
  value = value + 2;
  return value;
});
console.log(a);
