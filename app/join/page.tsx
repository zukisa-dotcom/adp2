import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const STEPS = [
  {
    number: "01",
    title: "Join the AMALI City Leadership Programme",
    description:
      "Cities cannot join the Data Programme directly. The first step is to apply for and be accepted into the AMALI City Leadership Programme — a year-long initiative that supports mayors in honing the vision for their cities.",
  },
  {
    number: "02",
    title: "Participate in the Leadership Programme",
    description:
      "Participating mayors gain clarity on how to translate their legacy goals into action, establish delivery teams, deploy tools to successfully implement their plans, and secure support from their constituents and key stakeholders.",
  },
  {
    number: "03",
    title: "Apply to the AMALI Data Programme",
    description:
      "Once accepted into the Leadership Programme, cities are eligible to apply for the Data Programme. Contact our Programme Director to express your city's interest and begin the application process.",
  },
];

const LEADERSHIP_PROGRAMME_FEATURES = [
  {
    title: "Immersive Leadership Forum",
    description:
      "The programme begins with a four-day residential leadership forum at the University of Cape Town, bringing together mayors from across Africa to explore shared challenges and build a peer network.",
  },
  {
    title: "Online Workshop Series",
    description:
      "Following the forum, mayors participate in a structured series of online workshops designed to deepen their leadership capabilities and support implementation of their city's vision.",
  },
  {
    title: "Reunion Convening",
    description:
      "The programme concludes with a reunion convening where mayors come together to share progress, reflect on their journeys, and celebrate the milestones achieved across their cities.",
  },
];

export default function JoinPage() {
  return (
    <main className="min-h-dvh bg-background-light">
      <Navbar />

      {/* Hero */}
      <section className="bg-accent-green pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Joining the Programme
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight max-w-3xl mb-6">
            How Cities Join the AMALI Data Programme
          </h1>
          <p className="text-gray-200 text-base leading-relaxed max-w-2xl">
            Participation in the AMALI Data Programme is by invitation and follows a structured pathway through the AMALI City Leadership Programme. Here is what the journey looks like.
          </p>
        </div>
      </section>

      {/* Pathway Steps */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-10">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            The Pathway
          </span>
        </div>
        <div className="flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 pb-10"
            >
              <div className="flex md:flex-col items-center md:items-start gap-3">
                <span className="text-4xl font-black text-accent leading-none">
                  {step.number}
                </span>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block w-px h-full min-h-8 bg-gray-200 ml-3 mt-2" />
                )}
              </div>
              <div className="pb-10 border-b border-gray-100 last:border-0">
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About the Leadership Programme */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                  Prerequisites
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                The AMALI City Leadership Programme
              </h2>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-4 pt-2">
              <p>
                The AMALI City Leadership Programme is a year-long initiative that supports mayors in honing the visions for their cities. It is the entry point into the broader AMALI ecosystem — and the prerequisite for joining the Data Programme.
              </p>
              <p>
                Participating mayors gain clarity on how to translate their legacy goals into concrete action, build the teams and systems required for delivery, and secure the buy-in of constituents and key stakeholders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_PROGRAMME_FEATURES.map((feature) => (
              <div key={feature.title} className="bg-white p-6 border-t-2 border-accent">
                <h3 className="text-base font-black text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Contact */}
      <section className="bg-accent py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Ready to bring data-driven governance to your city?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              If your city has been part of the AMALI City Leadership Programme and you would like to explore joining the Data Programme, get in touch with our Programme Director.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white/10 border border-white/20 p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-1">
                Programme Director
              </p>
              <p className="text-white font-black text-lg mb-1">Mawande Ngidi</p>
              <a
                href="mailto:mawande@amalidataprogramme.org"
                className="text-accent-yellow font-semibold text-sm hover:underline break-all"
              >
                mawande@amalidataprogramme.org
              </a>
            </div>
            <a
              href="mailto:mawande@amalidataprogramme.org"
              className="inline-flex items-center justify-center gap-2 bg-white text-accent font-bold text-sm px-6 py-3 hover:bg-accent-yellow hover:text-gray-900 transition-colors"
            >
              Send an Expression of Interest
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
