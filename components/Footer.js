import React from "react";
import { Facebook, Instagram, Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-white/90 max-w-[1200px] mx-auto px-5 lg:px-7 py-5 rounded-b-lg flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-gray-300 border-t">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-vf-green">
            Village Farm Residents Association
          </h3>
          <div className="flex gap-4 text-gray-600">
            <a
              href="https://www.facebook.com/greengatefarms/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vf-green transition-colors"
              title="Green Gate Farms Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/greengatefarms/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vf-green transition-colors"
              title="Green Gate Farms Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-vf-green transition-colors"
              title="Bergstrom Community Gardens"
            >
              <Sprout className="w-5 h-5" />
            </a>
          </div>
        </div>
        <a
          href="https://dambrawebdesign.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs opacity-50 hover:opacity-100 transition-opacity"
        >
          dambrawebdesign.com
        </a>
      </div>
    </footer>
  );
}
