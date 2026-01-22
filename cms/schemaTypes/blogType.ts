import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
            {
              name: "caption",
              title: "Caption",
              type: "text",
            },
          ],
        },
        {
          type: "object",
          name: "video",
          title: "Video",
          fields: [
            {
              name: "url",
              title: "Video URL",
              type: "url",
              validation: (rule) =>
                rule.uri({
                  scheme: ["https"],
                }),
            },
            {
              name: "caption",
              title: "Caption",
              type: "text",
            },
          ],
        },
        {
          type: "object",
          name: "code",
          title: "Code Block",
          fields: [
            {
              name: "code",
              title: "Code",
              type: "text",
              validation: (rule) => rule.required(),
            },
            {
              name: "language",
              title: "Language",
              type: "string",
              options: {
                list: [
                  { title: "JavaScript", value: "javascript" },
                  { title: "TypeScript", value: "typescript" },
                  { title: "Python", value: "python" },
                  { title: "HTML", value: "html" },
                  { title: "CSS", value: "css" },
                  { title: "JSON", value: "json" },
                  { title: "Bash", value: "bash" },
                  { title: "Plain Text", value: "text" },
                ],
              },
              initialValue: "text",
            },
            {
              name: "filename",
              title: "Filename (optional)",
              type: "string",
            },
          ],
        },
        {
          type: "object",
          name: "separator",
          title: "Separator",
          fields: [
            {
              name: "style",
              title: "Style",
              type: "string",
              options: {
                list: [
                  { title: "Default", value: "default" },
                  { title: "Dashed", value: "dashed" },
                  { title: "Dotted", value: "dotted" },
                ],
              },
              initialValue: "default",
            },
          ],
        },
      ],
    }),
  ],
});
