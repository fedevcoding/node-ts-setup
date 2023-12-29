export default function generateConstants(useAliases: boolean) {
  return `import { getEnv } from "${
    useAliases ? "@/utils/index" : "../utils/index"
  }";
export const PORT = parseInt(getEnv("PORT"));`;
}
