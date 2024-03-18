import inquirer from "inquirer";
let isRunning = true;
console.log("********** Word Counter By Ali **********");
console.log("*************** Welcome ***************");
while (isRunning) {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "paragraph",
            message: "Type the paragraph you want to count the letters of: "
        }
    ]);
    function LetterCount(paragraph) {
        return paragraph.replace(/\s+/g, '').length;
    }
    function WordCount(paragraph) {
        return paragraph.trim().split(/\s+/).length;
    }
    console.log("The number of letters in your paragraph counts to: " + LetterCount(answer.paragraph));
    console.log("The number of words in your paragraph counts to: " + WordCount(answer.paragraph));
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
