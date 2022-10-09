"use strict";

/**
 * Create a function that takes in two numbers that represent distance in miles
 * returns the distance between the two numbers
 */

// *** Write your code here ***

console.log(distance(-5, -1));

/**
 * Create a function that takes in two arrays of numbers that represent distance in miles
 * return a new array with the distance values of both of the arrays
 * if one array is bigger favor only comparing what matches the shorter arrays values
 */

// *** Write your code here ***

console.log(
  distanceWithArrays([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9])
);
console.log(distanceWithArrays([9, 8], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(distanceWithArrays([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2]));

/**
 * Create a function that returns a string of text
 * Create a function that concatenates the return of the first function
 * returns a new string
 */

// *** Write your code here ***

console.log(test(test2()));

/**
 * Create a function that can calculate the tip for a meal
 * returns the total amount of your bill
 * @Param {bill} the bill amount before the tip
 * @Param {percentage} percentage of tip in decimal format
 */

// *** Write your code here ***

console.log(tip(20.43, 0.2));

/**
 * Create a function that can calculate the tip for a meal
 * is able to account for a number of people to split the bill with
 * returns the total amount of your bill
 * @Param {bill} the bill amount before the tip
 * @Param {people} amount of people to split the bill with
 * @Param {percentage} percentage of tip in decimal format
 */

// *** Write your code here ***

console.log(tipWithPeople(20.43, 0.2));
console.log(tipWithPeople(20.43, 0.2, 3));
