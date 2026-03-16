import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ResourcesPage() {
  return (
    <main className="min-h-dvh bg-background-light">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
          Coming Soon
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Resources
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto mb-10">
          We are compiling a collection of useful resources, toolkits, and
          reference materials for city leaders. Check back soon for updates.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
