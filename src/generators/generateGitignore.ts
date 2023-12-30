export default function generateGitignore(distFolder: string) {
  return `/node_modules
/${distFolder}
.env
.env.dev`;
}
