import { getHomeCare } from "@/app/data-access/actions";
import Title from "@/components/Title";
import { PortableText } from "@portabletext/react";

export default async function HomeCare() {
  const data = await getHomeCare();

  return (
    <div className="">
      <Title text="Home Care" />
      <div className="grid gap-8">
        {data.map((item) => (
          <div
            key={item._id}
            className="border-b border-gray-100 pb-6 last:border-0"
          >
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-md h-auto rounded-lg mb-4"
              />
            )}
            <div className="prose max-w-none">
              <PortableText value={item.body} />
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <p className="text-gray-500 italic">No home care resources found.</p>
        )}
      </div>
    </div>
  );
}
