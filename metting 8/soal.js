// no 1
class Vehicle {
    constructor(brand) {
      this.brand = brand;
    }
  
    start() {
      return "Vahicle is starting";
    }
  }
class Car extends Vehicle{
    constructor(brand,model) {
      super(brand)
      this.model =model
    }
  
    start() {
        return `${this.brand} is starting`;
    }
  }
  var kendaraan =new Car("BMW",);
  console.log(kendaraan.start());
  
// no 2

class Shape {

  draw() {
    return "Drawing shape";
  }
}
class Rectangle extends Shape{

  draw() {
      return `Drawing rectangle `;
  }
}
var bentuk = new Rectangle()
console.log(bentuk.draw());

// no 3
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `HI, My name is ${this.name}`;
  }
}
class Employe extends Person {
  constructor(name,position) {
   super(name)
   this.position =position;
  }

  introduce() {
    return `${this.name} and I am an ${this.position}`;
  }
}
class Manager extends Employe {
  constructor(name,position) {
    super(name,position)
  }
  introduce() {
    return `${this.name} and I am an ${this.position} and I manage a team `;
  }
}

var orang = new Manager('Fadgham','school')
console.log(orang.introduce());