export default function generatePackage(
  packageName: string,
  distFolder: string,
  useAliases: boolean,
  usePrisma: boolean,
  useExpress: boolean,
  useEslint: boolean
) {
  const dependencies = [
    usePrisma && { "@prisma/client": "^5.0.0" },
    useExpress && {
      cors: "^2.8.5",
      express: "^4.18.2",
    },
    useAliases && { "module-alias": "^2.2.3" },
    { dotenv: "^16.3.1" },
  ].filter(Boolean);

  const devDependencies = [
    useExpress && { "@types/cors": "^2.8.12", "@types/express": "^4.17.17" },
    usePrisma && { prisma: "^5.0.0" },
    useAliases && { "tsconfig-paths": "^4.2.0" },
    useEslint && {
      eslint: "^8.56.0",
      "@typescript-eslint/eslint-plugin": "^6.16.0",
      "@typescript-eslint/parser": "^6.16.0",
    },
    {
      "tsc-watch": "^6.0.4",
      "@types/node": "^20.3.1",
      typescript: "^5.1.3",
      prettier: "^2.8.7",
    },
  ].filter(Boolean);

  const packageJson: {
    [key: string]: unknown;
  } = {
    name: packageName.replaceAll(" ", "-").toLowerCase(),
    version: "1.0.0",
    description: "",
    main: `${distFolder}/index.js`,
    scripts: {
      dev: `tsc-watch --onSuccess "npm start"`,
      start: `node ${distFolder}/index.js`,
      build: "tsc",
      pretty: "prettier --write .",
      lint: "tsc --noEmit && eslint . --ext .ts",
    },
    keywords: [],
    author: "",
    license: "ISC",
    dependencies: Object.assign({}, ...dependencies),
    devDependencies: Object.assign({}, ...devDependencies),
  };

  if (useAliases) {
    packageJson["_moduleAliases"] = {
      "@": distFolder,
    };
  }

  return JSON.stringify(packageJson, null, 2);
}
