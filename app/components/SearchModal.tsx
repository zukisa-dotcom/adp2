"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CITIES } from "../data/cities";
import { ARTICLES } from "../data/articles";
import { TEAM } from "../data/team";

interface SearchResult {
  id: string;
  type: "city" | "article" | "team" | "page";
  title: string;
  subtitle: string;
  href: string;
}

const PAGES: SearchResult[] = [
  { id: "home",      type: "page", title: "Home",            subtitle: "AMALI Data Programme homepage",                        href: "/" },
  { id: "about",     type: "page", title: "About",           subtitle: "About the AMALI Data Programme",                       href: "/about" },
  { id: "impact",    type: "page", title: "Impact",          subtitle: "Programme impact stories and city results",             href: "/impact" },
  { id: "cities",    type: "page", title: "Cities",          subtitle: "All cities participating in the programme",             href: "/cities" },
  { id: "team",      type: "page", title: "Team",            subtitle: "Meet the programme team and partners",                  href: "/team" },
  { id: "join",      type: "page", title: "Join Programme",  subtitle: "How cities can join the AMALI Data Programme",         href: "/join" },
  { id: "documents", type: "page", title: "Documents",       subtitle: "Programme documents and reports",                      href: "/documents" },
  { id: "resources", type: "page", title: "Resources",       subtitle: "Resources and learning materials",                     href: "/resources" },
  { id: "tools",     type: "page", title: "Tools",           subtitle: "Data tools and frameworks",                            href: "/tools" },
];

const CITY_RESULTS: SearchResult[] = CITIES.map((c) => ({
  id: `city-${c.slug}`,
  type: "city",
  title: c.name,
  subtitle: `${c.country} · ${c.mayor} · ${c.legacyGoal}`,
  href: `/cities/${c.slug}`,
}));

const ARTICLE_RESULTS: SearchResult[] = ARTICLES.map((a) => ({
  id: `article-${a.slug}`,
  type: "article",
  title: a.title,
  subtitle: `${a.city}, ${a.country} · ${a.tag} · ${a.excerpt}`,
  href: `/impact/${a.slug}`,
}));

const TEAM_RESULTS: SearchResult[] = TEAM.map((m) => ({
  id: `team-${m.name}`,
  type: "team",
  title: m.name,
  subtitle: m.role,
  href: "/team",
}));

const ALL_RESULTS: SearchResult[] = [
  ...PAGES,
  ...CITY_RESULTS,
  ...ARTICLE_RESULTS,
  ...TEAM_RESULTS,
];

function search(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return ALL_RESULTS.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.subtitle.toLowerCase().includes(q)
  ).slice(0, 12);
}

const TYPE_LABELS: Record<SearchResult["type"], string> = {
  city: "City",
  article: "Article",
  team: "Team",
  page: "Page",
};

const TYPE_COLORS: Record<SearchResult["type"], string> = {
  city: "bg-accent-green text-accent",
  article: "bg-accent/10 text-accent",
  team: "bg-gray-100 text-gray-600",
  page: "bg-gray-100 text-gray-500",
};

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = search(query);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-2xl bg-white shadow-2xl">
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search cities, articles, team members…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-base text-gray-900 placeholder-gray-400 outline-none bg-transparent"
          />
          <button
            onClick={onClose}
            className="text-xs text-gray-400 border border-gray-200 px-2 py-1 hover:text-gray-600 hover:border-gray-300 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        {query.trim() && (
          <div className="max-h-[60vh] overflow-y-auto divide-y divide-gray-50">
            {results.length === 0 ? (
              <div className="px-5 py-10 text-center text-sm text-gray-400">
                No results for &ldquo;{query}&rdquo;
              </div>
            ) : (
              results.map((r) => (
                <Link
                  key={r.id}
                  href={r.href}
                  onClick={onClose}
                  className="flex items-start gap-4 px-5 py-4 hover:bg-gray-50 transition-colors group"
                >
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 mt-0.5 shrink-0 ${TYPE_COLORS[r.type]}`}>
                    {TYPE_LABELS[r.type]}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900 group-hover:text-accent transition-colors truncate">
                      {r.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                      {r.subtitle}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-accent shrink-0 mt-1 ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))
            )}
          </div>
        )}

        {/* Empty state hint */}
        {!query.trim() && (
          <div className="px-5 py-8 text-center text-sm text-gray-400">
            Search across cities, articles, team members, and pages
          </div>
        )}
      </div>
    </div>
  );
}
