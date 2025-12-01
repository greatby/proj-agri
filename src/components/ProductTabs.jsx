"use client";

import { useState } from "react";
import HomeSection from "./sections/HomeSection";
import RiceSection from "./sections/RiceSection";
import WheatSection from "./sections/WheatSection";
import PulsesSection from "./sections/PulseSection";

// You can add more imports later: MilletsSection, SpicesSection, BeveragesSection, ProduceSection

const TABS = [
  { id: "home", label: "Overview" },
  { id: "rice", label: "Rice" },
  { id: "wheat", label: "Wheat" },
  { id: "pulses", label: "Pulses" },
];

export default function ProductTabs() {
  const [active, setActive] = useState("home");

  const renderSection = () => {
    switch (active) {
      case "home":
        return <HomeSection />;
      case "rice":
        return <RiceSection />;
      case "wheat":
        return <WheatSection />;
      case "pulses":
        return <PulsesSection />;

      default:
        return <HomeSection />;
    }
  };

  return (
    <section id="products" className="py-10 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto pb-3">
          <div className="inline-flex gap-2 rounded-full bg-slate-100 p-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-4 md:px-5 py-2 text-xs md:text-sm rounded-full font-medium whitespace-nowrap transition ${
                  active === tab.id
                    ? "bg-white shadow text-primary"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">{renderSection()}</div>
      </div>
    </section>
  );
}
