import Title from "@/components/Title";
export const dynamic = "force-dynamic";
import ArticleFeed from "@/components/ArticleFeed";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Title text="Latest Resident News" />
      <ArticleFeed />
    </div>
  );
}
