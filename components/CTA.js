"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "fathom-client";

export default function CTA({ resetMenus = () => {} }) {
  return (
    <Link
      href="/subscribe"
      className="cta inline-block px-4 py-2 text-white text-center rounded-sm focus:outline-none bg-vf-green font-bold ease-in-out duration-200 hover:scale-[104%] shadow-2xl"
      onClick={() => {
        resetMenus();
        trackEvent("CTA Click", 0);
      }}
    >
      Subscribe
    </Link>
  );
}
