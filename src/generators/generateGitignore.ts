export default function generateGitignore(distFolder: string) {
  return `node_modules
.env
.env.dev
${distFolder}`;
}
