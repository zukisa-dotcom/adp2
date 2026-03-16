import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ARTICLES } from "../data/articles";

const heroArticle = ARTICLES[0];
const gridArticles = ARTICLES.slice(1);

export default function ImpactPage() {
  return (
    <main className="min-h-dvh bg-background-light">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
          Stories of Change
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Impact
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-12">
          Real stories from the cities we work with — how data is driving
          transformation across the African continent.
        </p>

        {/* Hero Article */}
        <Link href={`/impact/${heroArticle.slug}`}>
          <div className="relative w-full h-120 overflow-hidden mb-16 group cursor-pointer">
            <Image
              src={heroArticle.image}
              alt={heroArticle.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent-yellow mb-3 block">
                {heroArticle.tag} &middot; {heroArticle.city}, {heroArticle.country}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3 max-w-2xl">
                {heroArticle.title}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed max-w-xl mb-6">
                {heroArticle.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-white font-semibold text-sm border border-white px-6 py-3 group-hover:bg-white group-hover:text-gray-900 transition-colors">
                Read Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridArticles.map((article) => (
            <Link key={article.slug} href={`/impact/${article.slug}`}>
              <div className="group cursor-pointer h-full flex flex-col pb-6">
                <div className="flex items-center justify-between border-b-2 border-accent pb-2 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                    {article.tag}
                  </span>
                  <span className="text-black text-xs font-semibold px-4 py-1 inline-flex items-center gap-2">
                    {article.city} <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> {article.country}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 leading-snug mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
