import Title from "@/components/Title";
import ArticleFeed from "@/components/ArticleFeed";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Title text="Latest Resident News" />
      <ArticleFeed />
    </div>
  );
}
