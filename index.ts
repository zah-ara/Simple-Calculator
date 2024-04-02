#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the opertors to perform opertion",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

console.log(answer);
if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
  } else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  } else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
  } else {console.log("please select valid operator")}