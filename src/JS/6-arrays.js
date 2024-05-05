// Arrays
let marks = [23, 45, 67, 67, 34, 56];
marks[7] = 45; //adding new element in array
marks[3] = 99; //changing the value
for (let i in marks) {
  console.log(marks[i]);
}

//convert array to string
let b = marks.toString();
console.log(b);
//using join
let c = marks.join("_");
console.log(c);
//pop method
marks.pop(); //removes the element from the end
console.log(marks);
//push method
marks.push(45); //add the alemet at the end
console.log(marks);
//Shift and Unshift method
marks.shift(); //removes first element
console.log(marks);
marks.unshift(123); //adds element at the begning
console.log(marks);
//deelte element in array
delete marks[0]; //using delete ther is no change in array length
console.log(marks, marks.length);
//concat arrays
let names = ["sareena", "Ahmad", "Mohammad"];
let age = [12, 11, 14];
let stumarks = [229, 75, 335, 123, 85, 72, 65];
let numage = names.concat(age, stumarks);
console.log(numage);

//SORT method  sorts in alphabitaical order
names.sort(); //using sort origional array is changed
stumarks.sort();
console.log(names, stumarks);

// using sort and compare function
// (compare funcyion is used to sort in assending or descending order)
let compare = (a, b) => {
  return b - a;
};
stumarks.sort(compare);
console.log(stumarks);

//Reverse method
stumarks.reverse();
console.log(stumarks);

// splice and slice
//splice is used to add new elements in an array
//slice is used to create anew array
let deletedelem = stumarks.splice(2, 3, 500, 600, 700, 800);
console.log(stumarks, deletedelem);
let childarray = stumarks.slice(2);
console.log(childarray);
let childarray2nd = stumarks.slice(2, 6);
console.log(childarray2nd);

//foreach loop in js
let items = [2, 3, 4, 5, 6];
items.forEach((a) => {
  console.log(a * a);
});
//Array.from
//used to create array from string or html colection
let stuname = "Kashif";
let arr = Array.from(stuname);
console.log(arr);
