# Functions. What are they?

Simply put a function in programming is like a container full of instructions. We can reuse this container and not have to worry about writing the instructions again and again. Since they are already in our function.

## Declaring a Function

Most languages have a concept of a function, JavaScript has some functions resembling functions from languages like C++ or Java, and it has special functions that are somewhat unique to JavaScript.

Note:

- although the syntax here may look like the one from C++ or Java, under the hood, they function very differently.
- Note about Functions in JavaScript: Functions can be assigned to variables, this is essential to understanding how to declare the [Arrow Function](#The-Arrow-Function) and the [Classic Non-Hoisted Function](#The-Classic-Non-Hoisted-Function)

## The Classic Hoisted Function

Check out how to call this type of Function [Here](#Invoking-Classic-Hoisted-Function)

```JavaScript
function helloWorld(){
  return "Hello World from a Hoisted Function"
}
```

## The Classic Non-Hoisted Function

Check out how to call this type of Function [Here](#Invoking-Classic-Non-Hoisted-Function)

```JavaScript
const helloWorld = function(){
  return "Hello World from a non-hoisted function"
}
```

## The Arrow Function

Check out how to call this type of Function [Here](#Invoking-Arrow-Function)

```JavaScript
const helloWorld = () => {
return "Hello World from an arrow function"
}
```

[Why are there so many ways to declare a function!](#why-are-there-so-many-ways-to-declare-a-function)

## Invoking a Function

A general key to invoking a function is that if a function is Hoisted, then it can be called before it is defined. Otherwise, it must be called after the function definition [How to Define a Function](#delcaring-a-function). This section will show all the `valid` ways of invoking functions in JavaScript.

## Invoking Classic Hoisted Function

As you can see, hopefully, this describes what it means for a function to be Hoisted, the function declaration will always be read first, and because of this we can call the function before we declare it or after

```JavaScript
//Defining the function
function helloWorld(){
  return "Hello World from a Hoisted Function"
}

// Invoking the function after the declaration
helloWorld() // returns "Hello World from a Hoisted Function"
```

```JavaScript
// Invoking the function before the declaration
helloWorld() // returns "Hello World from a Hoisted Function"

//Defining the function
function helloWorld(){
  return "Hello World from a Hoisted Function"
}
```

## Invoking Classic Non-Hoisted Function

```JavaScript
//Defining the function
const helloWorld = function(){
return "Hello World from a Hoisted Function"
}

// Invoking the function after the declaration
helloWorld() // returns "Hello World from a non-hoisted function"
```

## Invoking Arrow Function

```JavaScript
//Defining the function
const helloWorld = () => {
return "Hello World from an Arrow Function"
}

// Invoking the function after the declaration
helloWorld() // returns "Hello World from an Arrow Function"
```

## Declaring and Invoking Factory Functions

Factory functions are functions that return objects, simple, it works kind of like a `class` but remember there are many ways to accomplish the same thing in JavaScript. A factory function is really defined by what is returned so it can be hoisted, non-hoisted, or arrow function.

```JavaScript
function person(firstName, lastName, age, job) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    job: job,
  };
}

const p = person("John", "Doe", 34, "worker");

console.log(p); // Returns { firstName: 'John', lastName: 'Doe', age: 34, job: 'worker' }
```

In practice you probably won't encounter factory functions, classes and constructors are preferred, but it's good to know this is possible.s

## Declaring and Invoking Anonymous Functions

Usually, we don't create Anonymous Functions by themselves, so I will make a special section here to talk all about anonymous functions

```JavaScript
// Classic hoisted function with an anonymous function
function add(a) {
  return function (b) {// This is the anonymous function => notice it has no variable name
    return a + b;
  };
}

//Invoking this function
console.log(add(1)(2)); //Returns 3
```

```JavaScript
// Classic Non-Hoisted with an anonymous function
const add = function (a) {
  return function (b) { // This is the anonymous function => Notice its very similar to the example above
    return a + b;
  };
};

console.log(add(4)(3)); //Returns 7
```

```JavaScript
const add = (a) => {
  return (b) => { // This is the Anonymous function
    return a + b;
  };
};

console.log(add(3)(4)); //Returns 7

// The Cool thing about Arrow Functions is they are used to write Functions in shorthand like below

const add = (a) => (b) => a + b; // The `(b) =>` is the anonymous function
//This is called a one liner and its a very modern way of writing JS

console.log(add(3)(3)); // Returns 6
```

## Using Arguments and Parameters

```JavaScript
// Classic Hoisted Function with Parameters and Arguments
function sayHello(name) {
  return 'Hello ' + name;
}

console.log(sayHello('Osiel')); //Returns "Hello Osiel"
```

```JavaScript
// Classic Non-Hoisted Function with Parameters and Arguments
const sayHello = function(name) {
  return 'Hello ' + name;
}

console.log(sayHello('Harold')); //Returns "Hello Harold"
```

```JavaScript
// Arrow Function with Parameters and Arguments
const sayHello = (name) => {
  return 'Hello ' + name;
}

console.log(sayHello('Samny')); //Returns "Hello Samny"

// The shorthand would be like so:
const sayHello = (name) => 'Hello ' + name;
```
