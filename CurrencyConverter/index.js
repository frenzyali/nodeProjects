#! /usr/bin/env node
import inquirer from "inquirer";
let isRunning = true;
console.log("********** Currency Converter By Ali **********");
console.log("****************** Welcome ***************");
while (isRunning) {
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "amount",
            message: "Enter amount(In Rupees): "
        },
        {
            type: "list",
            name: "currencyDesired",
            message: "In which currency would you like to convert the amount to?",
            choices: ["US Dollars", "Pounds", "Euro", "UAE Dirham", "Japanese Yen"]
        }
    ]);
    if (answer.currencyDesired == "US Dollars") {
        console.log("The amount in US Dollars is:" + answer.amount * 0.0036 + " Dollars");
    }
    else if (answer.currencyDesired == "Pounds") {
        console.log("The amount in Pounds is:" + answer.amount * 0.0029 + " Pounds");
    }
    else if (answer.currencyDesired == "Euro") {
        console.log("The amount in Euro is:" + answer.amount * 0.0033 + " Euros");
    }
    else if (answer.currencyDesired == "UAE Dirham") {
        console.log("The amount in UAE Dirhams is:" + answer.amount * 0.013 + " Dirhams");
    }
    else if (answer.currencyDesired == "Japanese Yen") {
        console.log("The amount in Japanese Yen is:" + answer.amount * 0.54 + " Yen");
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
