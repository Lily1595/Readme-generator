import inquirer from 'inquirer';

inquirer 
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
      },
])