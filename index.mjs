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
        type: 'list',
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
        message: 'What are the test instructions for this app?',
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

.then((answers) => {
    const readmeContents = `# ${answers.projectTitle}

${answers.projectDescription}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributors](#contributors)
4. [License](#license)
5. [Questions](#questions)

## Installation

${answers.installationInstructions}

## Usage

${answers.usage}

## Contributors

${answers.contributors}

## License

This project is licensed under the ${answers.license} license.

## Tests

${answers.tests}

## Questions

If you have any questions about the app, feel free to contact [${answers.githubUsername}](https://github.com/${answers.githubUsername}) directly at ${answers.email}.
`;

    fs.writeFile('README.md', readmeContents, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file generated!');
      }
    });
  });