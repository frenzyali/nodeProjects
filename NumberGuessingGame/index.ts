import inquirer from "inquirer";

function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

let numberOfTries = 5;
let randomNumber: number = parseInt(getRandomNumber(1, 100).toString())  



console.log("********** Welcome to Ali's Number Guessing Game **********")
console.log("\nWe will be choosing a random number between 1 and 100 and you have to guess what the number is!")
console.log("\nLets Start!\n")

for(let i = 0; i < numberOfTries; i++ ){
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "response",
            message: "What is the number: "
        }
    ])


    if(answer.response == randomNumber){
        console.log("Congratulations, You guessed the correct number")
        process.exit(1)
    }else{
        console.log("Wrong Answer")
    }
    
}
console.log("You have run out of your tries!")
process.exit(1)