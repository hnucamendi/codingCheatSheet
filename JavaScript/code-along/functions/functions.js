"use strict";

/**
 * Create a function that takes in two numbers that represent distance in miles
 * returns the distance between the two numbers
 */

// ***Write code here ***

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

// ***Write code here ***

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

// ***Write code here ***

console.table({ callback: test(test2()) });
console.log("****************************************************************");

/**
 * Create a function that can calculate the tip for a meal
 * returns the total amount of your bill
 * @Param {bill} the bill amount before the tip
 * @Param {percentage} percentage of tip in decimal format
 */

// ***Write code here ***

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

// ***Write code here ***

console.table({ tipWithPeople1: tipWithPeople(20.43, 0.2) });
console.table({ tipWithPeople2: tipWithPeople(20.43, 0.2, 3) });
console.log("****************************************************************");
