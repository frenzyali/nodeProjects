import inquirer from "inquirer";
let isRunning = true;
console.log("********** Currency Converter By Ali **********");
console.log("****************** Welcome ***************");
while (isRunning) {
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "originalmoney",
            message: "Enter the amount of money(In Rupees) you want to convert:"
        },
        {
            type: "list",
            name: "currency",
            message: "Which currency would you like to convert it to?",
            choices: ["Dollar", "Euro", "Pound Sterling", "UAE Dirham", "Saudia Riyals", "Japanese Yen", "Indian Rupees"]
        }
    ]);
    if (answer.currency === "Dollar") {
        console.log("The converter currency is:$" + answer.originalmoney * 0.0036);
    }
    else if (answer.currency === "Euro") {
        console.log("The converter currency is:€" + answer.originalmoney * 0.0033);
    }
    else if (answer.currency === "Pound Sterling") {
        console.log("The converter currency is:£" + answer.originalmoney * 0.0028);
    }
    else if (answer.currency === "UAE Dirham") {
        console.log("The converter currency is: " + answer.originalmoney * 0.013 + " Dirhams");
    }
    else if (answer.currency === "Saudia Riyals") {
        console.log("The converter currency is: " + answer.originalmoney * 0.013 + " Riyals");
    }
    else if (answer.currency === "Japanese Yen") {
        console.log("The converter currency is:¥" + answer.originalmoney * 0.53);
    }
    else if (answer.currency === "Indian Rupees") {
        console.log("The converter currency is:₹" + answer.originalmoney * 0.30);
    }
    let exit = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "What would you like to do?",
            choices: ["Exit", "Continue"]
        }
    ]);
    if (exit.option == "Exit") {
        console.log("Exitting the program. Good Bye!");
        isRunning = false;
        process.exit(1);
    }
    else {
        isRunning = true;
    }
}
