import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Articles",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "author" },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: false,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "metaDescription",
      type: "text",
      description:
        "The ideal length for a meta description is 150-160 characters to ensure it displays properly in search engine results without being truncated.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "authors.0.name",
      allAuthors: "authors",
      media: "mainImage",
    },
    prepare({ title, author, allAuthors, media }) {
      const authorName = author || "Unknown";
      const additionalAuthors =
        allAuthors?.length > 1 ? ` + ${allAuthors.length - 1} more` : "";

      return {
        title,
        media,
        subtitle: `by ${authorName}${additionalAuthors}`,
      };
    },
  },
});
