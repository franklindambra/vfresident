import { HeartIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homeCareType = defineType({
  name: "homeCare",
  title: "Home Care",
  type: "document",
  icon: HeartIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "blockContent",
      title: "Body Copy",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
