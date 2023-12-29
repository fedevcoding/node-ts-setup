export default function generateTsConfig(
  distName: string,
  useAliases: boolean
): string {
  const tsconfig = {
    compilerOptions: {
      target: "ES2022",
      module: "CommonJS",
      rootDir: "./src",
      baseUrl: "./",
      ...(useAliases
        ? {
            paths: {
              "@/*": ["src/*"],
            },
          }
        : {}),
      outDir: `./${distName}`,
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      strict: true,
      noImplicitAny: true,
      skipLibCheck: true,
      noUnusedLocals: false,
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      noUncheckedIndexedAccess: true,
    },
    ...(useAliases
      ? {
          "ts-node": {
            require: ["tsconfig-paths/register"],
          },
        }
      : {}),
  };

  return JSON.stringify(tsconfig, null, 2);
}
