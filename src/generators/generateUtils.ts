export default function generateUtils() {
  return `export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getEnv = (key: string): string => {
  const env = process.env[key];
  if (!env) {
    console.error(\`Environment variable \${key} is not defined\`);
    process.exit(1);
  }
  return env;
};`;
}
