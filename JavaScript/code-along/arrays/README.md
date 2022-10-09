# Arrays

our last section on objects covered how we can make some items that can hold various properties organized by key pair values. And a perfect example of an object is Arrays. Arrays are just an object that is pre-defined for us to use in JavaScript, meaning that arrays have methods

## Defining an Array

```JavaScript
const a = [] // Empty array
const b = new Array() // Empty Array using 'new' keyword
```

Very similar to how we can initialize objects, part of the reason is that Arrays are objects! Similar to how we can add values to objects, when we use the `new` keyword, this is how we work with arrays:

```JavaScript
const names = new Array();

names[0] = "Osiel";
names[1] = function someMethod() {
  return "Hello World";
};
names[2] = () => "Hello World";
names[3] = true;
names[4] = { valueInObject: "cool value" };

console.log(names);
// Prints the array below
// [
//   'Osiel',
//   [Function: someMethod],
//   [Function (anonymous)],
//   true,
//   { valueInObject: 'cool value' }
// ]
```

We will talk about the `names[0]` syntax soon, but we are choosing the index in which to place our values into. we can also create arrays with [] square brackets, here is the same array initialized that way:

```JavaScript
const names = [
  "Osiel",
  function someMethod() {
    return "Hello World";
  },
  () => "Hello World",
  true,
  { valueInObject: "cool value" },
];

console.log(names);
// Prints the array below
// [
//   'Osiel',
//   [Function: someMethod],
//   [Function (anonymous)],
//   true,
//   { valueInObject: 'cool value' }
// ]
```

## Arrays and their Index

<img src="img/ArrayImage.jpg" width="100%">

Here we have an array with the values:

```JavaScript
const arr = [24, 12, 10, 9, 15, -4]
```

The index represents the location in the array where the values are. And we can't count each value starting from `1` but we start counting the index of values from `0`.

To get a value we must reference the location that value is in (The index of the value) so if we wanted to get the first value, we want to reference index 0.

```JavaScript
console.log(arr[0]); // Prints 24
console.log(arr[1]); // Prints 12
console.log(arr[2]); // Prints 10
console.log(arr[3]); // Prints 9
console.log(arr[4]); // Prints 15
console.log(arr[5]); // Prints -4
```

So if we use the index to reference the values in an array, there will always be 1 less numeric value than the length of the array. in our example `[24, 12, 10, 9, 15, -4]` our array has `6` values, so the max index is `5`. we can represent this in code like this:

```JavaScript
arr.length // get the number of values in the array
arr.length - 1 // to get the index value

console.log(arr[arr.length - 1]) // Prints -4
```

## Array Methods

Like in our example above, we used the `length` method to get the size of the array(number of values) there are many other methods that we can call on arrays to manipulate data in the array.

We can always get the list of methods attached to an array like so:

```JavaScript
console.log(Object.getOwnPropertyNames(Array));
// Returns:
[
  "length",
  "constructor",
  "concat",
  "copyWithin",
  "fill",
  "find",
  "findIndex",
  "lastIndexOf",
  "pop",
  "push",
  "reverse",
  "shift",
  "unshift",
  "slice",
  "sort",
  "splice",
  "includes",
  "indexOf",
  "join",
  "keys",
  "entries",
  "values",
  "forEach",
  "filter",
  "flat",
  "flatMap",
  "map",
  "every",
  "some",
  "reduce",
  "reduceRight",
  "toLocaleString",
  "toString",
  "at",
  "findLast",
  "findLastIndex",
];
```

These methods are useful because it allows us to write less code, and get a lot done. But since we are writing less code and using a predefined method, using too many methods creates a lot of abstraction. Sometimes this can be bad for beginner programmers. Abstraction is covered [here](#abstraction)

## Array Destructuring

The functionality of destructuring arrays is exactly the same as it is for objects. The only difference is the syntax we use for arrays.

Say we have an array of names mixed in with some numbers

```JavaScript
const names = ["John", "Jane", 432, 592];

const [name, [letter1, letter2], ...numbers] = names;

console.log(name); // Returns "John"
console.log(letter1); // Returns "J"
console.log(letter2); // Returns "a"
console.log(numbers); // Returns [432, 592]
```

As you can see each index that we destructure is tied to match the index from the original array, and we can nest destructuring to get individual values of an item like we did to get the first two letters of the second item in our `names` array

We can also create default values, in the case that the value that we are destructing in the original array is undefined or null, it will use the default value.

```JavaScript
const test = ["James"];

const [name = "John"] = test;

console.log(jName);
```
