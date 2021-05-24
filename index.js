// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown.js");
const { type } = require("os");
// TODO: Create an array of questions for user input

inquirer
  .prompt(
    [
      {
        type: "input",
        message: "What is your project title?",
        name: "title",
        validate: (value) => {
          if (value) {
            return true;
          } else {
            return "Please enter a project title";
          }
        },
      },
    ],
    {
      type: "input",
      message: "Please describe your project:",
      name: "description",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter a project description";
        }
      },
    },

    {
      type: "input",
      message: "What are the instructions for installation",
      name: "installation",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter the installation instructions";
        }
      },
    },
    {
      type: "input",
      message: "What is the usage information for your project?",
      name: "usage",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter the project usage information";
        }
      },
    },
    {
      type: "input",
      message: "What are the contribution guidelines for your project?",
      name: "contribution",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter your contribution guidlines";
        }
      },
    },
    {
      type: "input",
      message: "What is your project's testing intructions?",
      name: "testing",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter the intructions for testing";
        }
      },
    },
    {
      type: "list",
      message: "what license did you use?",
      name: "licenses",
      choices: ["MIT", "GPL", "Apache", "GNU", "N/A"],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please choose an option";
        }
      },
    },
    {
      type: "input",
      message: "Please enter your Github Username",
      name: "github",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter your github username";
        }
      },
    },
    {
      type: "input",
      message: "Please enter your email adress",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter your email adress";
        }
      },
    }
  )
  .then(({
    title,
    desciption,
    intallation,
    usage,
    contribution,
    testing,
    licenses,
    github,
    email
  })=>{
      const temp = `# ${title}
    *[Installation]{#installation}
    *[usage]{#usage}
    *[contribution]{#contribution}
    *[testing]{#testing}
    *[licenses]{#licenses}
    *[github]{#github}
    *[email]{#email}






      `

  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
