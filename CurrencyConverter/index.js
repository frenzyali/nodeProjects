import inquirer from "inquirer";
let isRunning = true;
console.log("********** Currency Converter By Ali **********");
console.log("****************** Welcome ***************");
while (isRunning) {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "currencyGiven",
            message: "What is your currency?",
            choices: ["Rupees", "Euro", "Pound Sterling", "UAE Dirham", "Dollar"]
        },
        {
            type: "list",
            name: "currencyDesired",
            message: "In which currency would you like to convert it to?",
            choices: ["Rupees", "Euro", "Pound Sterling", "UAE Dirham", "Dollar"]
        },
        {
            type: "number",
            name: "amount",
            message: "Enter amount: "
        }
    ]);
    function RupeesToEuro(money) {
        return money * 0.0033;
    }
    function RupeesToPound(money) {
        return money * 0.0028;
    }
    function RupeesToDirham(money) {
        return money * 0.013;
    }
    function RupeesToDollar(money) {
        return money * 0.0036;
    }
    if (answer.currencyGiven == "Rupees" && answer.currencyDesired == "Euro") {
        console.log("The amount converted is: " + RupeesToEuro(answer.amount));
    }
    if (answer.currencyGiven == "Rupees" && answer.currencyDesired == "Pound Sterling") {
        console.log("The amount converted is: " + RupeesToPound(answer.amount));
    }
    if (answer.currencyGiven == "Rupees" && answer.currencyDesired == "UAE Dirham") {
        console.log("The amount converted is: " + RupeesToDirham(answer.amount));
    }
    if (answer.currencyGiven == "Rupees" && answer.currencyDesired == "Dollar") {
        console.log("The amount converted is: " + RupeesToDollar(answer.amount));
    }
    if (answer.currencyGiven == "Rupees" && answer.currencyDesired == "Rupees") {
        console.log("The amount converted is: " + answer.amount);
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
