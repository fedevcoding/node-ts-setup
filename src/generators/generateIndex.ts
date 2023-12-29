export default function generateIndex(
  useExpress: boolean,
  useAliases: boolean,
  usePrisma: boolean,
) {
  const index = useExpress
    ? `${useAliases && 'require("module-alias/register")'}

import dotenv from "dotenv";
dotenv.config();
${
  usePrisma
    ? `import { connectDb } from "${
        useAliases ? "@/config/db" : "./config/db"
      }";`
    : ""
}
import express from "express";
import cors from "cors";

const port = process.env.PORT || 3000;
const app = express();
app.use(cors({ origin: "*"}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  console.log(\`App listening at http://localhost:\${port}\`);
  ${usePrisma ? "await connectDb();" : ""}
});`
    : `${useAliases && 'require("module-alias/register")'}

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
