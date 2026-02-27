import Link from "next/link";
import { getRecentPosts } from "@/app/data-access/actions";

export default async function ArticleFeed() {
  const posts = await getRecentPosts();

  // Helper to extract plain text from Portable Text for truncation
  const getExcerpt = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return "";
    return (
      blocks
        .map((block) => {
          if (block._type !== "block" || !block.children) return "";
          return block.children.map((child) => child.text).join("");
        })
        .join(" ")
        .slice(0, 160) + "..."
    );
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 italic">
        No articles found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/articles/${post.slug}`}
          className="group flex flex-col lg:flex-row gap-6 items-start lg:items-center bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-300"
        >
          {post.image ? (
            <div className="relative w-full lg:w-48 h-48 lg:h-32 flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ) : (
            <div className="w-full lg:w-48 h-48 lg:h-32 bg-gray-100 flex items-center justify-center rounded-md font-bold text-gray-300 lowercase">
              no image
            </div>
          )}
          <div className="flex flex-col gap-2 p-4 lg:p-0 lg:pr-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-vf-green transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {getExcerpt(post.body)}
            </p>
            <div className="text-xs text-gray-500 font-mediumr">
              {post.publishedAt &&
                new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
