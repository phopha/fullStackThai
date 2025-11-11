// import "dotenv/config"
// import { defineConfig, env } from "prisma/config";
// import * as path from "node:path";

// export default defineConfig({
//   // schema: "prisma/schema.prisma",
//   schema: path.join("prisma", "schema.prisma"),
//   migrations: {
//     // path: "prisma/migrations",
//     path: path.join("prisma", "migrations"),
//     seed: "ts-node -r tsconfig-paths/register prisma/seed.ts",
//   },
//   engine: "classic",
//   datasource: {
//     url: env("DATABASE_URL"),
//   },
// });

import "dotenv/config"
import { defineConfig, env } from "prisma/config"
import path from "path"

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: "ts-node -r tsconfig-paths/register prisma/seed.ts",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
})