// use inquirere
const inquirer = require("inquirer");
// require fs
// const fs = require('fs');

// const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
// require src
const renderHTML = require("./src/renderHTML.js");

// team member array
const squad = [];

// what would you like to add.. engineer, manager, intern, option to exit program... then compile data.. then generate html
// refer to mock up -=

// manager name, employee id, email address, and office number, then who to add next
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Manager?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID number of the Manager?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the Manager?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the Office Number of the Manager?",
  },
  {
    type: "list",
    name: "role",
    message: "Who would you like to add next",
    choices: ["Manager", "Engineer", "Intern", "I do not want to add anymore members"],
  },
];

async function managerRole() {
  await inquirer.prompt(managerQuestions).then((res) => {
    let manager = new Manager(res.name, res.id, res.email, res.officeNumber);
    squad.push(manager);

    if (res.role === "Manager") {
      managerRole();
    } else if (res.role === "Engineer") {
      engineerRole();
    } else if (res.role === "Intern") {
      internRole();
    } else renderHTML(squad);
  });
}

// engineers name, ID, email, and Github username, then who to add next
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Engineer?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID number of the Engineer?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the Engineer?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the GitHub username of the Engineer?",
  },
  {
    type: "list",
    name: "role",
    message: "Who would you like to add next",
    choices: ["Manager", "Engineer", "Intern", "I do not want to add anymore members"],
  },
];
async function engineerRole() {
  await inquirer.prompt(engineerQuestions).then((res) => {
    let engineer = new Engineer(res.name, res.id, res.email, res.github);
    squad.push(engineer);

    if (res.role === "Manager") {
      managerRole();
    } else if (res.role === "Engineer") {
      engineerRole();
    } else if (res.role === "Intern") {
      internRole();
    } else renderHTML(squad);
  });
}

// intern name, ID, email, and School, then who to add next
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Intern?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID number of the Intern?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the Intern?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the school of the Intern?",
  },
  {
    type: "list",
    name: "role",
    message: "Who would you like to add next",
    choices: ["Manager", "Engineer", "Intern", "I do not want to add anymore members"],
  },
];

async function internRole(res) {
  await inquirer.prompt(internQuestions).then((res) => {
    let intern = new Intern(res.name, res.id, res.email, res.school);
    squad.push(intern);

    if (res.role === "Manager") {
      managerRole();
    } else if (res.role === "Engineer") {
      engineerRole();
    } else if (res.role === "Intern") {
      internRole();
    } else renderHTML(squad);
  });
}

// //
function init() {
  managerRole();
}
//
init();
