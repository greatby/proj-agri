export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-linear-to-br from-[#2d5016] via-[#7cb342] to-emerald-500 text-white"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#fff,transparent_55%),radial-gradient(circle_at_bottom,#fde68a,transparent_55%)]" />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-4">
            Your Trusted Partner in{" "}
            <span className="font-semibold text-amber-300">
              Premium Agricultural Produce
            </span>
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-6 max-w-xl">
            Sourcing the finest food grains, spices, pulses, millets, and fresh
            produce from across India. Committed to quality, nutrition, and
            sustainable farming practices.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-[#2d5016] text-sm font-semibold shadow-sm hover:bg-amber-50 transition"
            >
              Explore Product Categories
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/60 text-sm font-semibold hover:bg-white/10 transition"
            >
              Talk to Our Team
            </a>
          </div>
        </div>

        <div className="bg-white/10 border border-white/30 rounded-2xl p-5 md:p-6 shadow-xl backdrop-blur">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            Why Choose Us?
          </h3>
          <ul className="space-y-3 text-sm md:text-sm text-white/90">
            <li>• Direct sourcing from certified farmers and cooperatives</li>
            <li>• Rigorous quality control at every stage</li>
            <li>• FSSAI compliant & ISO-grade processing facilities</li>
            <li>• Focus on sustainability & fair farmer partnerships</li>
          </ul>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs md:text-sm">
            <div className="bg-white/10 rounded-lg py-3">
              <div className="font-semibold">7+</div>
              <div className="opacity-80">Core Categories</div>
            </div>
            <div className="bg-white/10 rounded-lg py-3">
              <div className="font-semibold">Pan-India</div>
              <div className="opacity-80">Sourcing Network</div>
            </div>
            <div className="bg-white/10 rounded-lg py-3">
              <div className="font-semibold">Farmer</div>
              <div className="opacity-80">First Approach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
