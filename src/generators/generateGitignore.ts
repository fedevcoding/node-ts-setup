export default function generateGitignore(distFolder: string) {
  return `node_modules
package-lock.json
.env
.env.dev
${distFolder}`;
}
