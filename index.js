const inquirer = require("inquirer")

inquirer
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
        },
        {
            name: 'continue',
            message: 'Would you like to add another team member?',
            type: 'list',
            choices: ['Add engineer', 'Add intern', 'Finish team']
        }
    ])
    .then(answers => {
        if (answers.continue == 'Add engineer') {
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
                        name: 'gitHub',
                        message: 'Enter GitHub username',
                        type: 'input',
                        default: 'shanep42'
                    },
                    {
                        name: 'continue',
                        message: 'Would you like to add another team member?',
                        type: 'list',
                        choices: ['Add engineer', 'Add intern', 'Finish team']
                        // TODO: How to go back to a "main menu"? The way I'm doing this it would be nested inquirer prompts forever
                    }])

        } else if (answers.continue == 'Add intern') {
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
                    },
                    {
                        name: 'continue',
                        message: 'Would you like to add another team member?',
                        type: 'list',
                        choices: ['Add engineer', 'Add intern', 'Finish team']
                    }
                ])
        } else { }


    })