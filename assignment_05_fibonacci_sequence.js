// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================

const readlineSync = require('readline-sync');

// Part A: Print the first N Fibonacci terms
function printFibonacci(n) {
    let first = 0;
    let second = 1;
    let sequence = [];

    for (let i = 0; i < n; i++) {
        sequence.push(first);

        let next = first + second;
        first = second;
        second = next;
    }

    console.log("Fibonacci sequence: " + sequence.join(" "));
}

// Part B: Check if a number is a Fibonacci number
function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    while (first <= number) {
        if (first === number) {
            return true;
        }

        let next = first + second;
        first = second;
        second = next;
    }

    return false;
}

// Main program
console.log("================================");
console.log("   FIBONACCI SEQUENCE GENERATOR");
console.log("================================");

// Part A
let n = readlineSync.questionInt("How many terms? ");

if (n <= 0) {
    console.log("Error: Number of terms must be a positive integer.");
} else {
    printFibonacci(n);
}

// Part B
let number = readlineSync.questionInt("Enter a number to check: ");

if (isFibonacci(number)) {
    console.log(number + " is a Fibonacci number.");
} else {
    console.log(number + " is NOT a Fibonacci number.");
}
