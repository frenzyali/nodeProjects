import inquirer from "inquirer";
// Project by Syed Ali Hussain

interface Student {
    name: string,
    studentId: number,
    courses: string[],
    balance: number
}

interface Course {
    name: string,
    fee: number
}

let students: Student[] = [];
let courses: Course[] = [];          // ==> These are program variables that manage the program and isRunning is used for while loop!
let isRunning: boolean = true;

while(isRunning){                                        // In this block of whole code, it has the initial input for the user!
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "What would you like to do?",
            choices: ["Add Student", "Add Course", "Enroll student in course", "Show status", "Exit"]
        }
    ])
    if (answer.option === 'Add Student') {
        console.clear()
        await addStudent();
    } else if (answer.option === 'Add Course') {
        console.clear()
        await addCourse();
    } else if (answer.option === 'Enroll student in course') {
        console.clear()
        await enrollStudent();
    }else if (answer.option === 'Show status') {
        console.clear()
        await showStatus();
    } else if (answer.option === 'Exit') {
        console.log('Goodbye!');
        break;
    }
}


function generateStudentId(): number {                           // This function is used to generate a unique 5 digit number for the student ID
    return Math.floor((Math.random() * 89000) + 10000)
}

async function addStudent() {
    let nameInput = await inquirer.prompt({
        type: 'input',                                              // This function is used to add students to the "students" array
        name: 'studentName',
        message: 'Enter student name:'
    });
    let student: Student = {
        name: nameInput.studentName,
        studentId: generateStudentId(),
        courses: [],
        balance: 0,
    }
    students.push(student);
    console.log(`Student '${student.name}' added successfully.`);
}

async function addCourse() {
    let courseInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter course name:'
        },                                                                      // This function is used to add new courses to the "courses" array
        {
            type: 'number',
            name: 'fee',
            message: 'Enter course fee:'
        }
    ]);
    let course: Course = {
        name: courseInput.name,
        fee: courseInput.fee
    }
    courses.push(course);
    console.log(`Course '${course.name}' added successfully.`);
}

async function enrollStudent() {
    let studentNames: string[] = students.map(student => student.name);
    let courseNames: string[] = courses.map(course => course.name);            // ==> This is used to take the name of the students and courses from the student of 
                                                                               // "students" array and "courses" array and makes a new array out of those names

    let enrollInput = await inquirer.prompt([
        {
            type: 'list',
            name: 'studentName',
            message: 'Select student:',
            choices: studentNames
        },                                                                   // This function is used to use the students from "students" array and courses from
                                                                            // "courses" array and enroll the students on the behalf of that data
        {
            type: 'list',
            name: 'courseName',
            message: 'Select course:',
            choices: courseNames
        }
    ]);

    
    let student = students.find(student => student.name === enrollInput.studentName); //This is used to find the accurate names from the studentname and coursename array
    let course = courses.find(course => course.name === enrollInput.courseName);

    
    if (student && course) {
        student.courses.push(enrollInput.courseName); // Add course to student's enrolled courses
        student.balance += course.fee;    // Increase student's balance by course fee
        console.log(`Enrolled '${enrollInput.studentName}' in '${enrollInput.courseName}' successfully.`);
    } else {
        console.log('Student or course not found.');
    }
}

function showStatus() {
    console.log('\nStudent Status:');
    students.forEach(student => {
        console.log(`\nName: ${student.name}`);
        console.log(`Student ID: ${student.studentId}`);                // ==> This shows the whole status of the students and their data
        console.log(`Balance: $${student.balance}`);
        if (student.courses.length > 0) {
            console.log('Courses Enrolled:');
            student.courses.forEach(course => console.log(`- ${course}`));
        } else {
            console.log('No courses enrolled.');
        }
    });
}



