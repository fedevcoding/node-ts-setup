export default function generateConstants(useAliases: boolean) {
  return `import { getEnv } from "${
    useAliases ? "@/utils/getEnv" : "../utils/index"
  }";
export const PORT = parseInt(getEnv("PORT"));`;
}
