import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  projectId: "be2t44ka",
  dataset: "production",
  schema: {
    types: schemaTypes,
  },
});
