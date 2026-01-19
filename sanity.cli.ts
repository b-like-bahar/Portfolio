import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "be2t44ka",
    dataset: "production",
  },
  deployment: {
    autoUpdates: true,
  },
  typegen: {
    path: "./lib/sanity/**/*.{ts,tsx}",
    schema: "./cms/schema.json",
    generates: "./lib/sanity/types.ts",
    overloadClientMethods: true,
  },
});
