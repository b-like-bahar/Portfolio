import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  projectId: "be2t44ka",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
