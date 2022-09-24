const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

var team = []

addManager = () => {
    return inquirer
        .prompt([
            {
                name: 'name',
                message: "Enter manager name",
                type: 'input',
                default: 'John Doe'
            },
            {
                name: 'employeeID',
                message: 'Enter ID number',
                type: 'input',
                default: Math.floor(Math.random() * 6)
            },
            {
                name: 'email',
                message: 'Enter email address',
                type: 'input',
                default: 'user@fakemail.com'
            },
            {
                name: 'officeNumber',
                message: 'Enter office number',
                type: 'input',
                default: Math.floor(Math.random() * 10)
            }
        ])
        .then(answers => {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log('MANAGER ADDED: ', manager)
            team.push(manager)
            continueAdding()
        })
}

continueAdding = () => {
    inquirer
        .prompt([
            {
                name: 'nextAction',
                type: 'list',
                choices: ['Add Engineer', 'Add Intern', 'Finish building team']
            }
        ])
        .then(answer => {
            if (answer.nextAction == 'Add Engineer') {
                addEngineer();
            }
            else if (answer.nextAction == 'Add Intern') {
                addIntern();
            }
            else {
                console.log(team)
            }
        })
}

addEngineer = () => {
    inquirer
        .prompt([
            {
                name: 'name',
                message: "Enter engineer name",
                type: 'input',
                default: 'John Doe'
            },
            {
                name: 'employeeID',
                message: 'Enter ID number',
                type: 'input',
                default: Math.floor(Math.random() * 6)
            },
            {
                name: 'email',
                message: 'Enter email address',
                type: 'input',
                default: 'user@fakemail.com'
            },
            {
                name: 'github',
                message: 'Enter GitHub username',
                type: 'input',
                default: 'shanep42'
            }])
        .then(answers => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            console.log('ENGINEER ADDED: ', engineer)
            team.push(engineer)
            continueAdding()
        })
}

addIntern = () => {
    inquirer
        .prompt([
            {
                name: 'name',
                message: "Enter intern name",
                type: 'input',
                default: 'John Doe'
            },
            {
                name: 'employeeID',
                message: 'Enter ID number',
                type: 'input',
                default: Math.floor(Math.random() * 6)
            },
            {
                name: 'email',
                message: 'Enter email address',
                type: 'input',
                default: 'user@fakemail.com'
            },
            {
                name: 'school',
                message: 'Enter school',
                type: 'input',
                default: 'John H. Doe University'
            }
        ])
        .then(answers => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            console.log('INTERN ADDED: ', intern)
            team.push(intern)
            continueAdding()
        })
}

writeHTML = () => {
    const template = fs.readFileSync('./template.html', "utf-8")
    let newDoc = eval("`" + template + "`")
    fs.writeFileSync('./index.html', newDoc)
}

writeHTML()