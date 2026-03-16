"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { CITIES } from "./data/cities";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Map = dynamic(() => import("./components/Map"), { ssr: false });

// ─── Types ────────────────────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const faqs: FAQItem[] = [
  {
    question: "How can our city join the AMALI Data Programme?",
    answer:
      "Mayors of African cities can apply through our annual leadership program. Selection is based on commitment to data transparency and institutional readiness.",
  },
  {
    question: "Is the data collected publicly accessible?",
    answer:
      "We do not publicly share cities' data as it is collected under a confidential agreement between the programme and each city. However, interested parties are welcome to contact the cities directly to request access to their data.",
  },
  {
    question: "What type of technical support is provided?",
    answer:
      "We provide end-to-end support including data infrastructure setup, capacity building workshops, dashboard development, and ongoing technical advisory for city teams.",
  },
  {
    question: "How is the programme funded?",
    answer:
      "The programme is funded through a combination of philanthropic grants, government partnerships, and multilateral development support.",
  },
  {
    question: "Can we partner with AMALI as an organisation?",
    answer:
      "Absolutely. We welcome partnerships with NGOs, tech companies, academic institutions, and development agencies aligned with our mission.",
  },
];


// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-2 h-2 rounded-full bg-accent inline-block" />
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-600">
        {text}
      </span>
    </div>
  );
}

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i} className="border-b border-accent">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span
              className={`text-sm font-semibold ${
                open === i ? "text-gray-900" : "text-gray-700"
              }`}
            >
              {item.question}
            </span>
            <svg
              className={`w-4 h-4 shrink-0 ml-4 transition-transform duration-300 ${
                open === i ? "rotate-90 text-accent" : "text-gray-400 group-hover:text-gray-600"
              }`}
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
          </button>
          {open === i && (
            <div className="pb-5 text-sm text-gray-500 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="bg-accent-light/20 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
      <span className="text-4xl font-black text-[#f5f1eb] mb-2">{value}</span>
      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

// ─── Section 2 — Hero ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">
      <Image
        src="/Article Pictures/Addis Ababa.jpg"
        alt="Addis Ababa cityscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-start gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
            Empowering Leadership
          </span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
          Transforming African Cities Through Data
        </h1>
        <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
          Empowering mayors and urban leaders with the data-driven insights
          needed to build resilient, sustainable, and inclusive African cities.
        </p>
        <a
          href="/about"
          className="mt-4 bg-accent hover:bg-accent-light text-white font-bold text-sm px-8 py-4 rounded-none transition-colors inline-flex items-center gap-2"
        >
          Learn More
          <svg
            className="w-4 h-4"
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
        </a>
      </div>
    </section>
  );
}

// ─── Section 4 — Key Pillars ─────────────────────────────────────────────────
function PillarsSection() {
  const pillars = [
    {
      title: "Data Management",
      desc: "Building robust data infrastructure and governance frameworks to collect, store, and manage city data for evidence-based urban planning.",
      img: "/Data management.jpg",
    },
    {
      title: "Performance Management",
      desc: "Tracking and measuring city performance through key indicators, enabling mayors to monitor progress and drive accountability.",
      img: "/Performance_management.jpg",
    },
    {
      title: "Decision Support Tools",
      desc: "Equipping city leaders with dashboards, analytics, and insights that turn data into actionable decisions for urban transformation.",
      img: "/Decision Support.png",
    },
    {
      title: "Research",
      desc: "Generating knowledge and evidence through applied research that informs urban policy, strengthens data practices, and contributes to the broader discourse on African city governance.",
      img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    },
  ];

  return (
    <section id="pillars" className="bg-background-light py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-4">
          <div>
            <SectionLabel text="Key Pillars" />
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Strategic Focus Areas.
              <br />
              Continental Impact.
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed md:pt-8">
            Four interconnected pillars driving data-powered transformation
            across African cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="overflow-hidden bg-accent-green flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-52 overflow-hidden relative">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-accent-yellow font-bold text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-white text-sm leading-relaxed flex-1">
                  {p.desc}
                </p>
                <a href="/about" className="mt-5 self-start border border-white text-white text-sm px-5 py-2 hover:bg-white hover:text-gray-900 transition-colors font-medium">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5 — Impact Stats + Map ─────────────────────────────────────────
function ImpactSection() {
  return (
    <section id="impact" className="flex flex-col md:flex-row">
      {/* Left — Stats (orange) */}
      <div className="md:w-1/2 bg-accent py-16 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-lg ml-auto">
          <SectionLabel text="Our Impact" />
          <h2 className="text-4xl font-black text-white leading-tight mb-2">
            Real Numbers.
            <br />
            Real Change.
          </h2>
          <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-md">
            Transparent metrics showing how data is reshaping urban governance
            across the continent.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <StatCard value="30+" label="African Cities" />
            <StatCard value="150+" label="City Leaders" />
            <StatCard value="32m" label="Residents Reached" />
          </div>
        </div>
      </div>

      {/* Right — Map (edge-to-edge) */}
      <div className="md:w-1/2 min-h-188">
        <Map cities={CITIES} />
      </div>
    </section>
  );
}

// ─── Section 5b — Our Cities (horizontal scroll) ────────────────────────────
function CitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 360;
    const gap = 20;
    const distance = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };


  return (
    <section id="cities" className="bg-background-light py-16">
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <SectionLabel text="Our Cities" />
        <h2 className="text-4xl font-black text-gray-900 leading-tight">
          Cities Using Data To Lead Change.
        </h2>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 md:px-[calc((100vw-64rem)/2+1.5rem)] scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {CITIES.map((city) => (
          <div
            key={`${city.name}-${city.lat}`}
            className="relative shrink-0 w-90 h-147 overflow-hidden group"
          >
            <Image
              src={city.cardImage || "/City Card Picture/placeholder.jpg"}
              alt={city.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-1">
                {city.country}
              </p>
              <h3 className="text-2xl font-black text-white mb-3">
                {city.name}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed line-clamp-3">
                {city.legacyGoal}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll arrows — left-aligned */}
      <div className="max-w-5xl mx-auto px-6 mt-6 flex gap-3">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors text-gray-700 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors text-gray-700 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

// ─── Section 6 — Insights + FAQ ──────────────────────────────────────────────
function InsightsSection() {
  return (
    <section id="insights" className="bg-accent-yellow py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Insights & Stories" />
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">Featured Insights</h2>

        {/* Latest Article */}
        <div className="relative w-full h-120 overflow-hidden">
          <Image
            src="/Article Pictures/freetown_visit.jpg"
            alt="Freetown city landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent-yellow mb-3 block">
              Latest Article
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3 max-w-2xl">
              How Freetown Used Data to Create 120,000 Dignified Jobs
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-xl mb-6">
              A deep dive into how Mayor Yvonne Aki-Sawyerr leveraged AMALI's data infrastructure to drive employment across agriculture, digital tech, textiles, and finance.
            </p>
            <a
              href="/impact/freetown-120000-jobs"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm border border-white px-6 py-3 hover:bg-white hover:text-gray-900 transition-colors"
            >
              Read More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="md:w-2/5">
          <SectionLabel text="FAQs" />
          <h2 className="text-3xl font-black text-gray-900 leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Everything you need to know about the AMALI Data Programme and how
            your city can get involved.
          </p>
        </div>
        <div className="md:w-3/5">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

// ─── Section 7 — CTA + Footer ────────────────────────────────────────────────
function CTAAndFooter() {
  return (
    <>
      {/* Contact Form */}
      <section id="contact" className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionLabel text="Get In Touch" />
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3">
            Contact Us
          </h2>
          <p className="text-gray-500 text-sm mb-10 leading-relaxed max-w-xl">
            Interested in joining the network or learning more about the AMALI Data Programme? Send us a message.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="border-b border-gray-300 bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="border-b border-gray-300 bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="organisation" className="text-sm font-semibold text-gray-700 mb-1">Organisation</label>
              <input
                id="organisation"
                type="text"
                placeholder="Your organisation"
                className="border-b border-gray-300 bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-700 mb-1">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="What is this about?"
                className="border-b border-gray-300 bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us how we can help..."
                className="border-b border-gray-300 bg-transparent px-0 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-accent hover:bg-accent-light transition-colors text-white font-bold py-3 px-8 text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <ImpactSection />
      <CitiesSection />
      <InsightsSection />
      <FAQSection />
      <CTAAndFooter />
    </div>
  );
}
