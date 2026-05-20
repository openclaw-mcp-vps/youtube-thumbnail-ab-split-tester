export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For YouTube Creators · 10K+ Subscribers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          A/B Test Your Thumbnails.<br />
          <span className="text-[#58a6ff]">Maximize Click Rates.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically rotate thumbnail variants on your YouTube videos and track real CTR data to discover which designs drive the most clicks — no guesswork.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start for $9/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Auto thumbnail rotation", "Real-time CTR tracking", "Winner detection", "YouTube API sync"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold text-white">$9</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to grow faster</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited A/B thumbnail tests",
              "Automatic variant rotation",
              "CTR analytics dashboard",
              "Winning thumbnail alerts",
              "YouTube API integration",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does thumbnail A/B testing work?",
              a: "Connect your YouTube channel via OAuth. Upload 2–4 thumbnail variants per video and our system automatically rotates them at set intervals, collecting real impression and CTR data from YouTube Analytics."
            },
            {
              q: "Do I need a certain number of subscribers?",
              a: "We recommend at least 10K subscribers so your videos receive enough impressions to generate statistically meaningful CTR data within a reasonable timeframe."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal — no questions asked. Your data remains accessible until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} ThumbnailTest. All rights reserved.
      </footer>
    </main>
  );
}
