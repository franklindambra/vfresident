export const dynamic = "force-dynamic";
import { getGroup } from "@/app/data-access/actions";
import Title from "@/components/Title";
import { PortableText } from "@portabletext/react";
import ClickableImage from "@/components/ClickableImage";

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
              <ClickableImage
                key={image._id}
                src={image.url}
                alt={image.altText || image.title}
                caption={image.caption}
                aspectRatio="aspect-video"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
