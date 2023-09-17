#!/usr/bin/env node
import init from "./init.js";
import sayHi from "./hello.js";

main();
async function main() {
  const args = process.argv;

  const functionName = args?.[2];

  if (!functionName) {
    console.log("Please provide a function name");
    return;
  } else if (functionName === "init") init();
  else if (functionName === "sayhi") {
    const name = args?.[3]?.substring(2);
    if (!name) console.log("Please provide a name");
    else sayHi(name);
  }
}
