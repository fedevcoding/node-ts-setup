#!/usr/bin/env node

import fs from "fs";
import inquirer from "inquirer";
import { execSync } from "child_process";

import { initQuestionsReturnType } from "./types/index.js";
import { databases, initQuestions } from "./utils/index.js";
import generateTsConfig from "./generators/generateTsConfig.js";
import generatePackage from "./generators/generatePackage.js";
import generateIndex from "./generators/generateIndex.js";
import generateUtils from "./generators/generateUtils.js";
import generateGitignore from "./generators/generateGitignore.js";
import generateConfigDb from "./generators/generateDbConfig.js";
import generateConstants from "./generators/generateConstants.js";

export default async function initProject() {
  try {
    const answers = await inquirer.prompt(initQuestions);

    const { distFolder, packageName, useAliases, useExpress, usePrisma } =
      answers as initQuestionsReturnType;

    let database: string | undefined;
    if (usePrisma) {
      const res = await inquirer.prompt(databases);
      database = res.database;
    }

    const typescriptConfig = generateTsConfig(distFolder, useAliases);
    const packageJson = generatePackage(
      packageName,
      distFolder,
      useAliases,
      usePrisma,
      useExpress
    );
    const indexFile = generateIndex(useExpress, useAliases, usePrisma);
    const utils = generateUtils();
    const constants = useExpress ? generateConstants(useAliases) : "";
    const gitignore = generateGitignore(distFolder);

    fs.mkdirSync("src");
    fs.mkdirSync("src/utils");
    fs.writeFileSync("src/utils/index.ts", utils);
    fs.mkdirSync("src/constants");
    fs.writeFileSync("src/constants/index.ts", constants);
    fs.mkdirSync("src/config");
    fs.writeFileSync("src/index.ts", indexFile);
    fs.writeFileSync("tsconfig.json", typescriptConfig);
    fs.writeFileSync("package.json", packageJson);
    fs.writeFileSync("README.md", "");
    fs.writeFileSync(
      ".env",
      `NODE_ENV=production${useExpress ? "\nPORT=3000" : ""}`
    );
    fs.writeFileSync(".gitignore", gitignore);

    console.log("Installing dependencies...");
    execSync("npm i");

    if (usePrisma) {
      console.log("Installing Prisma...");
      const configDb = generateConfigDb();
      fs.writeFileSync("src/config/db.ts", configDb);
      execSync(`npx prisma init --datasource-provider ${database}`);
    }

    console.log("Project generated successfully!");
  } catch (error: unknown) {
    console.log("An error ocurred while generating the project");
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
