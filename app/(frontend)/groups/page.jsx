import { getgroups } from "@/app/data-access/actions";
import Title from "@/components/Title";
import Link from "next/link";

export default async function Groups() {
  const groups = await getgroups();

  return (
    <div>
      <Title text="Clubs & Groups" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((group) => (
          <Link
            key={group._id}
            href={`/groups/${group.slug.current}`}
            className="p-4 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-shadow"
          >
            <h3 className="font-bold text-lg">{group.name}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {group.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
