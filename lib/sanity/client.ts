import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "be2t44ka",
  dataset: "production",
  apiVersion: "2026-01-19",
  useCdn: false,
});
