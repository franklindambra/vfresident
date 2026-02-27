import { getPost } from "@/app/data-access/actions";
import { PortableText } from "@portabletext/react";
import Title from "@/components/Title";
import Link from "next/link";
import { notFound } from "next/navigation";
import InteractiveImage from "@/components/InteractiveImage";
import ClickableImage from "@/components/ClickableImage";

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  const components = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold my-6">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold my-5">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-bold my-4">{children}</h3>
      ),
      normal: ({ children }) => (
        <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc ml-6 mb-4 space-y-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal ml-6 mb-4 space-y-2">{children}</ol>
      ),
    },
    types: {
      image: ({ value }) => <InteractiveImage value={value} />,
    },
  };

  return (
    <article>
      <Link
        href="/"
        className="text-vf-green hover:underline text-sm mb-6 inline-block"
      >
        ← Back to home
      </Link>

      <p className="font-bold text-2xl mb-2">{post.title}</p>

      <div className="flex flex-wrap gap-2 items-center text-sm text-gray-500 border-b border-gray-100 mb-5">
        <div className="flex items-center gap-2">
          {post.authors?.map((author) => (
            <div key={author.name} className="flex items-center gap-2">
              {author.image && (
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <span className="font-medium text-gray-900">{author.name}</span>
            </div>
          ))}
        </div>

        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        {post.categories?.length > 0 && (
          <>
            <span className="text-gray-300">|</span>
            <div className="flex gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat.slug}
                  className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs"
                >
                  {cat.title}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {post.mainImage && (
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
          <img
            src={post.mainImage}
            alt={post.title}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText value={post.body} components={components} />
      </div>

      {post.gallery?.length > 0 && (
        <section className="mt-15 pt-5 border-t border-gray-300">
          <h3 className="text-2xl font-bold mb-5">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {post.gallery.map((image) => (
              <ClickableImage
                key={image._id}
                src={image.url}
                alt={image.altText || image.title}
                caption={image.caption}
                aspectRatio="aspect-square"
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
