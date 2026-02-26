import { ImagesIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const galleryImageType = defineType({
  name: "galleryImage",
  title: "Images",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title / Identifying Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "altText",
      type: "string",
      title: "Alternative Text",
      description: "Important for accessibility and SEO.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      type: "text",
      title: "Caption",
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
