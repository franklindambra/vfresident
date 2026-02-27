import ClickableImage from "./ClickableImage";
import { urlFor } from "@/sanity/lib/image";

export default function InteractiveImage({ value }) {
  if (!value?.asset) return null;

  const imageUrl = urlFor(value).url();

  return (
    <div className="my-10 max-w-[700px] mx-auto px-4 sm:px-0">
      <ClickableImage
        src={imageUrl}
        alt={value.alt || "Article image"}
        caption={value.caption}
      />
    </div>
  );
}
