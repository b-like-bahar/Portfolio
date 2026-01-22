import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "be2t44ka",
    dataset: "production",
  },
  deployment: {
    autoUpdates: true,
    appId: "ne1wshr8ityrk70sakix5wuo",
  },
  typegen: {
    path: "./lib/sanity/**/*.{ts,tsx}",
    schema: "./cms/schema.json",
    generates: "./lib/sanity/types.ts",
    overloadClientMethods: true,
  },
});
