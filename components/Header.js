import HeaderClient from "./HeaderClient";

import {
  getgroups
} from "@/app/data-access/actions";

export default async function Header() {
  const groups = await getgroups();

  const sortedGroups = groups.sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999),
  );

  console.log("GROUPS", sortedGroups)



  return (
    <HeaderClient groups={sortedGroups} />
  );
}
