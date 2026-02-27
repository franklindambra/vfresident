"use client";
import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CTA from "./CTA";

export default function HeaderClient({ groups }) {
  const pathname = usePathname();
  // State for mobile menu open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State for individual nav dropdowns (for mobile)
  const [isGroupsDropdownOpen, setGroupsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const resetMenus = () => {
    setGroupsDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-2 w-full z-50 fixed px-4">
      <nav className="bg-gray-100/80 backdrop-blur-md max-w-[1400px] rounded-lg py-5 mx-auto flex justify-between items-center px-5 min-[1165px]:px-7 shadow-lg">
        <Link
          href="/"
          className="hover:opacity-80 transition-opacity"
          onClick={() => {
            resetMenus();
          }}
        >
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 text-vf-green">
            Village Farm Residents Association
          </h1>
        </Link>

        <div className="min-[1165px]:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-6 h-6 text-neutral-900 cursor-pointer" />
          ) : (
            <button className="text-white cursor-pointer">
              <span className="block w-6 h-0.5 bg-neutral-900 mb-1"></span>
              <span className="block w-6 h-0.5 bg-neutral-900 mb-1"></span>
              <span className="block w-6 h-0.5 bg-neutral-900"></span>
            </button>
          )}
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden min-[1165px]:flex items-center gap-4 ">
          <Link
            href="/about"
            className={`hover:text-vf-green transition-all duration-300 ease-in-out ${
              isActive("/about") ? "text-vf-green" : ""
            }`}
            onClick={() => {
              resetMenus();
            }}
          >
            About Us
          </Link>
          <div className="relative group">
            <Link
              href="/groups"
              className={`hover:text-vf-green transition-all duration-300 ease-in-out ${
                isActive("/groups") ? "text-vf-green" : ""
              }`}
            >
              Clubs & Groups
            </Link>
            <div
              className={`absolute top-4 bg-white shadow-lg w-55 rounded-md mt-2 p-2  opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out`}
            >
              {groups.map((group) => (
                <Link
                  key={group._id}
                  href={`/groups/${group.slug}`}
                  className="block px-4 py-2 roboto-mono hover:text-vf-green transition-all duration-300 ease-in-out"
                  onClick={() => {
                    resetMenus();
                  }}
                >
                  {group.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/events"
            className={`hover:text-vf-green transition-all duration-300 ease-in-out ${
              isActive("/events") ? "text-vf-green" : ""
            }`}
            onClick={() => {
              resetMenus();
            }}
          >
            Events
          </Link>
          <Link
            href="/bergstrom-community-gardens"
            className={`hover:text-vf-green transition-all duration-300 ease-in-out ${
              isActive("/bergstrom-community-gardens") ? "text-vf-green" : ""
            }`}
            onClick={() => {
              resetMenus();
            }}
          >
            Community Garden
          </Link>

          <div className="relative group">
            <Link
              href="#"
              className={`hover:text-vf-green transition-all duration-300 ease-in-out ${
                isActive("/resources") ? "text-vf-green" : ""
              }`}
            >
              Resources
            </Link>
            <div className="absolute top-4 bg-white shadow-lg w-55 rounded-md mt-2 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out">
              <Link
                href="/resources/home-care"
                className="block px-4 py-2 hover:text-vf-green transition-all duration-300 ease-in-out"
                onClick={resetMenus}
              >
                Home Care
              </Link>
              <Link
                href="/resources/property-info"
                className="block px-4 py-2 hover:text-vf-green transition-all duration-300 ease-in-out"
                onClick={resetMenus}
              >
                Property Info
              </Link>
              <Link
                href="/resources/trades-people"
                className="block px-4 py-2 hover:text-vf-green transition-all duration-300 ease-in-out"
                onClick={resetMenus}
              >
                Tradespeople
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            className={`hover:text-vf-green transition-all duration-300 ease-in-out ${
              isActive("/contact") ? "text-vf-green" : ""
            }`}
            onClick={() => {
              resetMenus();
            }}
          >
            Contact us
          </Link>
          <CTA resetMenus={resetMenus} />
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`min-[1165px]:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-lg mt-2 ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center py-5">
          <Link
            href="/about"
            className={`mb-5 hover:text-vf-green transition-all duration-300 ease-in-out ${
              isActive("/about") ? "text-vf-green" : ""
            }`}
            onClick={() => {
              resetMenus();
            }}
          >
            About us
          </Link>
          <div className="w-full mb-5">
            <Link
              href="#"
              className={`block px-5 text-center mb-2 hover:text-vf-green transition-all duration-300 ease-in-out ${
                isActive("/groups") ? "text-vf-green" : ""
              }`}
              onClick={() => setGroupsDropdownOpen(!isGroupsDropdownOpen)}
            >
              Groups & Clubs <ChevronDown className="inline w-4 h-4" />
            </Link>
            <div
              className={`${
                isGroupsDropdownOpen ? "max-h-[200px]" : "max-h-0"
              } overflow-hidden transition-all duration-300 ease-in-out text-center`}
            >
              {groups.map((group) => (
                <Link
                  key={group._id}
                  href={`/groups/${group.slug}`}
                  className="block px-4 my-2 hover:text-vf-green transition-all duration-300 ease-in-out"
                  onClick={() => {
                    resetMenus();
                  }}
                >
                  - {group.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full mb-5">
            <Link
              href="#"
              className={`block px-5 text-center mb-2 hover:text-vf-green transition-all duration-300 ease-in-out ${
                isActive("/resources") ? "text-vf-green" : ""
              }`}
              onClick={() => setResourcesDropdownOpen(!isResourcesDropdownOpen)}
            >
              Resources <ChevronDown className="inline w-4 h-4" />
            </Link>
            <div
              className={`${
                isResourcesDropdownOpen ? "max-h-[200px]" : "max-h-0"
              } overflow-hidden transition-all duration-300 ease-in-out text-center`}
            >
              <Link
                href="/resources/home-care"
                className="block px-4 my-2 hover:text-vf-green transition-all duration-300 ease-in-out"
                onClick={resetMenus}
              >
                - Home Care
              </Link>
              <Link
                href="/resources/property-info"
                className="block px-4 my-2 hover:text-vf-green transition-all duration-300 ease-in-out"
                onClick={resetMenus}
              >
                - Property Info
              </Link>
              <Link
                href="/resources/trades-people"
                className="block px-4 my-2 hover:text-vf-green transition-all duration-300 ease-in-out"
                onClick={resetMenus}
              >
                - Tradespeople
              </Link>
            </div>
          </div>

          <Link
            href="/events"
            className={`mb-5 hover:text-vf-green transition-all duration-300 ease-in-out ${
              isActive("/events") ? "text-vf-green" : ""
            }`}
            onClick={() => {
              resetMenus();
            }}
          >
            Events
          </Link>
          <Link
            href="/bergstrom-community-gardens"
            className={`mb-5 hover:text-vf-green transition-all duration-300 ease-in-out ${
              isActive("/bergstrom-community-gardens") ? "text-vf-green" : ""
            }`}
            onClick={() => {
              resetMenus();
            }}
          >
            Community Garden
          </Link>

          <Link
            href="/contact"
            className={`mb-5 hover:text-vf-green transition-all duration-300 ease-in-out ${
              isActive("/contact") ? "text-vf-green" : ""
            }`}
            onClick={() => {
              resetMenus();
            }}
          >
            Contact us
          </Link>
          <CTA resetMenus={resetMenus} />
        </nav>
      </div>
    </header>
  );
}
