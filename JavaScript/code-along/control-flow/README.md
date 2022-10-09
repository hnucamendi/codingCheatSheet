# Control Flow

The order in which individual statements, instructions, or function calls are executed. When we define control flow in our code the Lexical Scope can change as the program runs.

## Procedural Execution

The default, procedural execution is when the code of a program is read from the top down in order

```JavaScript
console.log("Hello")
console.log("World")
console.log("How")
console.log("Are")
console.log("You?")
```

Returns:

```JavaScript
// Hello
// World
// How
// Are
// You?
```

![procedural execution](img/proceduralExec.gif)
You can see that the code prints out the values in the order that they are listed from top to bottom. `Hello, World, How, Are, You?`. In the same example, I want to show what happens when we declare a function.

```JavaScript
const name = "John";

function printGreeting(greeting) {
  console.log(greeting);
}

printGreeting("Hello!")s
console.log(john)
```

![procedural execution with a function](img/proceduralExecFunc.gif)
When we declare a function in the middle of our code, we `skip` the `function declaration` until we `call` or `invoke` the function. So this execution will actually

1. Declare the function first(although not something that we can see in the GIF)
2. Create a variable `firstName` and assign it the value `John`
3. Move to line 9 where we `call` / `invoke` the function
4. It goes back up to the function body
5. Returns the `console.log()` back at line 9
6. Then we move on to line 10.

It's a common mistake, but it's important to remember that a function declaration when [Hoisted](#the-classic-hoisted-function) will be created before anything else, and be skipped until the function is called or invoked. When a function is not [Non-Hoisted](#the-classic-non-hoisted-function) or [Arrow Function](#the-arrow-function) it will be declared in the order everything else, procedurally.

```JavaScript
console.log("Hello from the outside");

if (2 < 3) {
  console.log("Hello, 2 is less than 3");
}

if (2 > 3) {
  console.log("2 is greater than 3");
} else {
  console.log("2 will never be greater than 3!");
}

console.log("ok bye");
```

## Conditional Execution

![conditional execution](img/conditionalExec.gif)
When we use conditionals in our code we can alter the way our code executes drastically, the example here is small and simple but often we can use conditionals to run whole blocks of code that return something and exit the code, from within the condition.

1. Start at the top and by default run code from top to bottom, so `Hello from the outside` will be printed
2. Our first condition, if `2 < 3` then and only then, we print `Hello, 2 is less than 3` otherwise we just skip this code entirely
3. Our second condition, if `2 > 3` then and only then, we print `2 is greater than 3` but we know this can never be true, so we skip this block and go to the `else` statement, `else` is not another option, its the option that is executed when nothing before it returned true, so we will print `2 will never be greater than 3!`
4. End by printing `ok bye`

## Anatomy of a Conditional

There are two types of conditionals, the `if else` block and the `switch statement`

## If-Else Block

```JavaScript
if (condition) { // Conditions must return, or be of boolean type
  // Do something
}else {
  // Do this only if all the above return false
}
```

As we have seen before here is a simple if-else block

```JavaScript
if(2 < 3 ) { // results to a boolean value True, because 2 is less than 3
  console.log("This is true");
}else {
  console.log("This is false")
}
```

The example above is very simple and will always return true => `This is true`, let's write a more realistic example

```JavaScript
const namesInHat = ["Osiel", "Justin", "Tias", "Faith"];

const randomNumber = Math.floor(Math.random() * namesInHat.length + 1);

if (randomNumber === 3) { // === is a strict equality checker, checks if two values are the same type and value
  console.log(namesInHat[randomNumber]);
} else if (randomNumber === 0) {
  console.log(namesInHat[randomNumber]);
} else if (randomNumber === 1) {
  console.log(namesInHat[randomNumber]);
} else if (randomNumber === 2) {
  console.log(namesInHat[randomNumber]);
}else {
  console.log("None of those match my list, try again")
}
```

Ok, maybe this isn't the most realistic example, since there are better more efficient ways to make a random hat name picker. But in this example, we get to set our top `if` condition, our `else if` conditions, similar to the else block they run:

1. only if the previous condition is false
2. and are attached to the original if the condition

and then we set our `else` block in the case that we pull a number that does not exist in our array.

One more thing about if blocks

## the condensed block

```JavaScript
if (2 < 3) console.log("this is true")
```

This works best for cases where you want to quickly check if something is true, without writing a whole block, but as you see, you cannot explicitly declare and `else` or `else-if` block

## Switch Statement

```JavaScript
switch (case) { // A value that we will later use to compare against in our cases
  case condition: // a case is like an if or else-if block, and the condition is the thing we are comparing against
  //Do something
  break; // The break keyword moves the execution along in the case that a value is true
  default: // same as the else block
  // Do this only if all the above return false
}
```

Here is a simple example using a switch statement:

```JavaScript
switch (2) { // We will compare other values against this
  case 3: // => is 2 === 3 ? No
    console.log("not equal");
    break;
  case 2: // => is 2 === 2 ? Yes
    console.log("Equal"); // Print this
    break; // Break out of this block and return to normal execution
  default:
    console.log("Non were equal");
}
```

We can see switch statements are smaller, and a bit easier to read. We mostly use them for occasions where we have a lot of conditions to compare, instead of having large blocks for each, we instead write cases under a switch statement. Now let's write the realistic example from before using a switch statement

```JavaScript
const namesInHat = ["Osiel", "Justin", "Tias", "Faith"];

const randomNumber = Math.floor(Math.random() * namesInHat.length + 1);


switch (randomNumber) {
  case 3:
    console.log(namesInHat[randomNumber]);
    break;
  case 0:
    console.log(namesInHat[randomNumber]);
    break;
  case 1:
    console.log(namesInHat[randomNumber]);
    break;
  case 2:
    console.log(namesInHat[randomNumber]);
    break;
  default:
    console.log("None of those match my list, try again")
}
```

Much more condensed code, with the same functionality

## Truthy Falsey

Truthy Falsey values are the name we give to how a conditional will determine if a value in the condition statement is true or false. A lot of time when learning about truthy falsey we start also learning about these operators:

```JavaScript
|| // Or
&& // And
! // Not (also known as the "bang" symbol)
?? // Null Coalescing
.? // Optional Chaining
=== // Strict equality operator
== // Non-Strict equality operator
```

Here are some quick examples of how they work before we define Truthy Falsey:

```JavaScript
if (2 < 3 || 2 > 4) console.log("This is true") // Because the || operator only checks if 1 condition is true
if (2 < 3 && 2 > 4) console.log("This is false") // Because the && operator needs both conditions to return true
if (2 == 2 && 2 == "2") console.log("This is True") // Because the == operator only check the value, not the typing
if (2 === 2 && 2 === "2") console.log("This is False") // Because the === operator checks the value and typing
```

Now to dive deeper into how JavaScript determines this, we need to describe item precedence, very similar to how the order of operations works in math

This code snippet is from here: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

```JavaScript
a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`
```

The way to read this is like so:

1. The || operator looks to the left first, if this value is true it won't look to the right, it will return True
2. The && operator will look to the left first, and if it is false it will return false, ignoring what's on the right, if the first value on the left is true, it will look at the value on the right, and only that is true will it return true
3. the ?? operator will see check if the value on the left is `null` or `undefined` first, if so it will return the value on the right. If not then it will check if the value on the right is `null` or `undefined` and return the value on the left.
4. The ?. will look to the left first, if a is anything other than `null` or `undefined` it will check if b is true, and so on.

Here is a link with a table describing the precedence of each operator [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)

## Short Circuiting

We have already explored the concept of short-circuiting, we can think of it as something happening that makes an action
jump out of its standard execution. Example:

For the ||(OR) operator our variable `a` is short-circuiting. Because the || operator expects one of the two values to be true to return that value. Once it checks the left, the program has no need to check the right, so it just stops and checks the value on the left

```JavaScript
const a = true || "Hello";
const b = false || "Hello";

console.log(a); // returns true
console.log(b); // returns "Hello"
```

For the &&(AND) operator our variable `c` is short-circuiting. Because the && operator expects both values to be true. Once it checks the left, it has no need to check the right, so it just stops and returns the value on the left.

```JavaScript
const c = false && "";
const d = true && "Hello";

console.log(c); // Returns false
console.log(d); // Returns "Hello"
```
