export default function PulsesSection() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2d5016]">
          🌾 Pulses – Protein Powerhouses of India
        </h2>
        <p className="text-sm md:text-base text-slate-700">
          Pulses are central to Indian food culture and a crucial protein source
          for a largely vegetarian population. We trade a wide portfolio of
          dals, beans and legumes sourced from major pulse-growing belts.
        </p>
      </header>

      <section>
        <h3 className="text-xl md:text-2xl font-semibold text-[#2d5016] mb-3">
          Major Pulses We Handle
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <PulseCard
            name="Toor Dal (Pigeon Pea)"
            aka="Arhar / Tur dal"
            uses="Staple for sambar, dal fry, Gujarati dal and more."
            states="Maharashtra, Karnataka, Madhya Pradesh"
          />
          <PulseCard
            name="Moong Dal"
            aka="Whole green moong & split yellow"
            uses="Dal tadka, khichdi, sprouts, sweets."
            states="Rajasthan, Maharashtra, Andhra Pradesh"
          />
          <PulseCard
            name="Masoor Dal (Red Lentil)"
            aka="Whole & split"
            uses="Quick-cooking dal, soups, curries."
            states="Madhya Pradesh, Uttar Pradesh, West Bengal"
          />
          <PulseCard
            name="Chana & Chana Dal"
            aka="Kala chana, Kabuli chana, split chana"
            uses="Chole, snacks, besan-based products."
            states="Madhya Pradesh, Rajasthan, Maharashtra"
          />
          <PulseCard
            name="Urad Dal (Black Gram)"
            aka="Whole & split urad"
            uses="Dal makhani, idli/dosa batter, vadas."
            states="Madhya Pradesh, Andhra Pradesh, Tamil Nadu"
          />
          <PulseCard
            name="Rajma, Lobia & Others"
            aka="Kidney beans, black-eyed peas, moth beans"
            uses="Rajma curry, chaat, misal, salads."
            states="Himachal, J&K, Karnataka, more"
          />
        </div>
      </section>

      <section className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-[#2d5016] mb-3">
          Why Pulses Matter Nutritionally
        </h3>
        <ul className="grid md:grid-cols-2 gap-2 text-xs md:text-sm text-slate-700">
          <li>• 20–25% protein – ideal for vegetarian protein needs</li>
          <li>• Very high in dietary fiber for digestive health</li>
          <li>• Naturally low in fat and cholesterol-free</li>
          <li>• Low glycemic index – great for blood sugar control</li>
          <li>• Rich in iron, folate, potassium and magnesium</li>
          <li>• Support heart health and healthy weight management</li>
        </ul>
      </section>
    </div>
  );
}

function PulseCard({ name, aka, uses, states }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 md:p-5 hover:shadow-md hover:-translate-y-0.5 transition">
      <h4 className="text-base md:text-lg font-semibold text-[#2d5016] mb-1">
        {name}
      </h4>
      <p className="text-xs md:text-sm text-slate-600 mb-1">
        <span className="font-semibold">Also known as:</span> {aka}
      </p>
      <p className="text-xs md:text-sm text-slate-600 mb-1">
        <span className="font-semibold">Uses:</span> {uses}
      </p>
      <p className="text-xs md:text-sm text-slate-600">
        <span className="font-semibold">Key Regions:</span> {states}
      </p>
    </div>
  );
}
