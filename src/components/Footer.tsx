import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#043927' }}
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: 'rgba(197,160,89,0.3)' }} />

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/Logo_Tanjosu.png"
                alt="Tanjosu Logo"
                className="w-12 h-12 object-contain rounded-full shadow-lg"
                style={{ background: 'white' }}
              />
              <div>
                <div
                  className="font-black text-lg tracking-widest"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#FDFCFB' }}
                >
                  TANJOSU
                </div>
                <div className="text-[10px] tracking-[0.2em]" style={{ color: '#C5A059' }}>
                  Ketan Hejo Susu · Cianjur
                </div>
              </div>
            </div>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'rgba(253,252,251,0.55)' }}
            >
              Kelezatan Ketan Hejo Susu yang autentik dengan sentuhan modern kekinian.
              Hadir untuk memuaskan selera Anda setiap hari.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold tracking-widest"
              style={{
                backgroundColor: 'rgba(197,160,89,0.15)',
                border: '1px solid rgba(197,160,89,0.4)',
                color: '#C5A059',
              }}
            >
              #GAENAKGAPUASBELILAGI
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="font-bold text-base tracking-widest uppercase mb-5"
              style={{ color: '#C5A059' }}
            >
              Navigasi
            </h4>
            <div className="space-y-3">
              {[
                { label: 'Beranda', href: '#hero' },
                { label: 'Menu Lengkap', href: '#menu' },
                { label: 'Tentang Kami', href: '#about' },
                { label: 'Lokasi & Kontak', href: '#lokasi' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-base transition-colors duration-200 hover:text-yellow-400"
                  style={{ color: 'rgba(253,252,251,0.55)' }}
                >
                  <span style={{ color: 'rgba(197,160,89,0.6)' }}>→</span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="font-bold text-base tracking-widest uppercase mb-5"
              style={{ color: '#C5A059' }}
            >
              Hubungi Kami
            </h4>
            <div className="space-y-4 mb-6">
              <a
                href="https://wa.me/6285800186176"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base group"
                style={{ color: 'rgba(253,252,251,0.55)' }}
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="#25D366" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="group-hover:text-white transition-colors">0858-0018-6176</span>
              </a>
              <a
                href="https://www.google.com/maps/place/Tanjosu+Cianjur/@-6.8268971,107.1362129,21z/data=!4m6!3m5!1s0x2e685300291b059b:0x492fc0261f6428c4!8m2!3d-6.8270063!4d107.1362121!16s%2Fg%2F11xyp5_2lh!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base group"
                style={{ color: 'rgba(253,252,251,0.55)' }}
              >
                <span className="text-base">📍</span>
                <span className="group-hover:text-white transition-colors">Jl. Siliwangi, Sawah Gede, Cianjur</span>
              </a>
              <div
                className="flex items-center gap-3 text-base"
                style={{ color: 'rgba(253,252,251,0.55)' }}
              >
                <span className="text-base">🕙</span>
                Senin – Minggu, 10.00 – 22.00 WIB
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  href: 'https://instagram.com/tanjosu_cianjur',
                  label: 'Instagram',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="4" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.tiktok.com/@ketanhejosusucianjur',
                  label: 'TikTok',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(197,160,89,0.15)',
                    border: '1px solid rgba(197,160,89,0.3)',
                    color: '#C5A059',
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm"
          style={{
            borderTop: '1px solid rgba(253,252,251,0.08)',
            color: 'rgba(253,252,251,0.35)',
          }}
        >
          <p>© {year} TANJOSU Cianjur. Ketan Hejo Susu Premium.</p>
          <p style={{ color: 'rgba(197,160,89,0.6)' }}>#GAENAKGAPUASBELILAGI 🌿</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6285800186176?text=Halo%20Tanjosu!%20Saya%20mau%20pesan%20Ketan%20Hejo%20Susu%20dong%20%F0%9F%8C%BF"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          backgroundColor: '#25D366',
          boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 300 }}
        whileHover={{ scale: 1.1, boxShadow: '0 12px 40px rgba(37,211,102,0.5)' }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            animation: 'pulse-ring 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
            border: '2px solid #25D366',
          }}
        />
      </motion.a>
    </footer>
  );
}
