const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  {
      type: "input",
      name: "title",
      message: "What's the name of the project?"
  },
  {
      type: "input",
      name: "description",
      message: "Please describe the project."
  },
  {
      type: "input",
      name : "installation",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
  },
  {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use."
  },
  {
      type: "list",
      name: "license",
      message: "What's the license for the project?",
      choices: [
          "apache-2.0",
          "gpl-3.0",
          "mit",
          "mpl-2.0",
          "osl-3.0",
          "unlicense"
      ]
  },
  {
      type: "input",
      name:"contributing",
      message: "What are your contributing guidlines?"
  },
  {
      type: "input",
      name: "tests",
      message: "How is testing perfomed on the project?"
  },
  {
      type: "input",
      name: "username",
      message: "What's your GitHub username?"
  },
  {
      type: "input",
      name: "email",
      message: "What is your GitHub email for questions and feedback? "
  }
];

// function writeToFile(fileName, data) {
// }

async function init() {

  const data =  await inquirer.prompt(questions);
  const readMe = generateMarkdown(data);

  await writeFileAsync("README.md", readMe);
}

init();
