import inquirer from "inquirer";
console.log("\t --- Welcome to Ali's Bank System ---");
class BankAccount {
    balance;
    firstName;
    lastName;
    phoneNumber;
    gender;
    age;
    constructor(initialBalance, firstName, lastName, phoneNumber, gender, age) {
        this.balance = initialBalance;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.age = age;
    }
    credit(amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            if (amount > 100) {
                this.balance -= 1;
            }
            console.log("Your amount has been credited successfully");
        }
    }
    debit(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Transaction successful. New balance: ${this.balance}`);
        }
        else {
            console.log("Insufficient funds!");
        }
    }
    getBalance() {
        console.log(`Current balance: ${this.balance}`);
    }
    getAccountInfo() {
        console.log("Account Information:");
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Phone Number: ${this.phoneNumber}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Age: ${this.age}`);
        console.log(`Current Balance: ${this.balance}`);
    }
}
async function createAccount() {
    let accountInfo = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter your first name:'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter your last name:'
        },
        {
            type: 'input',
            name: 'phoneNumber',
            message: 'Enter your phone number:'
        },
        {
            type: 'list',
            name: 'gender',
            message: 'Select your gender:',
            choices: ['Male', 'Female', 'Other']
        },
        {
            type: 'number',
            name: 'age',
            message: 'Enter your age:'
        }
    ]);
    let initialBalanceInput = await inquirer.prompt([
        {
            type: 'number',
            name: 'initialBalance',
            message: 'Enter initial balance:'
        }
    ]);
    return new BankAccount(initialBalanceInput.initialBalance, accountInfo.firstName, accountInfo.lastName, accountInfo.phoneNumber, accountInfo.gender, accountInfo.age);
}
let account = await createAccount();
let isRunning = true;
while (isRunning) {
    let answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Credit', 'Debit', 'Check Balance', 'Check Account Info', 'Exit']
        }
    ]);
    if (answer.action == "Credit") {
        let creditInput = await inquirer.prompt([
            {
                type: 'number',
                name: 'creditAmount',
                message: 'Enter amount to credit:'
            }
        ]);
        account.credit(creditInput.creditAmount);
    }
    else if (answer.action == "Debit") {
        let debitInput = await inquirer.prompt([
            {
                type: 'number',
                name: 'debitAmount',
                message: 'Enter amount to debit:'
            }
        ]);
        account.debit(debitInput.debitAmount);
    }
    else if (answer.action == "Check Balance") {
        account.getBalance();
    }
    else if (answer.action == "Exit") {
        console.log("Goodbye!");
        isRunning = false;
        process.exit(1);
    }
    else if (answer.action == "Check Account Info") {
        account.getAccountInfo();
    }
    else {
        console.log("Invalid Action");
    }
}
