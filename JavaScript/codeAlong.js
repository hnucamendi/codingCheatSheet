class Car {
  constructor(color, make, model) {
    this.color = color;
    this.make = make;
    this.model = model;
  }
  carInfo() {
    console.log(this.color + " " + this.make + " " + this.model);
  }
}

const a = new Car("Black", "Honda", "Civic");
a.carInfo();
