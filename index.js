const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const { report } = require("process");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function questionArr() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a description of your project:",
    },
    {
      type: "list",
      name: "license",
      message: "What license did you use?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "installations",
      message: "What are the instructions for installation?",
    },
    {
      type: "input",
      name: "tests",
      message: "What are the intructions for running tests?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage information?",
    },
    {
      type: "input",
      name: "contribute",
      message: "What are you rules for contribution?",
    },
    {
      type: "input",
      name: "author",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
}

function generateMD(response) {
  let badge = "";
  if (response.license == "MIT") {
    badge =
      "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)";
  } else if (response.license == "APACHE 2.0") {
    badge =
      "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (response.license == "GPL 3.0") {
    badge =
      "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (response.license == "BSD 3") {
    badge =
      "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  }

  return `# ${response.title}  ${badge}
${response.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation:
Open console and run the following
\`\`\`${response.installations}\`\`\`
### Usage:
${response.usage}
### License:
This project is licensed under:
${response.license}
### Contributing:
${response.contribute}
### Tests:
In order to test open the console and run the following:
\`\`\`${response.tests}\`\`\`
### Questions:
If you have any questions contact me on [GitHub](https://github.com/${response.username}) or contact 
me at ${response.email}
![picture](https://github.com/${response.username}.png?size=80)
    
 `;
}

questionArr()
  .then(function (response) {
    const markdown = generateMD(response);
    return writeFileAsync("./generated/generatedREADME.md", markdown);
  })
  .then(function () {
    console.log("Generating README.md ...");
  })
  .catch(function (err) {
    console.log(err);
  });
