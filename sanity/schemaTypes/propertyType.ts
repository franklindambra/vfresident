import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const propertyType = defineType({
  name: "property",
  title: "Property",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Contact Point",
      description: "e.g 'General manager, Report Issues'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "person",
      type: "string",
      title: "Title / Identifying Status",
      description:
        "If there is a person associated with this contact enter it here.",
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone Number",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
    defineField({
      name: "url",
      type: "url",
      title: "URL",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
    },
  },
});
