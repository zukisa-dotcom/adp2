"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CITIES } from "../data/cities";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CitiesPage() {
  const [query, setQuery] = useState("");

  const filtered = CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-dvh bg-background-light">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
          Our Network
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Cities
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
          Explore the {CITIES.length} African cities we work with across{" "}
          {new Set(CITIES.map((c) => c.country)).size} countries and 4 cohorts.
        </p>

        {/* Search */}
        <div className="mb-12">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by city or country..."
            className="w-full max-w-md border-b border-gray-300 bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-gray-400"
          />
        </div>

        {/* Cities by Cohort */}
        {[1, 2, 3, 4].map((cohort) => {
          const cohortCities = filtered.filter((c) => c.cohort === cohort);
          if (cohortCities.length === 0) return null;
          const cohortYears: Record<number, number> = { 1: 2023, 2: 2024, 3: 2025, 4: 2026 };
          return (
            <div key={cohort} className="mb-16">
              <h2 className="text-2xl font-black text-gray-900 pb-3 mb-8 border-b-2 border-accent">
                Cohort {cohort} <span className="text-gray-400 font-semibold text-lg">({cohortYears[cohort]})</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cohortCities.map((city) => (
                  <Link key={city.slug} href={`/cities/${city.slug}`}>
                    <div className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
                      {/* Image — 2/3 of card height */}
                      <div className="h-56 bg-gray-300 relative overflow-hidden">
                        {city.cardImage ? (
                          <Image
                            src={city.cardImage}
                            alt={city.name}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                            <svg
                              className="w-10 h-10 text-gray-500/40"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      {/* Text area — 1/3 of card height */}
                      <div className="bg-accent-green p-5 flex flex-col justify-between h-28">
                        <div>
                          <h3 className="text-xl font-black text-accent-yellow mb-1">
                            {city.name}
                          </h3>
                          <p className="text-white/70 text-sm font-medium">
                            {city.country}
                          </p>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                          <svg
                            className="w-5 h-5 text-white/40 group-hover:text-accent-yellow group-hover:translate-x-1 transition-all"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="text-gray-400 text-sm mt-8">
            No cities found matching &ldquo;{query}&rdquo;
          </p>
        )}
      </div>
      <Footer />
    </main>
  );
}
