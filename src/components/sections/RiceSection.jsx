export default function RiceSection() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2d5016]">
          🌾 Rice – The Staple Grain of India
        </h2>
        <p className="text-sm md:text-base text-slate-700">
          India is one of the world's largest producers and exporters of rice,
          with iconic varieties like Basmati, Sona Masoori, red rice and black
          rice. From daily meals to festive biryanis, rice is at the heart of
          Indian cuisine.
        </p>
      </header>

      <section>
        <h3 className="text-xl md:text-2xl font-semibold text-[#2d5016] mb-3">
          Popular Rice Varieties
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RiceCard
            name="Basmati Rice"
            origin="Punjab, Haryana, Uttarakhand"
            bestFor="Biryani, pulao, royal dishes"
            note="Extra long aromatic grains, improves with aging."
          />
          <RiceCard
            name="Sona Masoori"
            origin="Andhra Pradesh, Karnataka, Telangana"
            bestFor="Daily meals, fried rice, pongal"
            note="Lightweight medium grain with lower GI."
          />
          <RiceCard
            name="Kolam Rice"
            origin="Maharashtra, Goa"
            bestFor="Everyday cooking, khichdi, rice kheer"
            note="Mild taste and budget friendly."
          />
          <RiceCard
            name="Brown Rice"
            origin="Whole grain type"
            bestFor="Health-focused diets, diabetic-friendly meals"
            note="High in fiber, vitamins and minerals."
          />
          <RiceCard
            name="Parboiled Rice"
            origin="Pre-steamed type"
            bestFor="Idli, dosa batter & daily consumption"
            note="Retains nutrients from the husk."
          />
          <RiceCard
            name="Black / Red Rice"
            origin="Northeast India, Kerala, Himalayas"
            bestFor="Gourmet dishes, salads, traditional meals"
            note="Extremely rich in antioxidants and minerals."
          />
        </div>
      </section>

      {/* Nutrition Table (simplified) */}
      <section className="overflow-x-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-[#2d5016] mb-3">
          Nutritional Comparison (per 100g cooked)
        </h3>
        <table className="min-w-full text-xs md:text-sm border border-slate-200 bg-white rounded-xl overflow-hidden">
          <thead className="bg-[#7cb342] text-white">
            <tr>
              <Th>Rice Type</Th>
              <Th>Calories</Th>
              <Th>Carbs</Th>
              <Th>Protein</Th>
              <Th>Fiber</Th>
              <Th>Iron</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ["White Basmati", "130 kcal", "28g", "2.7g", "0.4g", "0.2mg"],
              ["Brown Rice", "112 kcal", "24g", "2.6g", "1.8g", "0.6mg"],
              ["Red Rice", "105 kcal", "22g", "2.8g", "2.0g", "1.2mg"],
              ["Black Rice", "100 kcal", "22g", "3.0g", "2.2g", "0.8mg"],
              ["Parboiled", "123 kcal", "27g", "2.9g", "0.6g", "0.4mg"]
            ].map((row, idx) => (
              <tr
                key={row[0]}
                className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}
              >
                {row.map((cell) => (
                  <td key={cell} className="px-3 py-2 border-t border-slate-200">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Health Benefits (bullets) */}
      <section className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-[#2d5016] mb-3">
          Health Benefits of Rice
        </h3>
        <ul className="grid md:grid-cols-2 gap-2 text-xs md:text-sm text-slate-700">
          <li>• Quick source of energy from complex carbohydrates</li>
          <li>• Naturally gluten-free and gentle on digestion</li>
          <li>• Brown and colored rice are rich in fiber and micronutrients</li>
          <li>• Low in sodium and cholesterol-free</li>
          <li>• Colored rice varieties are rich in antioxidants</li>
          <li>• Cooled rice provides resistant starch for gut health</li>
        </ul>
      </section>
    </div>
  );
}

function RiceCard({ name, origin, bestFor, note }) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 md:p-5 hover:shadow-md hover:-translate-y-0.5 transition">
      <h4 className="text-base md:text-lg font-semibold text-[#2d5016] mb-1">
        {name}
      </h4>
      <p className="text-xs md:text-sm text-slate-600 mb-1">
        <span className="font-semibold">Origin / Type:</span> {origin}
      </p>
      <p className="text-xs md:text-sm text-slate-600 mb-1">
        <span className="font-semibold">Best For:</span> {bestFor}
      </p>
      <p className="text-xs md:text-sm text-emerald-700">{note}</p>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="px-3 py-2 text-left text-[11px] md:text-xs font-semibold">
      {children}
    </th>
  );
}
