// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please enter contributors:',
        name: 'contribution'
    },
    {
        type: 'list',
        message: 'Please select a license:',
        name: 'license',
        choices: ['Apache', 'BSD', 'GNU', 'IBM', 'MIT', 'Mozilla']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markdownText = generateMarkdown(data)
    fs.writeFile(fileName, markdownText, (err) =>
        err ? console.log(err): console.log('README successfully created!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
