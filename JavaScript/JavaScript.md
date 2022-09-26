# Welcome to JavaScript

JavaScript is a lightweight, interpreted, multi-paradigm language, and features first class functions. It is a single threaded language and is dynamicaly typed. 

# Table of Contents
- [Welcome to JavaScript](#welcome-to-javascript)
- [Table of Contents](#table-of-contents)
- [Getting Started | Hello World Program](#getting-started--hello-world-program)
  - [What happens if we print the console object to the console?](#what-happens-if-we-print-the-console-object-to-the-console)
- [JavaScript Typing](#javascript-typing)
- [JavaScript Best Practices](#javascript-best-practices)
  - [Naming Conventions](#naming-conventions)
- [Other Notes](#other-notes)
  - [ES6](#es6)
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

# JavaScript Typing 

In coding languages we use primitive types which are immutable; meaning they are not able to be changed, and objects which are not considered primitive.

List of Primitive Types:
```JavaScript
const a = "String" // String
const b = 123 // Number
const d = true // Boolean
const e = null // Null
const f = undefined // Undefined
```
List of Data Structures:
```JavaScript
const a = ["String", 12, true, undefined] // Array
const b = { name: "Jim", age: 132, condition: true } // Object
```
We use primitive types and data structures together to build some complex logic.

# JavaScript Best Practices

## Naming Conventions

In JavaScript we use `Camel Casing` for most variable naming, here are a couple of examples:
```JavaScript
const fullName = "Jane Doe"
const generatePassword = function(){...}
```
Camel Casing refers to having the first word be lowercase and everything after it capitalized `fullName` is an example of naming a string varialbe and `generatePassword` is an example of naming a function

Naming classes is one of the only times that we use a different casing, `Pascal Casing` where every word should be capitalized.
```JavaScript
class Car {...}
Car.someMethod()

class LongerClassName{...}
```
Classes are how we create Objects and use OOP to create blocks of data to represent something, in this example we created a Car object, and we could attach methods and data to it.

# Other Notes

## ES6

# Vocabulary

| Word | Definition |
|--------------------------|--------------------------------------------------------------------------------------------------------------|
| Just in Time Compilation | refers to the way code is executed, Just in time compilation means that while the executing it is also being compiled. In other words you start running the code -> a block of code is compiled -> run that code -> then compile more code and continue the cycle until the whole program is executed. JavaScript works this way. |
| First Class Functions | First class functions are a feature that some programming languages have, including JavaScript. It allows functions to be assigned to variables like any other primitive type. Example: `const exampleFunction = function(){}` |
| Higher Order Functions | A feature of some programming languages, including JavaScript. It allows us to insert a function into the argument of another function. Example: Defining the functions `function example1(data){} function example2(){}` calling the functions `example1(example2)` In this example we define two functions; one that takes in a parameter `data`. and another that takes no arguments. then we are able to pass in the second function as that parameter `data` and in a real example the function call would return something, by calling back to the second function |
| Prototype Based Programming | A concept of OOP, the idea is that we can reuse objects as `prototypes`. So while we are not changing the original function, we are changing and reusing a prototype of the existing function. |
| Programming Paradigm | A way to classify an approach or style of programming. Often times languages are built around specific paradigms, but languages can also support multiple paradigms; called multi-paradigm languages. you can learn more about the different paradigms here: [Programming Paradigms](https://www.indicative.com/resource/programming-paradigm/) |
| Multi-Paradigm | A programming language that supports multiple coding paradigms, popular one are Object Oriented Programming(OOP), Functional Programming, Procedural Programming. JavaScript is a language that is very flexible and supports OOP and functional programming |
| Single Threaded | In programming the code we write has to be ran on some part of the physical computer, code most of time runs on a thread on the computers CPU. JavaScript is famous for being single threaded, meaning only one piece of code will run at a time and block any two processes from running concurrently. This has its Pros and Cons, and like most things in JavaScript there are ways around the single threaded nature of JavaScript; something called promises or asynchronous execution |
| Dynamic Programming Language | A programming language which is dynamic refers to the way variables are handled and defined. Example: `const testVariable = 12` is dynamic because we declare the variable name and the value, the computer takes care of understanding what kind of variable it is. JavaScript is a dynamic programming language. |
| Static Programming Language | A programming languahe which is static refers to the way variables are handled and defined. Example: `const testVariable int = 12` Here we have to define the variable name `testVariable`, the variable type `int`, and the variables value `12` |
| Object Oriented Paradigm | In this paradigm code should be written in objects with code that mimic how we think of objects in real life. Example: we think of a car as an object with 4 wheels, a color, a model, and more more things to define what a car is, and what kind it is. In code we would have an object just like this to declare the color, model, and other attributes of a car object. OOP also introduces abstraction, learn more about abstraction in the next entry |
| Abstraction | Abstraction is a common practice in programming where instead of typing the value by for something by hand for each possible configuaration, we create a variable that changes its value based on the configuration. Example: `const config1 = 1 const config2 = 2 const config3 = 3` vs an example with abstraction `const abstractedVariables = (config) => config `  you can see with abstraction we can accomplish the same functionality with less code. |
| imperative Programming | focuses on describing how a program operates step by step, rather than on high-level descriptions of its expected results. |
| declarative Programming | Declaritive programming introduces abstraction similar to OOP, but instead of decalring the objects that the user will use in blocks in declarative programming we define the desired outcome or the task to execute. |
| Procedural Programming | A type of Imperitive programming where code is written and read from top down in the order that it is written. Languages like `Basic` or `C` are procedural |
| Primitive Types | The most basic data types available in a language, serve as the foundation for manipulating data in code |
| Method | Same concept as a function, we can use the term method and function interchangably. Usually methods are for functionality that is attatched to an object |
| Object | a data type that is defined as a key pair, we can define primitive values or data types within an object. |
| Boiler Plate Code | Code that we need to define for certain functionality in a program language to function correctly. In JavaScript we dont usually need boiler plate code, but within some frameworks we do use some boiler plate code |

# Code Along

Once you have finished reading the documentation, or if you would like to practice some of the concepts as you go along, feel free to use the `codeAlong.js` sheet also in this folder. One helpful tip to comment and uncomment code is to:
1. Highlight the code you wish to comment or uncomment
2. press `cmd + /` on mac or `ctrl + /` on windows 