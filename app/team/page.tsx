"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TEAM, PARTNERS, type TeamMember, type Partner } from "../data/team";

function MemberCard({
  member,
  isExpanded,
  onToggle,
}: {
  member: TeamMember;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 pb-8">
      <div className="flex items-start gap-5 mb-4">
        {member.image ? (
          <div className="w-20 h-20 shrink-0 relative overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover grayscale"
            />
          </div>
        ) : (
          <div className="w-20 h-20 shrink-0 bg-accent-green flex items-center justify-center">
            <span className="text-2xl font-black text-accent-yellow">
              {member.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
        )}
        <div>
          <h3 className="text-xl font-black text-gray-900">{member.name}</h3>
          <p className="text-sm font-semibold text-accent">{member.role}</p>
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="inline-block mt-2 text-gray-400 hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      <div className="text-gray-600 text-sm leading-relaxed">
        {isExpanded ? (
          member.bio.split("\n").map((p, j) => (
            <p key={j} className="mb-3 last:mb-0">
              {p}
            </p>
          ))
        ) : (
          <p>{member.bio.split("\n")[0]}</p>
        )}
      </div>
      <button
        onClick={onToggle}
        className="mt-4 text-sm font-semibold text-accent hover:text-accent-light transition-colors cursor-pointer"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}

export default function TeamPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <main className="min-h-dvh bg-background-light">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Who We Are
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Our Team
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
          The AMALI Data Programme is delivered by a team of experienced data
          advisors and urban development professionals dedicated to empowering
          African city leaders.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {TEAM.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              isExpanded={expanded === member.name}
              onToggle={() =>
                setExpanded(expanded === member.name ? null : member.name)
              }
            />
          ))}
        </div>

        {/* Partners */}
        <h2 className="text-2xl font-black text-gray-900 pb-3 mb-8 border-b-2 border-accent">
          Partners Supporting Change
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-10">
          AMALI is a partnership between the African Centre for Cities (ACC),
          Big Win Philanthropy and Bloomberg Philanthropies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="border-b border-gray-200 pb-8">
              <div className="h-16 flex items-center mb-5">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={64}
                  className="object-contain max-h-16"
                />
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-3">{partner.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {partner.bio.split("\n")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
