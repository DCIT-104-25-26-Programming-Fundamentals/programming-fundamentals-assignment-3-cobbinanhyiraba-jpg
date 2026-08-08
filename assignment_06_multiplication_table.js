// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================

const readlineSync = require('readline-sync');

// Part A: Generate a single multiplication table
function singleTable(number) {
    console.log("\nMultiplication Table for " + number + ":");

    for (let i = 1; i <= 12; i++) {
        console.log(
            number + "  x  " + i + "  =  " + (number * i)
        );
    }
}

// Part B: Generate tables from 1 to N
function tablesFromOneToN(n) {
    for (let number = 1; number <= n; number++) {
        console.log("\nMultiplication Table for " + number + ":");

        for (let i = 1; i <= 12; i++) {
            console.log(
                number + "  x  " + i + "  =  " + (number * i)
            );
        }

        if (number < n) {
            console.log("---------------------------");
        }
    }
}

// Main program
console.log("================================");
console.log("   MULTIPLICATION TABLE GENERATOR");
console.log("================================");

// Part A
let number = readlineSync.questionInt("Enter a number: ");

if (number <= 0) {
    console.log("Error: Number must be a positive integer.");
    process.exit();
}

singleTable(number);

// Part B
let n = readlineSync.questionInt(
    "\nEnter N for tables from 1 to N: "
);

if (n <= 0) {
    console.log("Error: N must be a positive integer.");
    process.exit();
}

tablesFromOneToN(n);
