// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatemarkdown.js')
console.log("Welcome to My README generator!!")
console.log("Please answer the questions to get a costom README")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: your_Input => {
      if (your_Input) {
        return true;
      } else {
        console.log("Enter a valid response!!!");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'what is the description of your project?',
    name: 'description',
    validate: your_description => {
      if (your_description) {
        return true;
      } else {
        console.log("Enter a valid response!!!");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'what is the instalation instructions for your project?',
    name: 'instalation',
    validate: your_instalation => {
      if (your_instalation) {
        return true;
      } else {
        console.log("Enter a valid response!!!");
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'what is the usage information for your project?',
    name: 'usage',
    validate: your_usage => {
      if (your_usage) {
        return true;
      } else {
        console.log("Enter a valid response!!!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How can users contribute to this project?',
    validate: your_contribution => {
      if (your_contribution) {
        return true;
      } else {
        console.log("Please enter a valid response");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'testing',
    message: 'How does the user test this project?',
    validate: your_test => {
      if (your_test) {
        return true;
      } else {
        console.log("Please enter a valid response");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    massage: 'Enter your GitHub username (required)',
    validate: github_input => {
      if (github_input) {
        return true;
      } else {
        console.log("Please enter a valid response");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: email_input => {
      if (email_input) {
        return true;
      } else {
        console.log("please enter a valid response");
        return false;
      }
    }
  },
]
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
};
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
    console.log(userInput)
    writeToFile("README.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();