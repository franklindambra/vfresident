"use client";

import { useState } from "react";
import ImageModal from "./ImageModal";

export default function ClickableImage({
  src,
  alt,
  caption,
  className = "",
  imgClassName = "w-full h-full object-cover",
  aspectRatio = "aspect-auto",
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`group relative cursor-zoom-in ${className}`}>
        <div
          className={`${aspectRatio} overflow-hidden rounded-xl border border-gray-100 shadow-lg transition-all duration-300 group-hover:shadow-lg`}
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={src}
            alt={alt || "Image"}
            className={`${imgClassName} transition-transform duration-500 group-hover:scale-[1.03]`}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
            <span className="bg-white/90 text-gray-900 px-3 py-1.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-lg border border-gray-100">
              Click to enlarge
            </span>
          </div>
        </div>
        {caption && (
          <p className="mt-2 text-gray-500 italic px-1 text-center">
            {caption}
          </p>
        )}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={src}
        alt={alt}
        caption={caption}
      />
    </>
  );
}
