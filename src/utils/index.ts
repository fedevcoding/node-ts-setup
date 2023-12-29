export const initTypeQuestion = [
  {
    type: "list",
    name: "type",
    message: "What do you want to create?",
    choices: ["project", "package"],
    default: "project",
  },
];

export const initQuestions = [
  {
    type: "input",
    name: "packageName",
    message: "what's your package name?",
    default: "my-package",
  },
  {
    type: "input",
    name: "distFolder",
    message: "What is the name of your build folder?",
    default: "dist",
  },
  {
    type: "confirm",
    name: "useEslint",
    message: "Do you want to use eslint?",
    default: true,
  },
  {
    type: "confirm",
    name: "useAliases",
    message: "Do you want to use import aliases (@/utils)?",
    default: true,
  },
  {
    type: "confirm",
    name: "useExpress",
    message: "Do you want to create a basic express app?",
    default: false,
  },
  {
    type: "confirm",
    name: "usePrisma",
    message: "Do you want to use Prisma ORM?",
    default: false,
  },
];

export const databases = [
  {
    type: "list",
    name: "database",
    message: "What database do you want to use?",
    choices: [
      "postgresql",
      "mysql",
      "sqlite",
      "sqlserver",
      "mongodb ",
      "cockroachdb",
    ],
    default: "postgresql",
  },
];
