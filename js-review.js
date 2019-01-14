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

// countBs function
function countBs(string) {
    var count = 0;

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == 'B') {
            count++;
        }
    }
    return "There is/are " + count + " uppercase B(s) in " + string + "<br>";
}

document.write(countBs("elephant"));
document.write(countBs("blueberries"));
document.write(countBs("BLUEBERRIES"));
document.write(countBs("BLUEberries"));

// countChar function
function countChar(string, character) {
    var count = 0;

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == character) {
            count++;
        }
    }
    return "There is/are " + count + " " + character + "(s) in " + string + "<br>";
}

document.write(countChar("lemonade", 'a'));
document.write(countChar("RRRrrrRR", 'R'));

// rewrite countBs to use countChar
function newCount(string) {
    return countChar(string, 'B');
}

document.write(newCount("BBB"));
document.write(newCount("bbb"));
document.write(newCount("berries"));
