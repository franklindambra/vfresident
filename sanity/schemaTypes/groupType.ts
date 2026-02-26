import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const groupType = defineType({
  name: "groups",
  title: "Groups",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "name",
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
      name: "description",
      type: "text",
    }),
    defineField({
      name: "displayOrder",
      type: "number",
      initialValue: 999,
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "galleryImage" }],
        },
      ],
      description: "Select images for the unique gallery of this group.",
    }),
  ],
});
