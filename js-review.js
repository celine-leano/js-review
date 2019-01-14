/*
Celine Leano
1/13/2019
328/js-review/js-review.js
JavaScript for js review assignment
 */

console.log("Introduction to JavaScript")

// FizzBuzz program
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}