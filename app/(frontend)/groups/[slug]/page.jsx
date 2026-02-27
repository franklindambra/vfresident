import { getGroup } from "@/app/data-access/actions";
import Title from "@/components/Title";
import { PortableText } from "@portabletext/react";

export default async function Group({ params }) {
  const { slug } = await params;
  const group = await getGroup(slug);

  if (!group) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Title text="Group Not Found" />
        <p className="mt-4">
          Sorry, the group you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Title text={group.name} />
      <div className="mt-8 max-w-none">
        <p className="text-gray-600 mb-8">{group.description}</p>

        {group.gallery && group.gallery.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {group.gallery.map((image) => (
              <div key={image._id} className="space-y-2">
                <div className="aspect-video relative overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                  <img
                    src={image.url}
                    alt={image.altText || image.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                {image.caption && (
                  <p className="text-sm text-gray-500 italic px-1">
                    {image.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
