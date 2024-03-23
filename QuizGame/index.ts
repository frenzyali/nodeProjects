#! /usr/bin/env node

import inquirer from "inquirer";

console.log("********** General Science Quiz By Ali **********");
console.log("******************* Welcome ***************");
console.log("****** You will have total 6 Questions ******");
console.log("************** Let's Start **************")
let CorrectAnswers = 0;
let IncorrectAnswers = 0;

let answer = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "Which of the following is NOT a primary color of light?",
        choices: ["Red", "Blue", "Green", "Yellow"]
    }
])
if(answer.question == "Yellow"){
    CorrectAnswers++;
}else{
    IncorrectAnswers++
}

let answer2 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "What is the chemical symbol for the element gold?",
        choices: ["Au", "Ag", "Fe", "Pt"]
    }
])
if(answer2.question == "Au"){
    CorrectAnswers++;
}else{
    IncorrectAnswers++
}

let answer3 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "Which of the following is NOT a type of simple machine?",
        choices: ["Gear", "Pulley", "Screw", "Lever"]
    }
])
if(answer3.question == "Gear"){
    CorrectAnswers++;
}else{
    IncorrectAnswers++
}
let answer4 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "What is the main function of the mitochondria in a cell?",
        choices: ["Cellular Respiration", "Protein Synthesis", "Photosynthesis", "Storage of genetic information"]
    }
])
if(answer4.question == "Cellular Respiration"){
    CorrectAnswers++
}else{
    IncorrectAnswers++
}
let answer5 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "What is the freezing point of water on the Celsius scale?",
        choices: ["0°C", "32°C", "100°C", "-273°C"]
    }
])
if(answer5.question == "0°C"){
    CorrectAnswers++
}else{
    IncorrectAnswers++
}
let answer6 = await inquirer.prompt([
    {
        type: "list",
        name: "question",
        message: "Which of the following is a renewable source of energy?",
        choices: ["Coal", "Natural Gas", "Solar Power", "Nuclear Power"]
    }
])
if(answer6.question == "Solar Power"){
    CorrectAnswers++
}else{
    IncorrectAnswers++
}

console.log(`Your correct answers are:${CorrectAnswers}`)
console.log(`Your incorrect answers are:${IncorrectAnswers}`)
