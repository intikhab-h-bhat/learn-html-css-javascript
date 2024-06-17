// console.log(window)
// document.body.style.background = "red";
let age = prompt("Enter age");
age=Number.parseInt(age);

if (age < 0){

console.error("Please enter the valid value");
}
else {

const CanDrive=(age)=>{
    age>=20?true:false

}

if (CanDrive(age)){

    alert("You are eligble for driving");
}
else {
    alert("You are not eligble for driving");
}
}
