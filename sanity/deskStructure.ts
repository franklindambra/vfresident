import type { StructureResolver } from "sanity/structure";
import {
  DocumentTextIcon,
  UsersIcon,
  TagIcon,
  ImagesIcon,
  CalendarIcon,
  UserIcon,
  HomeIcon,
  HeartIcon,
  WrenchIcon,
} from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // 1. Images First
      S.documentTypeListItem("galleryImage").title("Images").icon(ImagesIcon),

      S.divider(),

      // 2. Articles Section
      S.listItem()
        .title("Articles")
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title("Articles & Authors")
            .items([
              S.documentTypeListItem("post")
                .title("Articles")
                .icon(DocumentTextIcon),
              S.documentTypeListItem("author").title("Authors").icon(UserIcon),
              S.documentTypeListItem("category")
                .title("Categories")
                .icon(TagIcon),
            ]),
        ),

      S.divider(),

      // 3. Events Area
      S.documentTypeListItem("event").title("Events").icon(UsersIcon),

      S.divider(),

      // 4. Resources Section
      S.listItem()
        .title("Resources")
        .icon(TagIcon)
        .child(
          S.list()
            .title("Resources")
            .items([
              S.documentTypeListItem("property")
                .title("Property")
                .icon(HomeIcon),
              S.documentTypeListItem("homeCare")
                .title("Home Care")
                .icon(HeartIcon),
              S.documentTypeListItem("tradesperson")
                .title("Tradespeople")
                .icon(WrenchIcon),
            ]),
        ),

      S.divider(),

      // 5. Community / Groups & Clubs
      S.documentTypeListItem("groups").title("Groups & Clubs").icon(UsersIcon),

      // Filter out types that we've already explicitly included to avoid duplicates
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "post",
            "author",
            "category",
            "groups",
            "event",
            "galleryImage",
            "property",
            "homeCare",
            "tradesperson",
          ].includes(listItem.getId() as string),
      ),
    ]);
