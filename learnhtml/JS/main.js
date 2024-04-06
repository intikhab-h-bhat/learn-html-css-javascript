function myFunction() {
  document.getElementById("para1").innerHTML = "Hello Javascript";
}
function addNumbers() {
  let x = 5;
  let y = 10;
  let z = x + y;
  document.getElementById("addnum").innerHTML = z;
}

class Car {
  constructor(name,year) {
    this.name=name;
    this.year=year;
  }
  age() {
    const date=new Date();
    return date.getFullYear() - this.year;
  }
  }
  const car1 = new Car("Ford",2014);
  document.getElementById("para3").innerHTML = car1.age();
