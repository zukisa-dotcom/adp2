import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const faqs: FAQItem[] = [
  {
    question: "How Does My Donation Provide Clean Water?",
    answer:
      "Every dollar you contribute goes toward the engineering, labor, and materials needed to build sustainable water systems.",
  },
  {
    question: "How Do You Ensure The Water Stays Flowing Long Term?",
    answer:
      "We train local maintenance teams and establish community ownership models so every system stays operational for decades.",
  },
  {
    question: "Where Does Your Organization Work?",
    answer:
      "We operate across Sub-Saharan Africa, South Asia, and Latin America, focusing on rural and peri-urban communities with the greatest need.",
  },
  {
    question: "Can I Choose Which Project My Money Goes To?",
    answer:
      "Yes. During checkout you can direct your donation to a specific program or let us allocate it where it's needed most.",
  },
  {
    question: "Is There A Free Trial? Et Up Within A Few Hours.",
    answer:
      "Our volunteer program lets you contribute time and expertise — onboarding takes just a few hours and is completely free.",
  },
];

const DONATION_AMOUNTS = ["$10 USD/mo", "$20 USD/mo", "$50 USD/mo", "$100 USD/mo", "$100 USD/mo", "Others amount"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-600">{text}</span>
    </div>
  );
}

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div
          key={i}
          className={`border rounded-xl overflow-hidden transition-all duration-300 ${
            open === i ? "border-gray-300 bg-white shadow-sm" : "border-gray-200 bg-white"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span className={`text-sm font-semibold ${open === i ? "text-gray-900" : "text-gray-700"}`}>
              {item.question}
            </span>
            <svg
              className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function ProgressBar({ raised, goal }: { raised: number; goal: number }) {
  const pct = Math.min((raised / goal) * 100, 100);
  return (
    <div className="mt-4 mb-5">
      <div className="flex justify-between text-xs text-gray-600 mb-1">
        <span>Raised</span>
        <span>Goal</span>
      </div>
      <div className="flex justify-between text-sm font-bold text-gray-900 mb-2">
        <span>${raised.toLocaleString()}</span>
        <span>${goal.toLocaleString()}</span>
      </div>
      <div className="w-full h-1.5 bg-yellow-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-900 rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ─── Section 1 — Hero ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="bg-[#F5F1EB] py-10 px-6 flex justify-center">
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden relative shadow-md">
        <img
          src="https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=1200&q=80"
          alt="Children playing with water"
          className="w-full h-[420px] object-cover"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-300 transition-colors">
            <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2 — Featured Courses ─────────────────────────────────────────────
function FeaturedCourses() {
  const courses = [
    {
      title: "Safe Water for Schools",
      desc: "Provide filtration systems so students can learn without water-related illness.",
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
    },
    {
      title: "Solar-Powered Wells",
      desc: "Install renewable water systems that serve villages year-round.",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    },
    {
      title: "Rapid Response Relief",
      desc: "Deliver emergency clean water during floods, droughts, and crises.",
      img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&q=80",
    },
  ];

  return (
    <section className="bg-[#F5F1EB] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-4">
          <div>
            <SectionLabel text="Featured Courses" />
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Small Actions.<br />Lasting Impact.
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed md:pt-8">
            From clean wells to hygiene training, your support delivers lasting change across communities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {courses.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl overflow-hidden bg-gray-900 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-52 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{c.desc}</p>
                <button className="mt-5 self-start border border-white text-white text-sm px-5 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3 — Programs / Donation ──────────────────────────────────────────
function ProgramsSection() {
  const programs = [
    {
      title: "Community Restoration",
      desc: "Rebuild broken water points and train local maintenance teams.",
      raised: 89900,
      goal: 240000,
    },
    {
      title: "Water Education Initiative",
      desc: "Teach hygiene and safe water practices in rural communities.",
      raised: 98090,
      goal: 260000,
    },
    {
      title: "Health & Sanitation Drive",
      desc: "Improve sanitation access to prevent waterborne diseases.",
      raised: 70980,
      goal: 220000,
    },
  ];

  return (
    <section className="bg-yellow-400 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-4">
          <div>
            <SectionLabel text="Programs" />
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Make a Meaningful<br />Donation Today
            </h2>
          </div>
          <p className="text-sm text-gray-700 max-w-xs leading-relaxed md:pt-8">
            Transparent funding. Real impact. Every contribution moves a community forward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-yellow-300 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
              <ProgressBar raised={p.raised} goal={p.goal} />
              <button className="self-start border border-gray-800 text-gray-900 text-sm px-5 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium">
                View Program
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4 — Impact + FAQ ─────────────────────────────────────────────────
function ImpactFAQSection() {
  return (
    <section className="bg-[#F5F1EB] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Impact block */}
        <div className="flex flex-col md:flex-row gap-10 mb-20 items-center">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=800&q=80"
              alt="Hand collecting water"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <SectionLabel text="Our Impact" />
            <h2 className="text-4xl font-black text-gray-900 leading-tight mb-4">
              Building Systems That Last for Generations.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Access to water is more than a basic need — it's the foundation for health, education, and economic growth. We design projects with community ownership at the core, ensuring every system is maintained, protected, and sustained for years to come.
            </p>
            <button className="border border-gray-800 text-gray-900 text-sm px-6 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-colors font-medium">
              See Our Impact
            </button>
          </div>
        </div>

        {/* FAQ block */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/5">
            <SectionLabel text="FAQs" />
            <h2 className="text-3xl font-black text-gray-900 leading-tight mb-4">
              Frequently Asked Questions?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Every dollar you contribute goes toward the engineering, labor, needed to build sustainable water systems.
            </p>
          </div>
          <div className="md:w-3/5">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 5 — Donation CTA + Footer ───────────────────────────────────────
function DonationAndFooter() {
  const [mode, setMode] = useState<"once" | "monthly">("monthly");
  const [selected, setSelected] = useState("$50 USD/mo");

  return (
    <>
      {/* Donation CTA */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          {/* Left — form */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-black text-gray-900 leading-tight mb-2">
              864 Million Reasons to Act.<br />One Way to Help.
            </h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Join us in delivering safe water to communities still facing daily water scarcity.
            </p>

            {/* Mode toggle */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setMode("once")}
                className={`px-5 py-2 rounded-lg border text-sm font-medium transition-colors ${
                  mode === "once"
                    ? "bg-yellow-400 border-yellow-400 text-gray-900"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                Give Once
              </button>
              <button
                onClick={() => setMode("monthly")}
                className={`px-5 py-2 rounded-lg border text-sm font-medium transition-colors ${
                  mode === "monthly"
                    ? "bg-yellow-400 border-yellow-400 text-gray-900"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                Monthly
              </button>
            </div>

            <p className="text-sm font-semibold text-gray-700 mb-3">Choses an Amount Per Month</p>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {DONATION_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSelected(amt)}
                  className={`border rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    selected === amt
                      ? "border-gray-900 bg-white text-gray-900 ring-1 ring-gray-900"
                      : "border-gray-200 text-gray-600 hover:border-gray-400"
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>

            <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-colors text-gray-900 font-bold py-4 rounded-xl text-sm tracking-wide">
              Join Today
            </button>
          </div>

          {/* Right — image */}
          <div className="md:w-1/2 min-h-64">
            <img
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80"
              alt="Hands under a tap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 px-6 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
              </svg>
              <span className="text-white font-bold text-lg">PureFlow</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Together, we bring clean water and lasting change to communities worldwide.
            </p>
            {/* Email sub */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              />
              <button className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-yellow-300 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {["Donation", "About US", "Progrmas"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">More</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {["Courses", "Testimonials", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal &amp; Policy Links</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {["Privacy Policy", "Support", "Changelog"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PureFlowPage() {
  return (
    <div className="font-sans antialiased">
      <HeroSection />
      <FeaturedCourses />
      <ProgramsSection />
      <ImpactFAQSection />
      <DonationAndFooter />
    </div>
  );
}