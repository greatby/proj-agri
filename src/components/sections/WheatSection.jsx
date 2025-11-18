export default function WheatSection() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2d5016]">
          🌾 Wheat – The Golden Grain
        </h2>
        <p className="text-sm md:text-base text-slate-700">
          Wheat is India’s second most important cereal after rice and forms the
          base of chapatis, breads and countless traditional dishes. Our wheat
          range covers everything from whole wheat atta to durum and multigrain
          blends.
        </p>
      </header>

      <section>
        <h3 className="text-xl md:text-2xl font-semibold text-[#2d5016] mb-3">
          Wheat Products We Trade
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <WheatCard
            title="Whole Wheat Flour (Atta)"
            details="Traditional stone-ground or roller-milled atta with bran intact."
            use="Chapatis, rotis, parathas, pooris, whole wheat breads."
            health="High in fiber, B-vitamins and minerals."
          />
          <WheatCard
            title="Refined Flour (Maida)"
            details="Highly refined white flour for soft baked goods."
            use="Breads, cakes, biscuits, naan, kulcha."
            health="Used where texture and softness are priority."
          />
          <WheatCard
            title="Semolina (Sooji/Rava)"
            details="Granular wheat product available in fine to coarse grades."
            use="Upma, halwa, idli, desserts, pasta."
            health="Good source of protein and iron."
          />
          <WheatCard
            title="Durum Wheat"
            details="Hard amber wheat with superior gluten."
            use="Pasta, pizza bases, specialty breads."
            health="High protein (13–15%)."
          />
          <WheatCard
            title="Cracked Wheat (Dalia/Bulgur)"
            details="Whole wheat kernels broken into pieces."
            use="Porridge, khichdi, salads, healthy bowls."
            health="High-fiber, slow-releasing energy."
          />
          <WheatCard
            title="Wheat Bran & Germ"
            details="Fiber-rich bran and nutrient-dense germ fractions."
            use="Fortifying cereals, baked goods, smoothies."
            health="Excellent for digestive and heart health."
          />
        </div>
      </section>

      <section className="bg-amber-50 border border-amber-100 rounded-2xl p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-[#2d5016] mb-3">
          Key Health Highlights (Whole Wheat Flour – per 100g)
        </h3>
        <ul className="grid md:grid-cols-2 gap-2 text-xs md:text-sm text-slate-700">
          <li>• ~340 kcal with sustained complex carbohydrates</li>
          <li>• ~13g protein supporting muscle and repair</li>
          <li>• ~11g dietary fiber aiding digestion and satiety</li>
          <li>• Rich in iron, magnesium, phosphorus and zinc</li>
          <li>• Strong B-vitamin profile for energy metabolism</li>
        </ul>
      </section>
    </div>
  );
}

function WheatCard({ title, details, use, health }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 md:p-5 hover:shadow-md hover:-translate-y-0.5 transition">
      <h4 className="text-base md:text-lg font-semibold text-[#2d5016] mb-1">
        {title}
      </h4>
      <p className="text-xs md:text-sm text-slate-700 mb-1">{details}</p>
      <p className="text-xs md:text-sm text-slate-700 mb-1">
        <span className="font-semibold">Uses:</span> {use}
      </p>
      <p className="text-xs md:text-sm text-emerald-700">
        <span className="font-semibold">Health:</span> {health}
      </p>
    </div>
  );
}
