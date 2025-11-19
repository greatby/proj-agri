export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-3">
              Agri Trading Business
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner for premium quality agricultural produce
              sourced from certified farms across India.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-white transition">Rice</a></li>
              <li><a className="hover:text-white transition">Wheat</a></li>
              <li><a className="hover:text-white transition">Pulses</a></li>
              <li><a className="hover:text-white transition">Millets</a></li>
              <li><a className="hover:text-white transition">Spices</a></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Business</h3>
            <ul className="space-y-2 text-sm">
              <li>Bulk Orders</li>
              <li>Farmer Partnerships</li>
              <li>Quality Assurance</li>
              <li>Export Logistics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: hello@epfdesk.com</li>
              <li>Phone: +919945933333</li>
              <li>Location: 62/63 Church Street, Bengaluru, Karnataka, 560001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Agri Trading Business — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
