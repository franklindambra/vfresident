import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import { blockContentType } from "./blockContentType";
import { authorType } from "./authorType";
import { categoryType } from "./categorytype";
import { groupType } from "./groupType";
import { eventType } from "./eventType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    groupType,
    eventType,
  ],
};
