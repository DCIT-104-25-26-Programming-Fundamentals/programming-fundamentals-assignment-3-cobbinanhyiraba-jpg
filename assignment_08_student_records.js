// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================

const readlineSync = require('readline-sync');

// Calculate average score
function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

// Add a student
function addStudent(students) {
    let name = readlineSync.question("Student name: ");
    let id = readlineSync.questionInt("Student ID: ");

    let numberOfScores = readlineSync.questionInt(
        "How many scores? "
    );

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        let score = readlineSync.questionFloat(
            "Enter score " + (i + 1) + ": "
        );

        scores.push(score);
    }

    let student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(
        'Student "' + name + '" added successfully.'
    );
}

// Display all students
function displayStudents(students) {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\nStudent Records:");
    console.log("-----------------------------------------------");

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let average = calculateAverage(student.scores);

        console.log("Name: " + student.name);
        console.log("ID: " + student.id);
        console.log("Scores: " + student.scores.join(", "));
        console.log("Average: " + average.toFixed(2));
        console.log("-----------------------------------------------");
    }
}

// Find and display average for a specific student
function findStudentAverage(students) {
    let id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            let average = calculateAverage(students[i].scores);

            console.log(
                students[i].name +
                "'s average score: " +
                average.toFixed(2)
            );

            return;
        }
    }

    console.log("Error: Student ID not found.");
}

// Main program
function main() {
    let students = [];
    let choice;

    do {
        console.log("\n================================");
        console.log("   STUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        choice = readlineSync.questionInt(
            "Enter your choice (1-4): "
        );

        switch (choice) {
            case 1:
                addStudent(students);
                break;

            case 2:
                displayStudents(students);
                break;

            case 3:
                findStudentAverage(students);
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log(
                    "Error: Invalid choice. Please select 1-4."
                );
        }

    } while (choice !== 4);
}

main();
