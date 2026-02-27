export const dynamic = "force-dynamic";
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
        <h1 className="text-3xl font-normal my-6">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-normal my-5">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-normal my-4">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg font-normal my-3">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-base font-normal my-2">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="text-sm font-normal my-2">{children}</h6>
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

      <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-900 group">
        {post.mainImage ? (
          <>
            <img
              src={post.mainImage}
              alt={post.title}
              className="w-full h-auto object-cover min-h-[400px] max-h-[600px] opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
              <h1 className="font-bold text-3xl md:text-5xl text-white mb-4 leading-tight max-w-4xl tracking-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-4 items-center text-sm text-gray-200">
                <div className="flex items-center gap-3">
                  {post.authors?.map((author) => (
                    <div key={author.name} className="flex items-center gap-2">
                      {author.image && (
                        <img
                          src={author.image}
                          alt={author.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                        />
                      )}
                      <span className="font-medium text-white">
                        {author.name}
                      </span>
                    </div>
                  ))}
                </div>

                <time dateTime={post.publishedAt} className="opacity-90">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>

                {post.categories?.length > 0 && (
                  <div className="flex gap-2">
                    {post.categories.map((cat) => (
                      <span
                        key={cat.slug}
                        className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10"
                      >
                        {cat.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="p-10 bg-vf-green text-white">
            <h1 className="font-bold text-3xl md:text-5xl mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex gap-4 items-center opacity-90 text-sm">
              <span>By {post.authors?.map((a) => a.name).join(", ")}</span>
              <span>•</span>
              <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
            </div>
          </div>
        )}
      </div>

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
