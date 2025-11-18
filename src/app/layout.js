import "./globals.css";
export const metadata = {
  title: "Premium Indian Agricultural Produce Trading | Rice, Wheat, Pulses & More",
  description:
    "Premium Indian agricultural produce trader - Rice, Wheat, Pulses, Millets, Spices, Tea, Coffee, Fruits & Vegetables. Discover nutritional benefits, uses, and authentic vegetarian ideas.",
  keywords: [
    "agricultural trading",
    "Indian food grains",
    "rice varieties",
    "wheat",
    "pulses",
    "millets",
    "spices",
    "tea",
    "coffee",
    "fruits",
    "vegetables",
    "nutrition",
    "vegetarian recipes",
    "agri produce",
    "basmati rice",
    "organic pulses",
    "Indian spices"
  ],
  authors: [{ name: "Agri Trading Business" }],
  openGraph: {
    title: "Premium Indian Agricultural Produce Trading",
    description:
      "Your trusted partner for quality food grains, spices, and fresh produce from India.",
    type: "website",
    url: "https://www.agritradingbusiness.com"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-linear-to-b from-slate-50 to-white">
        {children}
      </body>
    </html>
  );
}
