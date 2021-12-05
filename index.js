// use inquirere
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

const squad = [];





// what would you like to add.. engineer, manager, intern, option to exit program... then compile data.. then generate html
// refer to mock up -=

// manager name, employee id, email address, and office number, then who to add next


// engineers name, ID, email, and Github username, then who to add next

// intern name, ID, email, and School, then who to add next
function internRole() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?'
        },
        {
            type: 'input',
            name: 'id',
            message:'What is the ID number of the Intern?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the Intern?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the Intern?',
        },
        {
            type: 'list',
            name: 'role',
            message:"Who would you like to add next",
            choices: ['Manager','Engineer', 'I do not want to add anymore members']
        }
    ])
}


// build and compile

//

function ...


