import inquirer from "inquirer";
let isRunning = true;
while (isRunning) {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Write the first number: "
        },
        {
            type: "number",
            name: "num2",
            message: "Write the second number: "
        },
        {
            type: "list",
            name: "option",
            message: "What do you want to do?",
            choices: ["Sum", "Subtract", "Multiply", "Divide", "Exit"]
        }
    ]);
    let num1 = answer.num1;
    let num2 = answer.num2;
    function sum(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
    function multiply(num1, num2) {
        return num1 * num2;
    }
    function divide(num1, num2) {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    }
    let add = sum(num1, num2);
    let difference = subtract(num1, num2);
    let product = multiply(num1, num2);
    let Divide = divide(num1, num2);
    if (answer.option == "Sum") {
        console.clear();
        console.log(`Your answer is ${add}`);
    }
    else if (answer.option == "Subtract") {
        console.clear();
        console.log(`Your answer is ${difference}`);
    }
    else if (answer.option == "Multiply") {
        console.clear();
        console.log(`Your answer is ${product}`);
    }
    else if (answer.option == "Divide") {
        console.clear();
        console.log(`Your answer is ${Divide}`);
    }
    else if (answer.option == "Exit") {
        console.clear();
        isRunning = false;
        process.exit(1);
    }
}
