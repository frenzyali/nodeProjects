import inquirer from "inquirer";
let tasks = [];
console.log("********** To Do List Project **********");
console.log("**************  Welcome  ***************");
while (true) {
    let answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Choose an action:',
            choices: ['Add task', 'Remove task', 'List tasks', 'Exit']
        }
    ]);
    switch (answer.action) {
        case 'Add task':
            let addtask = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'task',
                    message: 'Enter the task:'
                }
            ]);
            tasks.push(addtask.task);
            console.clear();
            console.log('Task added successfully!');
            break;
        case 'Remove task':
            if (tasks.length === 0) {
                console.log('No tasks available to remove.');
            }
            let removetask = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'taskIndex',
                    message: 'Select a task to remove',
                    choices: tasks.map((task, index) => ({ name: `${index + 1}. ${task}`, value: index }))
                }
            ]);
            tasks.splice(removetask.taskIndex, 1);
            console.clear();
            console.log('Task removed successfully!');
            break;
        case 'List tasks':
            if (tasks.length === 0) {
                console.clear();
                console.log('No tasks available.');
            }
            else {
                console.log('Tasks:');
                tasks.forEach((task, index) => {
                    console.log(`${index + 1}. ${task}`);
                });
            }
            break;
        case 'Exit':
            console.log('Exiting ToDoList. Goodbye!');
            process.exit(0);
    }
}
