import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JOURNEY_STEPS = [
  {
    phase: "City Onboarding",
    timing: "Feb – Apr",
    description:
      "City selection, notification, informational interviews, and welcome calls. Baseline assessment survey conducted.",
  },
  {
    phase: "Weekly Coaching (Phase 1)",
    timing: "May – Jun/Jul",
    description:
      "10 structured coaching sessions covering ADP orientation, stakeholder mapping, SWOT analysis, data management fundamentals, data inventorying, and performance management basics.",
  },
  {
    phase: "1st In-City Site Visit",
    timing: "Jun / Jul",
    description:
      "Two-day in-city workshop focused on establishing foundational data management practices, co-creating actionable strategies, and developing a data inventory framework for the legacy goal.",
  },
  {
    phase: "Weekly Coaching (Phase 2)",
    timing: "Jun/Jul – Aug/Sep",
    description:
      "Sessions focused on completing the data inventory, designing a data reporting tool, refining legacy goal metrics and KPIs, and designing the performance management meeting routine.",
  },
  {
    phase: "2nd Site Visit & Launch",
    timing: "September",
    description:
      "Launch of the data reporting tool (performance dashboard) and formal launch of the performance management routine. Capacity-building support for city officials.",
  },
  {
    phase: "AMALI Reunion",
    timing: "October",
    description:
      "All ADP cities convene. Mayors and governors share results, participate in discussions, and showcase their legacy goal progress.",
  },
  {
    phase: "Wrap-Up & Aftercare",
    timing: "Nov – Dec (following year)",
    description:
      "City briefing notes submitted, transition to aftercare, continued light-touch support to sustain the performance management routine.",
  },
];

const APPROACH_PILLARS = [
  {
    title: "Data-Driven Culture",
    description:
      "We foster a spirit of continuous improvement and equip city teams with the expertise needed to interpret data effectively and translate insights into action.",
  },
  {
    title: "Community Ownership",
    description:
      "Every system, tool, and process developed through the programme is designed to be owned and sustained by the city team long after the programme concludes.",
  },
  {
    title: "Transparency & Accountability",
    description:
      "The programme builds routines and reporting tools that enable Mayors to communicate progress to citizens, council members, and key stakeholders.",
  },
  {
    title: "Tailored to Context",
    description:
      "City Data Advisors work closely with each municipality to understand its unique operating environment, ensuring support is practical, relevant, and locally grounded.",
  },
];

const SUPPORT_CHANNELS = [
  {
    number: "01",
    title: "Weekly Coaching & Technical Assistance",
    description:
      "Each city is paired with a dedicated City Data Advisor who provides weekly coaching calls throughout the programme. These sessions combine structured learning with hands-on problem-solving, allowing city teams to apply concepts directly to their own legacy goals and data contexts.",
  },
  {
    number: "02",
    title: "Two In-Person Site Visits",
    description:
      "Two immersive, two-day site visits bring the ADP team directly into the city. These visits serve as collaborative workshops where the city data team and key stakeholders co-develop strategies, pilot deliverables, and build the momentum needed to embed data-driven practices into city governance.",
  },
  {
    number: "03",
    title: "Standing Office Hours",
    description:
      "The City Data Advisors, Programme Director, and the Urban Governance Research Lab are available on a demand-driven basis to provide additional support for cities that need deeper technical assistance on specific challenges.",
  },
  {
    number: "04",
    title: "Self-Guided Resources & Best Practices",
    description:
      "Cities have access to a curated library of GOVEx online courses, toolkits, templates, and best practice guides, enabling team members to deepen their skills at their own pace beyond the structured coaching sessions.",
  },
];

const LEARNING_MODULES = [
  {
    module: "Module 1",
    title: "Getting Started with Data Management",
    timing: "May - August",
    concepts:
      "Data Inventory, Availability of Data, Data Quality Methods, Closing Data Gaps",
    outcomes:
      "Understand data management fundamentals; recognise issues data management can address; know foundational practices.",
  },
  {
    module: "Module 2",
    title: "Designing an Effective Data Reporting Tool",
    timing: "August - September",
    concepts:
      "Data Reporting Tool, Developing Goals, Selecting Performance Metrics, Establishing Targets",
    outcomes:
      "Understand effective data reporting; identify the right metrics and targets; establish a data reporting process.",
  },
  {
    module: "Module 3",
    title: "Launching & Sustaining a Performance Management Routine",
    timing: "October - November",
    concepts:
      "Performance Management Analytics, Communicating Progress, Internal & External Stakeholder Reporting",
    outcomes:
      "Identify components of successful performance management; recognise tools to sustain it; communicate progress using data.",
  },
];

const ADVISOR_ROLES = [
  { role: "Convener & Facilitator", desc: "Structuring workshops and coaching sessions to drive focused outcomes" },
  { role: "Confidante & Sounding Board", desc: "Providing a safe space for city teams to work through challenges" },
  { role: "Integrator", desc: "Connecting data practices to the broader performance management agenda of the city" },
  { role: "Subject-Matter Expert", desc: "Drawing on technical depth while remaining responsive to city needs" },
  { role: "Accountability Partner", desc: "Keeping city teams on track with deliverables and milestones" },
];

const STATS = [
  { value: "38+", label: "Cities Supported" },
  { value: "4", label: "Cohorts Delivered" },
  { value: "15+", label: "Countries Reached" },
  { value: "100+", label: "City Officials Trained" },
];

const PARTNERSHIP_STEPS = [
  "Attend all engagement meetings and weekly coaching calls, establishing a recurring schedule with the City Data Advisor.",
  "Meet internally as a team to discuss key concepts, make decisions, prepare for on-site visits, and complete deliverables.",
  "Engage actively with the City Data Advisor and come prepared with questions, updates, and relevant data.",
  "Complete all programme deliverables, including the data inventory, data reporting tool, and launching the first performance management meeting.",
];

export default function AboutPage() {
  return (
    <main className="min-h-dvh bg-background-light">
      <Navbar />

      {/* Hero */}
      <section className="relative h-96 md:h-120 overflow-hidden">
        <Image
          src="/Performance_management.jpg"
          alt="Performance Management"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-6 w-full">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-3">
              About The Programme
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-3xl">
              Empowering African City Governments to Harness the Power of Data
            </h1>
          </div>
        </div>
      </section>

      {/* What is ADP */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
              What is the AMALI Data Programme?
            </h2>
            <p className="text-sm text-accent font-semibold leading-relaxed">
              To empower city governments across Africa to harness data as a
              tool for decision-making, ensuring that every Mayor can monitor
              and evaluate progress toward their legacy goal with confidence,
              clarity, and evidence.
            </p>
          </div>
          <div className="text-gray-600 text-sm leading-relaxed flex flex-col gap-4">
            <p>
              The AMALI Data Programme (ADP) is a structured, city-level
              capacity-building initiative designed to strengthen the ability of
              African municipal governments to collect, manage, analyse, and use
              data to drive performance management and deliver on their
              leaders&apos; legacy goals.
            </p>
            <p>
              Working directly with Mayors and their city teams, the ADP
              provides hands-on coaching, technical assistance, and access to
              self-guided learning resources. The programme supports city
              governments in establishing a culture of data-driven leadership —
              one that enhances transparency, accountability, and effective
              resource allocation across city services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent-green py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-accent-yellow mb-2">
                {s.value}
              </p>
              <p className="text-sm font-semibold text-white/80 uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
          Our Approach
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
          Built Around the Mayor&apos;s Legacy Goal
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-12">
          At the heart of the ADP is a simple but powerful idea: every city
          leader has a vision, a legacy goal, that defines what they want to
          achieve for their community. The programme connects that vision
          directly to data, building the systems, skills, and routines that
          allow city teams to track progress, identify challenges, and make
          informed decisions in real time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {APPROACH_PILLARS.map((p) => (
            <div
              key={p.title}
              className="border-l-4 border-accent pl-6 py-4"
            >
              <h3 className="text-base font-black text-gray-900 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Journey */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            Engagement Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
            The ADP Programme Journey
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl mb-12">
            The ADP follows a structured engagement journey spanning
            approximately one year, from city selection through aftercare. Each
            phase is designed to build on the last, progressively deepening city
            teams&apos; data capabilities and embedding performance management
            as a sustainable routine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JOURNEY_STEPS.map((step) => (
              <div
                key={step.phase}
                className="border-t-2 border-accent pt-6 pb-4"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-1">
                  {step.timing}
                </p>
                <h3 className="text-base font-black text-white mb-3">
                  {step.phase}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Model */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
          Support Model
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
          How We Support City Teams
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-12">
          The ADP delivers support through four complementary channels, each
          designed to meet cities where they are and build their capacity
          progressively.
        </p>

        <div className="flex flex-col gap-8">
          {SUPPORT_CHANNELS.map((ch) => (
            <div
              key={ch.number}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 items-start border-b border-gray-200 pb-8 last:border-0"
            >
              <span className="text-4xl font-black text-accent/20">
                {ch.number}
              </span>
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  {ch.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {ch.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Journey */}
      <section className="bg-accent py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-2">
            Learning Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            The Engagement Learning Journey
          </h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-12">
            The ADP&apos;s curriculum is structured around three core learning
            modules, each aligned to a key phase of the programme. Collectively,
            they guide city teams from foundational data concepts through to
            launching and sustaining a fully operational performance management
            system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEARNING_MODULES.map((m) => (
              <div
                key={m.module}
                className="bg-white/10 backdrop-blur-sm p-6"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-yellow mb-1">
                  {m.module} &middot; {m.timing}
                </p>
                <h3 className="text-base font-black text-white mb-4">
                  {m.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-1">
                  Key Concepts
                </p>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  {m.concepts}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50 mb-1">
                  Learning Outcomes
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {m.outcomes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Data Advisors */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
              City Data Advisors
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
              Working with Your City Data Advisor
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Each participating city is assigned a dedicated City Data Advisor —
              an experienced practitioner with deep knowledge of data
              management, performance analytics, and local government contexts
              across Africa. Advisors serve as trusted partners throughout the
              engagement, bringing a blend of technical expertise and contextual
              sensitivity to every interaction.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
            >
              Meet Our Team
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
            </Link>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
              The Advisor&apos;s Role
            </h3>
            <div className="flex flex-col gap-3 mb-8">
              {ADVISOR_ROLES.map((a) => (
                <div key={a.role} className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-accent shrink-0 mt-1.5" />
                  <div>
                    <span className="text-sm font-bold text-gray-900">
                      {a.role}
                    </span>
                    <span className="text-sm text-gray-500">
                      {" "}— {a.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
              Technical Assistance Delivered
            </h3>
            <div className="flex flex-col gap-3">
              {[
                "Co-develop a tailored data inventory template aligned to the Mayor's legacy goal",
                "Create a practical, city-specific data reporting tool (performance dashboard)",
                "Guide the development of a documented performance management framework",
                "Support the launch and embedding of the city's performance management routine",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-accent-green shrink-0 mt-1.5" />
                  <p className="text-sm text-gray-500">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="bg-accent-green py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-2">
            Partnership
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            What We Ask of City Teams
          </h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-10">
            The ADP delivers the greatest impact when city leadership and
            project teams are fully engaged. The programme is designed as a
            genuine partnership — the ADP brings expertise, tools, and
            frameworks; city teams bring context, commitment, and the will to
            change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERSHIP_STEPS.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-3xl font-black text-accent-yellow/40 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-white/80 leading-relaxed pt-2">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement + CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            A Commitment to Lasting Change
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
            More Than a Technical Assistance Initiative
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            The AMALI Data Programme is a commitment to building the
            institutions, habits, and capabilities that allow African cities to
            govern better — for their residents, for their regions, and for the
            future. Every data point collected, every dashboard built, and every
            performance meeting held is a step toward a more accountable,
            evidence-driven urban Africa.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/#contact"
              className="bg-accent hover:bg-accent-light text-white font-bold text-sm px-8 py-4 transition-colors inline-flex items-center gap-2"
            >
              Contact Us
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
            </Link>
            <Link
              href="/cities"
              className="text-sm font-semibold text-accent hover:text-accent-light transition-colors"
            >
              View Our Cities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
