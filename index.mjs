import inquirer from 'inquirer';
import fs from "fs/promises";

let response = await inquirer 
.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of your project:',
      },   
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please provide a description of your project:',
      },   
      {
        type: 'input',
        name: 'installationInstructions',
        message: 'Please provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions:',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Please list any contributors to the project:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'What license will you use for your project?',
        choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License'],
        filter(val) {
            return val.toLowerCase();
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests have you completed?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'List  any faq to include',
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      }
])

let readmeText = '# Project Description ${answers.projectTitle}'



fs.writeFile("README.md", readmeText)