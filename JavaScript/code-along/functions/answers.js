"use strict";

/**
 * Create a function that takes in two numbers that represent distance in miles
 * returns the distance between the two numbers
 */

function distance(a, b) {
  if (b < a) return a - b;
  if (a < b) return b - a;
}

console.table({
  distance1: distance(16, 6),
  distance2: distance(9, 20),
  distance3: distance(-5, -1),
});
console.log("****************************************************************");

/**
 * Create a function that takes in two arrays of numbers that represent distance in miles
 * return a new array with the distance values of both of the arrays
 * if one array is bigger favor only comparing what matches the shorter arrays values
 */

function distanceWithArrays(a, b) {
  let arr = [];

  if (a.length < b.length) {
    const diff = b.length - a.length;
    for (let i = 0; i < diff; i++) {
      b.pop();
    }
  }

  if (b.length < a.length) {
    const diff = a.length - b.length;
    for (let i = 0; i < diff; i++) {
      a.pop();
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (b[i] < a[i]) arr.push(a[i] - b[i]);
    if (a[i] < b[i]) arr.push(b[i] - a[i]);
    if (a[i] === b[i]) arr.push(0);
  }

  return arr;
}

console.table({
  distanceWithArrays1: distanceWithArrays(
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ),
});

console.table({
  distanceWithArrays2: distanceWithArrays([9, 8], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
});

console.table({
  distanceWithArrays3: distanceWithArrays([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2]),
});
console.log("****************************************************************");

/**
 * Create a function that returns a string of text
 * Create a function that concatenates the return of the first function
 * returns a new string
 */

function test(f) {
  return f + "from function one!";
}

function test2() {
  return "Hello World ";
}

console.table({ callback: test(test2()) });
console.log("****************************************************************");

/**
 * Create a function that can calculate the tip for a meal
 * returns the total amount of your bill
 * @Param {bill} the bill amount before the tip
 * @Param {percentage} percentage of tip in decimal format
 */

function tip(bill, percentage) {
  return (bill + bill * percentage).toFixed(2);
}

console.table({ tips: tip(20.43, 0.2) });
console.log("****************************************************************");

/**
 * Create a function that can calculate the tip for a meal
 * is able to account for a number of people to split the bill with
 * returns the total amount of your bill
 * @Param {bill} the bill amount before the tip
 * @Param {people} amount of people to split the bill with
 * @Param {percentage} percentage of tip in decimal format
 */

function tipWithPeople(bill, percentage, people = 1) {
  bill = (bill + bill * percentage).toFixed(2);
  if (people > 1)
    return `Total: $${bill}, $${(bill / people).toFixed(2)} per person`;
  else return `Total: ${bill}`;
}

console.table({ tipWithPeople1: tipWithPeople(20.43, 0.2) });
console.table({ tipWithPeople2: tipWithPeople(20.43, 0.2, 3) });
console.log("****************************************************************");
