# Welcome to JavaScript

JavaScript is a lightweight, interpreted, multi-paradigm language, and features first class functions. It is a single threaded language and is dynamicaly typed.

# Table of Contents

- [Welcome to JavaScript](#welcome-to-javascript)
- [Table of Contents](#table-of-contents)
- [Getting Started | Hello World Program](#getting-started--hello-world-program)
  - [What happens if we print the console object to the console?](#what-happens-if-we-print-the-console-object-to-the-console)
- [JavaScript Best Practices](#javascript-best-practices)
  - [JavaScript Typing](#javascript-typing)
  - [Naming Variables](#naming-variables)
  - [Naming Classes](#naming-classes)
  - [Other Naming Rules](#other-naming-rules)
- [Objects](#objects)
- [Arrays](#arrays)
- [Classes](#classes)
  - [Class Definition](#class-definition)
  - [Class Expression](#class-expression)
  - [Using a Constructor](#using-a-constructor)
  - [Writing out a Car Class](#writing-out-a-car-class)
  - [Extending Classes / Inheritance](#extending-classes--inheritance)
- [Before ES6](#before-es6)
  - [Initializing Variables](#initializing-variables)
  - [The Var Keyword and Scope](#the-var-keyword-and-scope)
  - [Equality Operators](#equality-operators)
  - [Classes](#classes-1)
  - [Inheritance with Classes](#inheritance-with-classes)
- [History | FAQ](#history--faq)
  - [Are Java and JavaScript Related?](#are-java-and-javascript-related)
  - [What is EcmaScript](#what-is-ecmascript)
  - [Why is ES6 so special?](#why-is-es6-so-special)
- [Vocabulary](#vocabulary)
- [Code Along](#code-along)

# Getting Started | Hello World Program

```JavaScript
console.log("Hello World");
```

JavaScript does not require any boiler plate, or any previous configuration to get started. In our `Hello World` program we use `console.log()` to print the something to the console, in this case a string that says `"Hello World"`. You may be asking, what is the console? and why `console.log`? `console` is an object with a lot of methods(Functions) that can do many things to/on the console object; one of them being the `log` method which prints and displays something to the console.

## What happens if we print the console object to the console?

Short answer: we get to see all the possible methods we can call on the console. For the long answer we can go ahead and actually do just that. Here is the result from this code: `console.log(console)`:

```JavaScript
Object [console] { // Here we can see that indeed console is an object
  log: [Function: log], // Here we see that log method that we have been using. And we can see that indeed it is a method(function)
  warn: [Function: warn],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  debug: [Function: debug],
  info: [Function: info],
  dirxml: [Function: dirxml],
  error: [Function: error],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context]
}
```

Hopefully this gives some insight to how JavaScript works, we can see that there are pre-defined objects that we can call methods(functions) upon to execute tasks; This makes writing code a lot easier since we dont have to define all of this functionality ourselves. Now Ill summarize of the important things we covered in this first block of code:

- Object
  - Some languages have this same concept in different variations, its a group of code or data that is paired/organized in `key value pairs` `{age: 44}`
- Method(Function)
  - A method is the name for a function when it is part of an object, though it is the same as a function in practice, we give it a different name to differentiate
- Boiler plate Code
  - A block of code that is required for the compiler to understand how to read the code. JavaScript does not have boiler plate code

# JavaScript Best Practices

## JavaScript Typing

In coding languages we use primitive types which are immutable; meaning they are not able to be changed, and objects which are not considered primitive.

We use primitive types and data structures together to build some complex logic.

Primitive Types:

```JavaScript
const a = "String" // String
const b = 123 // Number
const c = 12.23 // Also a Number type
const d = true // Boolean
const e = false // other Boolean value
const f = null // Null
const g = undefined // Undefined
```

## Naming Variables

In JavaScript we use `Camel Casing` for most variable naming:

1. No spaces
2. The first word is lowercase and each word following that begins with an uppercase letter

```JavaScript
const fullName = "Jane Doe";
const age = 31;
const isTrue = true;
const generatePassword = function(){...};
const anotherFunction = () => {...};
function oneMoreFunction(){...};
```

## Naming Classes

Other than camel casing we use `Pascal Casing` specifically for classes:

1. No spaces
2. Every word in the variable name starts with a capital letter

```JavaScript
class Car {...}
class AnotherClass {...}
class OneMoreClass {...}
class LongerClassName {...}
```

## Other Naming Rules

Here are some general rules to follow when creating variable names in JavaScript. We dont have to follow these rules, but each language has its own set of agreed upon standards to make it easier for JavaScript developers to understand eachothers code.

1. Keep names short
2. Write descriptive names
3. When initialzing functions its good practice to write a special kind of comment that describes the function. Below are two examples.

this special comment is helpful because it allows developers to read at a glace what a function is for, and if it has any parameters, what they represent.

```JavaScript
/**
 * Prints the string "Hello World" to the console
 */
function helloWorld() {
  console.log("Hello World");
}
```

```JavaScript
/**
 * @Property {Function} helloUser Prints a welcome string
 * @Param {string} name Your name
 * @returns {void}
 */
function helloUser(name) {
  console.log("my name is " + name);
}
```

When we describe a function with this special comment we can hover over the function and get a code snippet like the image below:
![image](img/functionDescription.png)
allows us to at a glance understand what a function is for, this comes in very handy with more complex functions, or when learning to use a new framework

# Objects

Objects can hold any type of data, primitive types and other objects, as long as the data is wrapped in curly brackets and has a key attached to its value.

```JavaScript
const a = {// Objects are wrapped in a block of curly brackets
  item1: "Hello",
  item2: 12,
  item3: {
    name: "Bob",
  },
}; // End of object
```

```JavaScript
// Key: value
const a = {
  item1: "Hello"
}
```

We can then get the value of an object using . and []

```JavaScript
const a = {// Objects are wrapped in a block of curly brackets
  item1: "Hello",
  item2: 12,
  item3: {
    name: "Bob",
  },
}; // End of object

console.log(a.item3.name);
console.log(a["item1"]);
console.log(a.item2);
```

# Arrays

```JavaScript
const a = [] // Empty array
```

Arrays are not a special type, they are technically objects, so they have a lot of methods attached to them for us to use:

```JavaScript
a.push("Hello") // adds the string "Hello" to the end of the array
a.unshift("World") // adds the string "World" to the end of the array

console.log(a) // Returns => ["World", "Hello"]
```

We can also use [] to get individual items in an array

```JavaScript
console.log(a[0]) // Returns "World"
console.log([1]) // Returns "Hello"
```

This is because arrays start their count at 0, so the first item is at index 0 => a[0]
So for an array of length 2, the last item is at index 1 => array_length - 1 = last index

```JavaScript
console.log(a[a.length - 1]) // Returns "Hello" => last item in the array
```

# Classes

Classes are our blueprint for creating objects.

## Class Definition

Common / Classic way of Defining a Class

```JavaScript
class ExampleClass {}
```

## Class Expression

Another way that we can define a Class

```JavaScript
// unnamed
const UnnamedSquare = class {};
console.log(UnnamedSquare.name); // Returns UnnamedSquare

// named
const Square = class NamedSquare {};
console.log(Square.name); // Returns NamedSquare
```

## Using a Constructor

Defining the class is only the eqivilent of getting out blank blueprint paper, but how do we begin to write out and define the objects our class will create? One thing we can use to define the values we expect upon creation of our objects (what parts are needed when we create each object) to do this we use a constructor

```JavaScript
class ExampleClass {
  constructor(name, age){ // Constructors dont always have to have any parameters
    this.name = name;
    this.age = age;
  }
}
```

In this example we:

1. Define our class
2. write out our constructor `constructor(){}`
3. place two parameters in our constructor `constructor(name, age){}`
4. then we use the `this` keyword to create a variable local to the class scope `this.name` = to the argument passed in by the user `name`

An example of us using this and creating and instance(object) based on this blueprint(class) would be like below:

```JavaScript
class ExampleClass {
  constructor(name, age){ // Constructors dont always have to have any parameters
    this.name = name;
    this.age = age;
  }
}

const test = new ExampleClass("John", 34);

// Now just like an object we can print variables from our instance using the . operator
console.log(test.name) // Prints "John"
console.log(test.age) // Prints 34
```

## Writing out a Car Class

our car will take in 3 arguments, `color`, `make`, and `model`. Then we will have a method that prints those values out to the console.

```JavaScript
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

const myCar = new Car("Black", "Honda", "Civic");
myCar.carInfo();
```

Take a second to read over the code and understand how it works, in the next sub section we will extend this class and discuss the `super` method

## Extending Classes / Inheritance

Building off of our previous Car class we will now create a `Mechanic` class that inherits all the values from the `Car` class. We want to do this to allow our mechanic to see what cars are in the shop, and by splitting up our code into two classes like this, we use cleaner coding practices.

```JavaScript
// Car class
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

// Mechanic class that extends from the Car class
class Mechanic extends Car {
  // The extend keyword allows Mechanic to inherit the functions from Car
  constructor(color, make, model, firstName, lastName, rank, cars) {
    super(color, make, model); // super allows us to inherit vairalbes from the Car class
    this.color = color;
    this.make = make;
    this.model = model;
    this.firstName = firstName;
    this.lastName = lastName;
    this.rank = rank;
    this.cars = cars;
  }
  addCar(car) {
    this.cars.push(car);
  }

  listCars() {
    return this.cars;
  }

  whoAmI() {
    return `${this.firstName} ${this.lastName}, I am a ${this.rank}, these are my cars ${this.cars}`;
  }
}

// Creating two cars
const myCar = new Car("Black", "Honda", "Civic");
const newCar = new Car("Yellow", "Honda", "Pilot");

// Creating a mechanic object
const john = new Mechanic( // Creates an object from the Mechanic class
  "Black",
  "Honda",
  "Civic",
  "John",
  "Doe",
  "Senior Mechanic",
  [myCar]
);

// Calling the Car object
myCar.carInfo(); // using the carInfo method from a Car object

// Calling the Mechanic object
john.addCar(newCar, new Car("Green", "Honda", "Civic"));
john.addCar(new Car("Green", "Honda", "Civic"));
console.log(john.listCars());
console.log(john.whoAmI());
```

# Before ES6

JavaScript has two major verions of the language; before EcmaScript6(ES6) and after ES6. Before ES6 a lot of the language was rushed and soem features were not fully thought out or implemented to solve short term problems, not long term problems.

## Initializing Variables

A lot of the basics of JavaScript are the same, the major difference being how we initialize variables, and the scoping that gets applied on those variabless

`const` and `let` did not exist, instead the keyword `var` was used

```JavaScript
var a = "String" // String
var b = 123 // Number
var c = 12.23 // Also a Number type
var d = true // Boolean
var e = false // other Boolean value
var f = null // Null
var g = undefined // Undefined
```

## The Var Keyword and Scope

The type of variables was also the same but using `var` creates a different level of scope. using var creates variables that is `function scoped` Meaning it is always global unless its in the block of a function

This Function will return an error `ReferenceError: name is not defined` because we define the variable name local to a function: `helloWorld`

```JavaScript
function helloWorld(){
  var name = "John"
}

console.log(name)
```

but in any other block of code, there wont be an error returned, because the var scope remains global.

```JavaScript
if (2 < 3) {
  var name = "John"
}
console.log(name) // Prints "John"
```

```JavaScript
while (2 < 3) {
  var name = "John"
}
console.log(name) // Prints "John"
```

```JavaScript
for (var i = 0 ; i < 10; i++) {
  var name = "John"
}
console.log(name) // Prints "John"
```

## Equality Operators

there are two ways to check if two variables are equal to eachother, both were created before ES6, but I want to note the difference here. Using `===` is for strict equlity checking, meaning it will compare the types and values before deciding if the two values match. Using `==` is for checking equality without strict checking, meaning it will ignore the typing and only compare the values.

Strict Checking

```JavaScript
// This will evaluate to false, so nothing will be printed
if (2 === '2') {
  console.log("True");
}

// This will evaluate to true, so the string "True" will be printed
if (2 === 2) {
  console.log("True");
}
```

Non-Strict Checking

```JavaScript
// This will evaluate to true, so the string "True" will be printed
if (2 == '2') {
  console.log("True");
}

// This will evaluate to true, so the string "True" will be printed
if (2 == 2) {
  console.log("True");
}
```

## Classes

Classes in JavaScript work by editing protoypes, they still work this way after ES6 only now there is a bit more abstraction involved. A prototype is an object that is associated with every function and object by default. We use prototypes to chain functionality.

```JavaScript
function Square(length) { // Defining a class
  this.length = length;
}

Square.prototype.getArea() { // Defining a method in a class
  return this.length * this.length
}

var shape = new Square(12); // New instance
console.log(shape.getArea()); // Returns 144
```

## Inheritance with Classes

```JavaScript
// Defining class
function Shape() {}

// Defining methods for the Shap Class
Shape.prototype.getAreaSquare = function () {
  return this.length * this.length;
};

Shape.prototype.getAreaRectangle = function () {
  return this.length * this.width;
};

// Defining a rectangle class
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

// Defining a Square class
function Square(length) {
  this.length = length;
}

// Inheriting from the Shape class(parent) to the Rectangle and Square classes (children classes)
Object.setPrototypeOf(Rectangle.prototype, Shape.prototype);
Object.setPrototypeOf(Square.prototype, Shape.prototype);

// Creating instances
const rec = new Rectangle(6, 12);
const sqr = new Square(12);

// Calling functions inherited from the Shape class (parent) onto the Square and Rectangle classes (children classes)
console.log(rec.getAreaRectangle(6, 12));
console.log(sqr.getAreaSquare(12));
```

# History | FAQ

## Are Java and JavaScript Related?

## What is EcmaScript

## Why is ES6 so special?

# Vocabulary

| Word                         | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Just in Time Compilation     | refers to the way code is executed, Just in time compilation means that while the executing it is also being compiled. In other words you start running the code -> a block of code is compiled -> run that code -> then compile more code and continue the cycle until the whole program is executed. JavaScript works this way.                                                                                                                                                                                                                                        |
| First Class Functions        | First class functions are a feature that some programming languages have, including JavaScript. It allows functions to be assigned to variables like any other primitive type. Example: `const exampleFunction = function(){}`                                                                                                                                                                                                                                                                                                                                           |
| Higher Order Functions       | A feature of some programming languages, including JavaScript. It allows us to insert a function into the argument of another function. Example: Defining the functions `function example1(data){} function example2(){}` calling the functions `example1(example2)` In this example we define two functions; one that takes in a parameter `data`. and another that takes no arguments. then we are able to pass in the second function as that parameter `data` and in a real example the function call would return something, by calling back to the second function |
| Prototype Based Programming  | A concept of OOP, the idea is that we can reuse objects as `prototypes`. So while we are not changing the original function, we are changing and reusing a prototype of the existing function.                                                                                                                                                                                                                                                                                                                                                                           |
| Programming Paradigm         | A way to classify an approach or style of programming. Often times languages are built around specific paradigms, but languages can also support multiple paradigms; called multi-paradigm languages. you can learn more about the different paradigms here: [Programming Paradigms](https://www.indicative.com/resource/programming-paradigm/)                                                                                                                                                                                                                          |
| Multi-Paradigm               | A programming language that supports multiple coding paradigms, popular one are Object Oriented Programming(OOP), Functional Programming, Procedural Programming. JavaScript is a language that is very flexible and supports OOP and functional programming                                                                                                                                                                                                                                                                                                             |
| Single Threaded              | In programming the code we write has to be ran on some part of the physical computer, code most of time runs on a thread on the computers CPU. JavaScript is famous for being single threaded, meaning only one piece of code will run at a time and block any two processes from running concurrently. This has its Pros and Cons, and like most things in JavaScript there are ways around the single threaded nature of JavaScript; something called promises or asynchronous execution                                                                               |
| Dynamic Programming Language | A programming language which is dynamic refers to the way variables are handled and defined. Example: `const testVariable = 12` is dynamic because we declare the variable name and the value, the computer takes care of understanding what kind of variable it is. JavaScript is a dynamic programming language.                                                                                                                                                                                                                                                       |
| Static Programming Language  | A programming languahe which is static refers to the way variables are handled and defined. Example: `const testVariable int = 12` Here we have to define the variable name `testVariable`, the variable type `int`, and the variables value `12`                                                                                                                                                                                                                                                                                                                        |
| Object Oriented Paradigm     | In this paradigm code should be written in objects with code that mimic how we think of objects in real life. Example: we think of a car as an object with 4 wheels, a color, a model, and more more things to define what a car is, and what kind it is. In code we would have an object just like this to declare the color, model, and other attributes of a car object. OOP also introduces abstraction, learn more about abstraction in the next entry                                                                                                              |
| Abstraction                  | Abstraction is a common practice in programming where instead of typing the value by for something by hand for each possible configuaration, we create a variable that changes its value based on the configuration. Example: `const config1 = 1 const config2 = 2 const config3 = 3` vs an example with abstraction `const abstractedVariables = (config) => config ` you can see with abstraction we can accomplish the same functionality with less code.                                                                                                             |
| imperative Programming       | focuses on describing how a program operates step by step, rather than on high-level descriptions of its expected results.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| declarative Programming      | Declaritive programming introduces abstraction similar to OOP, but instead of decalring the objects that the user will use in blocks in declarative programming we define the desired outcome or the task to execute.                                                                                                                                                                                                                                                                                                                                                    |
| Procedural Programming       | A type of Imperitive programming where code is written and read from top down in the order that it is written. Languages like `Basic` or `C` are procedural                                                                                                                                                                                                                                                                                                                                                                                                              |
| Primitive Types              | The most basic data types available in a language, serve as the foundation for manipulating data in code                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Method                       | Same concept as a function, we can use the term method and function interchangably. Usually methods are for functionality that is attatched to an object                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Object                       | a data type that is defined as a key pair, we can define primitive values or data types within an object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Boiler Plate Code            | Code that we need to define for certain functionality in a program language to function correctly. In JavaScript we dont usually need boiler plate code, but within some frameworks we do use some boiler plate code                                                                                                                                                                                                                                                                                                                                                     |

# Code Along

Once you have finished reading the documentation, or if you would like to practice some of the concepts as you go along, feel free to use the `codeAlong.js` sheet also in this folder. One helpful tip to comment and uncomment code is to:

1. Highlight the code you wish to comment or uncomment
2. press `cmd + /` on mac or `ctrl + /` on windows
