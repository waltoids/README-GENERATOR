const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
      name: "title",
      message: "What's the name of the project?"
  },
  {
      name: "description",
      message: "Please describe the project."
  },
  {
      name : "installation",
      message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
  },
  {
      name: "usage",
      message: "Provide instructions and examples for use."
  },
  {
      name: "license",
      message: "What's the license for the project?"
  },
  {
      name:"contributing",
      message: "What are your contributing guidlines?"
  },
  {
      name: "tests",
      message: "How is testing perfomed on the project?"
  },
  {
      name: "username",
      message: "What's your GitHub username?"
  },
  {
      name: "email",
      message: "What is your GitHub email for questions and feedback? "
  }


];

function writeToFile(fileName, data) {
}

function init() {

}

init();
