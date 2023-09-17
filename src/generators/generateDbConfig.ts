export default function generateConfigDb() {
  return `import { PrismaClient } from "@prisma/client";

export const DB = new PrismaClient();

export async function connectDb() {
  try {
    await DB.$connect();
    console.log("🚀 Database connected");
  } catch (e) {
    console.log(e);
  }
}`;
}
