"use client";

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="text-3xl">🌾</div>
          <div>
            <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
              Agri Trading Business
            </h1>
            <p className="text-xs text-slate-500 -mt-1">
              Premium Agricultural Produce
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#top" className="text-slate-700 hover:text-primary transition">Overview</a>
          <a href="#products" className="text-slate-700 hover:text-primary transition">Products</a>
          <a href="#quality" className="text-slate-700 hover:text-primary transition">Quality</a>
          <a href="#contact" className="text-slate-700 hover:text-primary transition">Contact</a>
        </nav>

        {/* Desktop CTA */}
        {/* <a
          href="#contact"
          className="hidden md:inline-block bg-[#2d5016] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow hover:bg-primary/90 transition"
        >
          Get Quote
        </a> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white border-t border-slate-200 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
          <a
            onClick={() => setOpen(false)}
            href="#top"
            className="text-slate-700 hover:text-primary transition"
          >
            Overview
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#products"
            className="text-slate-700 hover:text-primary transition"
          >
            Products
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#quality"
            className="text-slate-700 hover:text-primary transition"
          >
            Quality
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="text-slate-700 hover:text-primary transition"
          >
            Contact
          </a>

          {/* Mobile CTA */}
          {/* <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#2d5016] text-white w-full text-center px-5 py-2.5 rounded-full text-sm font-semibold shadow hover:bg-primary/90 transition"
          >
            Get Quote
          </a> */}
        </nav>
      </div>
    </header>
  );
}
