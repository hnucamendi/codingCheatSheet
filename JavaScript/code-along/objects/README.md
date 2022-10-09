# Objects

Objects in JavaScript hold a collection of properties, we define our properties in objects in `key pair` values. The key is the identifier, and the value is the property value. We can add primitive variables, functions, or other objects as valid properties. When we define a function inside of a method, we call that a Method, instead of a Function.

## Defining an Object

There are two ways that we can instantiate an object

```JavaScript
const car = new Object() // using the 'new' keyword
const car = {...} // using {} curly brackets
```

When using the `new` keyword we can still attach properties to the object like so:

```JavaScript
const car = new Object();
car.carName = "fun car";
// Anonymous function
car.someMethod = function () {
  return "Hello World";
};
// Named Function
car.someOtherMethod = function someOtherMethod() {
  return "Hello Earth";
};

console.log(car);
// Prints the object below
// {
//   carName: 'fun car',
//   someMethod: [Function (anonymous)],
//   someOtherMethod: [Function: someOtherMethod]
// }
```

We can define the same object by using {} curly brackets to initialize the object like so:

```JavaScript
const car = {
  carName: "fun car",
  someMethod: function () {
    return "Hello World";
  },
  someOtherMethod: function () {
    return "Hello Earth";
  },
};

console.log(car);
// Prints the object below
// {
//   carName: 'fun car',
//   someMethod: [Function: someMethod],
//   someOtherMethod: [Function: someOtherMethod]
// }
```

We can think of objects as a way to describe items, in a list of values, just like if we made a list of something. For example, a car would have a color, make, model, and some other properties, we can define those using an object

```JavaScript
const car = {
  color: "red",
  make: "Honda",
  model: "Civic",
};
```

Once we define an object we can reference the items inside the object

```JavaScript
const car = {
  color: "red",
  make: "Honda",
  model: "Civic",
};

console.log(car.color); // Returns "red"
console.log(car["model"]); // Returns "Civic"
```

## What can Objects hold?

Objects in JavaScript can hold all types of values, even other objects. Below I made a car object with multiple methods, variable types, and objects. Take some time to read through it and understand what is going on, there is some syntax that has not been covered.

```JavaScript
const car = {
  carName: "fast nd furious",
  color: "red",
  make: "Honda",
  model: "Civic",
  miles: 0,
  distanceToWork: 0,
  gasTank: 100,
  musicInCar: ["Royalty free playlist"],
  trashUnderSeats: {
    leftSeat: ["gum", "stickers"],
    rightSeat: ["winter glove", "cheese"],
  },
  addMusic: function (music) {
    this.musicInCar.push(music);
  },
  getMusic: function () {
    return this.musicInCar;
  },
  setDistance: function (value) {
    this.distanceToWork = value;
  },
  getDistance: function () {
    return this.distanceToWork;
  },
  driveToWork: function () {
    this.gasTank -= this.distanceToWork;
    return `Drove ${this.distanceToWork} miles, and now ${this.carName} has ${
      this.miles + this.distanceToWork
    } miles`;
  },
  canIGetToWork: function () {
    if (this.gasTank > this.distanceToWork) return "Yes, you can drive to work";
    return "No, you can't drive to work";
  },
  getGasTank: function () {
    return this.gasTank;
  },
};

console.log(car.getGasTank()); // Returns 100
console.log(car.getDistance()); // Returns 0
car.setDistance(12);
console.log(car.getDistance()); // Returns 12
console.log(car.driveToWork()); // Returns 'Drove 12 miles, and now fast nd furious has 12 miles'
console.log(car.canIGetToWork()); // Returns 'Yes, you can drive to work'
console.log(car.getMusic()); // Returns [ 'Royalty free playlist' ]
car.addMusic("Birthday Song");
console.log(car.getMusic()); // Returns [ 'Royalty free playlist', 'Birthday Song' ]
console.log(car.color); // Returns 'red'
console.log(car["model"]); // Returns 'Civic'
console.log(car.getGasTank()); // Returns 88
```

Quite an extensive example, hopefully, you took some time to fully go over the code and understand it, a quick note on objects though. Imagine if anytime we wanted to make a new car we would have to write <b>EVERY</b> `method`, `variable`, `object`, `array`, and anything else that your car might have. It would be impossible to make enough cars for the whole world without making mistakes. That is why we have classes! Spoiler alert Classes are the blueprints to create objects, and there is a section that describes all about how classes work [Here](#classes).

## Object Destructuring

Let's use this pretty big object as an example, imagine if we wanted to print the `color` to the `console` but only the color, and we have no need at all for the rest of the object. This may not be realistic in this example but situations like these are common. We can use Destructuring to break apart an object and get ONLY the property or properties that we need.

```JavaScript
const car = {
  carName: "fast nd furious",
  color: "red",
  make: "Honda",
  model: "Civic",
  miles: 0,
  distanceToWork: 0,
  gasTank: 100,
  musicInCar: ["Royalty free playlist"],
  trashUnderSeats: {
    leftSeat: ["gum", "stickers"],
    rightSeat: ["winter glove", "cheese"],
  },
  addMusic: function (music) {
    this.musicInCar.push(music);
  },
  getMusic: function () {
    return this.musicInCar;
  },
  setDistance: function (value) {
    this.distanceToWork = value;
  },
  getDistance: function () {
    return this.distanceToWork;
  },
  driveToWork: function () {
    this.gasTank -= this.distanceToWork;
    return `Drove ${this.distanceToWork} miles, and now ${this.carName} has ${
      this.miles + this.distanceToWork
    } miles`;
  },
  canIGetToWork: function () {
    if (this.gasTank > this.distanceToWork) return "Yes, you can drive to work";
    return "No, you can't drive to work";
  },
  getGasTank: function () {
    return this.gasTank;
  },
};

const { color } = car // Returns "red"
```

The way we read this is:
`initialize a color variable, get the value of color from the car object, and put it in this new color variable`. For this to work the `color` variable must be a variable that exists in the object

this is the syntax that we call destructuring, it has the same functionality as this syntax:

```JavaScript
const color = car.color
```

Here is another example, in this example, we rename the variables after destructuring them

```JavaScript
const testObj = {
  date: "2001-06-02",
  data: {
    name: "John",
    age: 32,
  },
};

const { date: d } = testObj;
const { data: info } = testObj;

console.log(d); // Returns "2001-06-02"
console.log(info); // Returns { name: "John", age: 32 }
console.log(info.name); // Returns "John"
console.log(info.age); // Returns 32
```
