// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================

const readlineSync = require('readline-sync');

// Function to read a matrix
function readMatrix(rows, columns, name) {
    let matrix = [];

    console.log(`\nEnter values for Matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        let row;

        while (true) {
            row = readlineSync.question(`Enter row ${i + 1}: `)
                .trim()
                .split(/\s+/)
                .map(Number);

            if (row.length === columns && row.every(Number.isFinite)) {
                break;
            }

            console.log(`Error: Please enter exactly ${columns} numbers.`);
        }

        matrix.push(row);
    }

    return matrix;
}

// Function to display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += String(matrix[i][j]).padStart(6);
        }

        console.log(row);
    }
}

// Part A: Transpose a matrix
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let transpose = [];

    for (let j = 0; j < columns; j++) {
        let newRow = [];

        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }

        transpose.push(newRow);
    }

    return transpose;
}

// Part B: Add two matrices
function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let columns = matrixA[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        let row = [];

        for (let j = 0; j < columns; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

// Part C: Multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let columnsA = matrixA[0].length;
    let columnsB = matrixB[0].length;

    let result = [];

    for (let i = 0; i < rowsA; i++) {
        let row = [];

        for (let j = 0; j < columnsB; j++) {
            let sum = 0;

            for (let k = 0; k < columnsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}

// Main program
console.log("================================");
console.log("       MATRIX OPERATIONS");
console.log("================================");

// Part A
console.log("\n--- PART A: TRANSPOSE ---");

let rows = readlineSync.questionInt("Enter number of rows: ");
let columns = readlineSync.questionInt("Enter number of columns: ");

if (rows <= 0 || columns <= 0) {
    console.log("Error: Matrix dimensions must be positive.");
    process.exit();
}

let matrix = readMatrix(rows, columns, "A");

console.log("\nOriginal Matrix:");
displayMatrix(matrix);

let transposed = transposeMatrix(matrix);

console.log("\nTransposed Matrix:");
displayMatrix(transposed);

// Part B
console.log("\n--- PART B: MATRIX ADDITION ---");

let rowsB = readlineSync.questionInt("Enter number of rows: ");
let columnsB = readlineSync.questionInt("Enter number of columns: ");

if (rowsB <= 0 || columnsB <= 0) {
    console.log("Error: Matrix dimensions must be positive.");
    process.exit();
}

let matrixB1 = readMatrix(rowsB, columnsB, "A");
let matrixB2 = readMatrix(rowsB, columnsB, "B");

let additionResult = addMatrices(matrixB1, matrixB2);

console.log("\nMatrix A:");
displayMatrix(matrixB1);

console.log("\nMatrix B:");
displayMatrix(matrixB2);

console.log("\nA + B:");
displayMatrix(additionResult);

// Part C
console.log("\n--- PART C: MATRIX MULTIPLICATION ---");

let rowsA = readlineSync.questionInt("Enter rows for Matrix A: ");
let columnsA = readlineSync.questionInt("Enter columns for Matrix A: ");

let rowsC = readlineSync.questionInt("Enter rows for Matrix B: ");
let columnsC = readlineSync.questionInt("Enter columns for Matrix B: ");

if (rowsA <= 0 || columnsA <= 0 || rowsC <= 0 || columnsC <= 0) {
    console.log("Error: Matrix dimensions must be positive.");
    process.exit();
}

if (columnsA !== rowsC) {
    console.log(
        "Error: The number of columns in Matrix A must equal the number of rows in Matrix B."
    );
    process.exit();
}

let matrixC1 = readMatrix(rowsA, columnsA, "A");
let matrixC2 = readMatrix(rowsC, columnsC, "B");

let multiplicationResult = multiplyMatrices(matrixC1, matrixC2);

console.log("\nMatrix A:");
displayMatrix(matrixC1);

console.log("\nMatrix B:");
displayMatrix(matrixC2);

console.log("\nA x B:");
displayMatrix(multiplicationResult);

console.log("\nMatrix operations completed.");
