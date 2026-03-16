import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "../../data/cities";
import { CITY_CONTENT } from "../../data/city-content";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: city.slug }));
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const content = CITY_CONTENT[slug];
  const isCohort4 = city.cohort === 4;

  return (
    <main className="min-h-dvh bg-background-light">
      <Navbar />

      {/* Breadcrumb & City Header — full width */}
      <div className="w-full pl-36 pr-6 pt-16 pb-10 ">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
          <Link href="/cities" className="hover:text-accent transition-colors">
            Cities
          </Link>
          <span>/</span>
          <span className="text-gray-600">{city.name}</span>
        </div>
        <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
          Cohort {city.cohort} &middot; {city.country}
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900">
          {city.name}
        </h1>
      </div>

      <article className="">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Legacy Goal */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-600">Legacy Goal</span>
              </div>
              <p className="text-gray-600 text-4xl leading-relaxed">
                {city.legacyGoal}
              </p>
            </div>

            {/* Mayor/Governor */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-600">Mayor/Governor</span>
              </div>
              <div className="flex items-start gap-5">
                {city.mayorImage ? (
                  <div className="w-20 h-20 shrink-0 relative overflow-hidden">
                    <Image
                      src={city.mayorImage}
                      alt={city.mayor}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 shrink-0 bg-accent-green flex items-center justify-center">
                    <span className="text-2xl font-black text-accent-yellow">
                      {city.mayor.split(" ").map((n: string) => n[0]).join("")}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-base font-bold text-gray-900 mb-1">
                    {city.mayor}
                  </p>
                  {city.profileUrl && (
                    <a
                      href={city.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light transition-colors mb-2"
                    >
                      View full city profile
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  <div className="flex items-center gap-3 mt-2">
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors" aria-label="Twitter">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {content ? (
          <>
            {/* Highlights */}
            <section className="mb-12 bg-accent-yellow">
              <div className="max-w-3xl mx-auto px-6 py-16">
              <h2 className="text-xl font-black text-gray-900 mb-4">Highlights</h2>
              <ul className="space-y-3">
                {content.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2" />
                    {h}
                  </li>
                ))}
              </ul>
              </div>
            </section>

            {/* Background */}
            <div className="max-w-3xl mx-auto py-16">
            <section className="mb-12">
              <h2 className="text-xl font-black text-gray-900 mb-4">Background</h2>
              {content.background.split("\n").map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </section>

            {/* Impact */}
            <section className="mb-12">
              <h2 className="text-xl font-black text-gray-900 mb-4">Impact</h2>
              {content.impact.split("\n").map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </section>

            {/* Article Media */}
            <section className="mb-12">
              <div className="relative w-full aspect-video bg-gray-200 overflow-hidden">
                {content.articleImage ? (
                  <Image
                    src={content.articleImage}
                    alt={`${city.name} article media`}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center gap-3">
                    <svg
                      className="w-12 h-12 text-gray-400/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"
                      />
                    </svg>
                    <p className="text-sm text-gray-400">Video or image coming soon</p>
                  </div>
                )}
              </div>
            </section>

            {/* Significance */}
            <section className="mb-12">
              <h2 className="text-xl font-black text-gray-900 mb-4">Significance</h2>
              {content.significance.split("\n").map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </section>
            </div>
          </>
        ) : (
          <section className="mb-12 max-w-3xl mx-auto px-6 py-16">
            {isCohort4 ? (
              <>
                <h2 className="text-xl font-black text-gray-900 mb-4">
                  Coming Soon
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {city.name} is part of Cohort 4, which is currently in its early stages. Detailed reports on our work and impact in {city.name} will be published as the programme progresses. Check back soon for updates.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-black text-gray-900 mb-4">
                  Our Work in {city.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Detailed reporting for {city.name} is being finalised. Check back soon for in-depth articles and impact reports on the transformation underway.
                </p>
              </>
            )}
          </section>
        )}

        {/* Back link */}
        <div className="max-w-3xl mx-auto pb-10">
        <Link
          href="/cities"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to All Cities
        </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
