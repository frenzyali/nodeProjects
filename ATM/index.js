#! /usr/bin/env node
import inquirer from "inquirer";
let userId = "Pakistan";
let userPass = 1947;
let balance = 2000;
let isRunning = true;
console.log("********** Ali's ATM Project**********");
console.log("*********Welcome To My ATM************");
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "UserID",
        message: "Please Enter your User ID: "
    },
    {
        type: "number",
        name: "UserPassword",
        message: "Please Enter your User Password: "
    }
]);
while (isRunning) {
    let result = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: ["Check Balance", "Withdraw Money", "Deposit Money", "Exit"]
        }
    ]);
    if (result.choice == "Check Balance") {
        console.clear();
        console.log(`Your Current balance is: Rs.${balance}`);
    }
    else if (result.choice == "Withdraw Money") {
        let withdrawAmount = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: "Enter amount to withdraw: "
            }
        ]);
        if (withdrawAmount.amount <= balance) {
            balance -= withdrawAmount.amount;
            console.clear();
            console.log(`Successfully withdrawn: ${withdrawAmount.amount}. Current Balance: ${balance}`);
        }
        else {
            console.clear();
            console.log("Insufficient Balance");
        }
    }
    else if (result.choice == "Deposit Money") {
        let DepositAmount = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: "Enter amount to deposit: "
            }
        ]);
        balance += DepositAmount.amount;
        console.clear();
        console.log(`Successfully deposited: ${DepositAmount.amount}. Current Balance: ${balance}`);
    }
    else if (result.choice == "Exit") {
        console.clear();
        console.log("Exitting the ATM");
        isRunning = false;
        process.exit(1);
    }
}
