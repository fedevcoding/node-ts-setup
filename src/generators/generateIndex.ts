export default function generateIndex(
  useExpress: boolean,
  useAliases: boolean,
  usePrisma: boolean
) {
  const index = useExpress
    ? `${useAliases ? 'require("module-alias/register")' : ""}

import dotenv from "dotenv";
dotenv.config();
${
  usePrisma
    ? `import { connectDb } from "${
        useAliases ? "@/config/db" : "./config/db"
      }";`
    : ""
}
${
  useAliases
    ? 'import { PORT } from "@/constants";'
    : 'import { PORT } from "./constants";'
}
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*"}));

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, async () => {
  console.log(\`App listening at http://localhost:\${PORT}\`);
  ${usePrisma ? "await connectDb();" : ""}
});`
    : `${useAliases ? 'require("module-alias/register")' : ""}

import dotenv from "dotenv";
${
  usePrisma
    ? `\nimport { connectDb } from "${
        useAliases ? "@/config/db" : "./config/db"
      }";`
    : ""
}
dotenv.config();`;

  return index;
}
