import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ARTICLES, getArticleBySlug } from "../../data/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="min-h-dvh bg-background-light">
      <Navbar />

      {/* Hero Image */}
      <div className="relative w-full h-96 md:h-120 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <article className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        {/* Header Card */}
        <div className="bg-background-light p-8 md:p-12 mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/impact" className="hover:text-accent transition-colors">
              Impact
            </Link>
            <span>/</span>
            <span className="text-gray-600 truncate">{article.title}</span>
          </div>

          <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">
            {article.tag} &middot; {article.city}, {article.country}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Article Body */}
        <div className="px-0 md:px-12 mb-16">
          {article.body.map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        {/* City Link */}
        <div className="px-0 md:px-12 mb-12 pb-12 border-b border-gray-200">
          <p className="text-sm text-gray-500 mb-3">
            Learn more about our work in {article.city}:
          </p>
          <Link
            href={`/cities/${article.citySlug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
          >
            View {article.city} City Profile
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Back link */}
        <div className="px-0 md:px-12 mb-16">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Stories
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
