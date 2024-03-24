import inquirer from "inquirer";
// Game Data
let running = true;
// Enemy Data
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin", "Vampire"];
let maxEnemyHealth = 75;
let maxEnemyAttackDamage = 25;
// Player Data
let playerHealth = 100;
let maxPlayerAttackDamage = 50;
let numHealthPots = 3;
let healthPotHealAmount = 30;
let healthPotDropChance = 50; // ==> 50% chance to drop a health potion whenever a enemy dies!
console.log("\t Welcome to the Dungeon!");
GAME: while (running) {
    console.log("----------------------------------------------");
    // Selecting a random enemy from the array "enemies" and randomizing their health!
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    console.log(`\t> A ${enemy} has appeared! \n`);
    while (enemyHealth > 0) {
        console.log(`\t> Your health: ${playerHealth}`);
        console.log(`\t> ${enemy}'s HP: ${enemyHealth}`);
        let answer = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: ">What would you like to do?",
                choices: ["Attack", "Drink Health Potion", "Run!"]
            }
        ]);
        if (answer.option == "Attack") {
            let damageDealt = Math.floor(Math.random() * maxPlayerAttackDamage);
            let damageTaken = Math.floor(Math.random() * maxEnemyAttackDamage);
            enemyHealth -= damageDealt;
            playerHealth -= damageTaken;
            console.log(`\t> You striked the ${enemy} for ${damageDealt}`);
            console.log(`\t> ${enemy} striked you for ${damageTaken}`);
            if (playerHealth < 1) {
                console.log(`\t> You have taken too much damage, you are too weak to continue!`);
                break;
            }
        }
        else if (answer.option == "Drink Health Potion") {
            if (numHealthPots > 0) {
                playerHealth += healthPotHealAmount;
                numHealthPots--;
                console.log(`\t> You drank a health potion, healing yourself for ${healthPotHealAmount}.\n\t You have now have ${playerHealth} HP.\n\t You have ${numHealthPots} health potions left!`);
            }
            else {
                console.log(`\t> You have no health options left! Kill more enemies for a chance to get health potions!`);
            }
        }
        else if (answer.option == "Run!") {
            console.log(`\t> You ran away from the ${enemy}!`);
            continue GAME;
        }
    }
    if (playerHealth < 1) {
        console.log("\t> You escaped from the dungeon, too weak from battle");
        break;
    }
    console.log("----------------------------------------------");
    console.log(`\t> ${enemy} was defeated!`);
    console.log(`\t> You have ${playerHealth} HP left.`);
    if (Math.floor(Math.random() * 100) < healthPotDropChance) {
        numHealthPots++;
        console.log(`\t> The ${enemy} dropped a health potion!`);
        console.log(`\t> You now have ${numHealthPots} health potions left!`);
    }
    console.log("----------------------------------------------");
    let answer2 = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: ">What would you like to do now?",
            choices: ["Continue fighting", "Exit Dungeon"]
        }
    ]);
    if (answer2.option == "Continue fighting") {
        console.log("You have continued on your adventure!");
        continue;
    }
    else if (answer2.option == "Exit Dungeon") {
        console.log("You exit the dungeon, successful from your adventure!");
        break;
    }
    console.log("----------------------------------------------");
    console.log("\t Thanks for playing!");
}
