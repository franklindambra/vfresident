"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ImageModal({
  isOpen,
  onClose,
  imageUrl,
  alt,
  caption,
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60"
        aria-label="Close modal"
      >
        <X size={32} />
      </button>

      <div
        className="relative max-w-5xl w-full max-h-screen flex flex-col items-center justify-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={alt || "Full screen image"}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        {caption && (
          <p className="text-white text-center text-sm md:text-base italic max-w-2xl px-4">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
