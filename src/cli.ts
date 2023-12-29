#!/usr/bin/env node
import init from "./init.js";

main();
async function main() {
  const args = process.argv;

  const functionName = args?.[2];

  if (!functionName) {
    console.log("Please provide a function name");
    return;
  } else if (functionName === "init-project") init();
}
