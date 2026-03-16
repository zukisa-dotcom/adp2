"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchModal from "./SearchModal";

const NAV_LINKS = ["Home", "About", "Impact", "Cities", "Documents", "Resources", "Tools", "Team"];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
    <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    <nav className="bg-background-light px-6 md:px-32 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-gray-200/60 backdrop-blur-md">
      <Link href="/" className="flex items-center">
        <Image
          src="/AMALI DP Logo Horizontal_Orange On Transparent_RGB.png"
          alt="AMALI Data Programme"
          width={180}
          height={60}
          className="h-14 w-auto"
        />
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const pageLinks: Record<string, string> = {
            Home: "/",
            About: "/about",
            Impact: "/impact",
            Cities: "/cities",
            Documents: "/documents",
            Resources: "/resources",
            Tools: "/tools",
            Team: "/team",
          };
          return pageLinks[link] ? (
            <Link
              key={link}
              href={pageLinks[link]}
              className="text-sm font-medium text-gray-900 hover:text-accent transition-colors"
            >
              {link}
            </Link>
          ) : (
            <a
              key={link}
              href={`/#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-900 hover:text-accent transition-colors"
            >
              {link}
            </a>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <button
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
          className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </button>
        <span className="text-sm font-semibold text-gray-700 cursor-pointer hover:text-gray-900 transition-colors hidden sm:block">
          Contact
        </span>
        <Link href="/join" className="bg-accent hover:bg-accent-light text-white font-bold text-sm px-5 py-2.5 rounded-none transition-colors">
          Join Programme
        </Link>
      </div>
    </nav>
    </>
  );
}
