// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================

const readlineSync = require('readline-sync');

// Add a task
function addTask(tasks) {
    let task = readlineSync.question("Enter task: ");

    tasks.push(task);

    console.log('Task added: "' + task + '"');
}

// View all tasks
function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log("Your task list is empty.");
        return;
    }

    console.log("Your Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]);
    }
}

// Delete a task
function deleteTask(tasks) {
    if (tasks.length === 0) {
        console.log("No tasks available to delete.");
        return;
    }

    viewTasks(tasks);

    let number = readlineSync.questionInt(
        "Enter task number to delete: "
    );

    if (number < 1 || number > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    let deletedTask = tasks[number - 1];

    tasks.splice(number - 1, 1);

    console.log(
        'Task "' + deletedTask + '" has been removed.'
    );
}

// Main program
function main() {
    let tasks = [];
    let choice;

    do {
        console.log("\n============================");
        console.log("       TO-DO LIST MENU");
        console.log("============================");
        console.log("1. Add task");
        console.log("2. View tasks");
        console.log("3. Delete task");
        console.log("4. Quit");

        choice = readlineSync.questionInt(
            "Enter your choice (1-4): "
        );

        switch (choice) {
            case 1:
                addTask(tasks);
                break;

            case 2:
                viewTasks(tasks);
                break;

            case 3:
                deleteTask(tasks);
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
