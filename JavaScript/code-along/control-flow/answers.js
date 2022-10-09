"use strict";

/**
 * Write a loop that starts at 0 and runs 100 times
 * on each run it should check if index is divisable by 3 , 5 , or 3 and 5
 * if it is divisable by 3 print Fizz
 * if it is divisable by 5 print Buzz
 * if it is divisable by 3 and 5 print FizzBuzz
 * otherwise print the index
 */

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else console.log(i);
  }
}

fizzBuzz();
