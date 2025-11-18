export default function HomeSection() {
  return (
    <div className="space-y-10">
      {/* Intro + Why choose us */}
      <div className="grid md:grid-cols-[1.4fr,1fr] gap-6 md:gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2d5016] mb-3">
            Welcome to Premium Agricultural Trading
          </h2>
          <p className="text-sm md:text-base text-slate-700">
            We are a leading agricultural trading company specializing in premium
            Indian food grains, spices, pulses, millets, and fresh produce. With
            years of experience and strong relationships with farmers across
            India, we ensure the highest quality products reach your buyers.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 md:p-5">
          <h3 className="text-base md:text-lg font-semibold text-[#2d5016] mb-2">
            🌟 Why Choose Us?
          </h3>
          <p className="text-sm md:text-sm text-slate-700">
            Direct farm sourcing, strict multi-stage quality checks, FSSAI-compliant
            processing, and a deep commitment to sustainable and fair agriculture.
          </p>
        </div>
      </div>

      {/* Product Range Cards */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-[#2d5016] mb-4">
          Our Core Product Categories
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProductCard
            title="🌾 Rice Varieties"
            text="Basmati, Sona Masoori, Parboiled, Brown, Red, Black and more from India's finest rice belts."
            benefit="Gluten-free, energy-rich, easily digestible."
          />
          <ProductCard
            title="🌾 Wheat Products"
            text="Whole wheat, refined flour, semolina, durum, multigrain blends from top wheat-growing states."
            benefit="High in fiber, protein and B-vitamins."
          />
          <ProductCard
            title="🫘 Pulses & Legumes"
            text="Lentils, chickpeas, kidney beans, black gram and more – the protein powerhouses of Indian cuisine."
            benefit="Rich in plant protein and fiber."
          />
          <ProductCard
            title="🌱 Ancient Millets"
            text="Foxtail, Pearl, Finger, Kodo and other heritage grains for modern health-conscious consumers."
            benefit="Gluten-free, low GI, mineral-rich."
          />
          <ProductCard
            title="🌶️ Authentic Spices"
            text="Turmeric, cumin, coriander, cardamom and more from India’s famous spice-growing regions."
            benefit="High in antioxidants with medicinal value."
          />
          <ProductCard
            title="☕ Tea & Coffee / 🍎 Fresh Produce"
            text="Premium teas, coffees, fruits and vegetables sourced in-season from across India."
            benefit="Packed with antioxidants, vitamins and minerals."
          />
        </div>
      </div>

      {/* Quality & Sustainability */}
      <div id="quality" className="grid md:grid-cols-2 gap-6 md:gap-10">
        <div className="bg-emerald-50 rounded-2xl p-5 md:p-6 border border-emerald-100">
          <h3 className="text-lg md:text-xl font-semibold text-[#2d5016] mb-4">
            📊 Quality Assurance & Standards
          </h3>
          <ul className="space-y-2 text-sm md:text-sm text-slate-700">
            <li>• Direct farm sourcing and long-term farmer partnerships</li>
            <li>• Multi-stage quality checks from collection to packaging</li>
            <li>• FSSAI-compliant, ISO-grade processing facilities</li>
            <li>• Hygienic storage with temperature & humidity control</li>
            <li>• Traceability from farm to shipment</li>
          </ul>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 md:p-6 border border-amber-100">
          <h3 className="text-lg md:text-xl font-semibold text-[#2d5016] mb-4">
            🌍 Our Commitment to Sustainability
          </h3>
          <ul className="space-y-2 text-sm md:text-sm text-slate-700">
            <li>• Fair prices and support programs for farmers</li>
            <li>• Promotion of organic and low-chemical farming</li>
            <li>• Focus on water conservation and soil health</li>
            <li>• Minimizing food waste across the supply chain</li>
            <li>• Supporting rural communities & infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ title, text, benefit }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 md:p-5 hover:shadow-md transition">
      <h4 className="text-base md:text-lg font-semibold text-[#2d5016] mb-2">
        {title}
      </h4>
      <p className="text-xs md:text-sm text-slate-700 mb-2">{text}</p>
      <p className="text-xs md:text-sm text-emerald-700 font-medium">
        <span className="font-semibold">Key Benefit:</span> {benefit}
      </p>
    </div>
  );
}
