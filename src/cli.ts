#!/usr/bin/env node
import initProject from "./initProject.js";
import initPackage from "./initPackage.js";
import { initTypeQuestion } from "./utils/index.js";
import inquirer from "inquirer";

(async () => {
  const args = process.argv;

  const functionName = args?.[2];

  if (!functionName) {
    const type = await inquirer.prompt(initTypeQuestion);
    if (type.type === "project") initProject();
    else initPackage();
  } else if (functionName === "init-project") initProject();
  else if (functionName === "init-package") initPackage();
  else {
    console.log("Unknown function name");
    return;
  }
})();
