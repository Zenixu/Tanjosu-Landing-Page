import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Menu', href: '#menu' },
  { label: 'Tentang', href: '#about' },
  { label: 'Lokasi', href: '#lokasi' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = ['hero', 'menu', 'about', 'lokasi'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-4 md:mx-auto md:max-w-5xl rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass-dark shadow-2xl px-5 py-3'
              : 'bg-transparent px-5 py-2'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/images/Logo_Tanjosu.png"
                alt="Tanjosu Logo"
                className="w-10 h-10 object-contain rounded-full shadow-lg"
                style={{ background: 'white' }}
              />
              <div className="leading-none">
                <span
                  className="block font-black text-base tracking-widest"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: scrolled ? '#FDFCFB' : '#FDFCFB',
                    textShadow: scrolled ? 'none' : '0 2px 8px rgba(4,57,39,0.5)',
                  }}
                >
                  TANJOSU
                </span>
                <span
                  className="block text-[11px] md:text-xs tracking-[0.2em] uppercase"
                  style={{ color: '#C5A059' }}
                >
                  Ketan Hejo Susu
                </span>
              </div>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`px-4 py-2 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-yellow-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="h-0.5 mt-0.5 rounded-full"
                      style={{ backgroundColor: '#C5A059' }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://wa.me/6285800186176?text=Halo%20Tanjosu!%20Saya%20mau%20pesan%20Ketan%20Hejo%20Susu%20dong%20%F0%9F%8C%BF"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300"
                style={{ backgroundColor: '#25D366', color: 'white' }}
                whileHover={{ scale: 1.05, backgroundColor: '#22c55e' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <motion.span
                className="block w-6 h-0.5 rounded-full"
                style={{ backgroundColor: '#FDFCFB' }}
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              />
              <motion.span
                className="block w-6 h-0.5 rounded-full"
                style={{ backgroundColor: '#FDFCFB' }}
                animate={{ opacity: menuOpen ? 0 : 1 }}
              />
              <motion.span
                className="block w-6 h-0.5 rounded-full"
                style={{ backgroundColor: '#FDFCFB' }}
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-[99] rounded-2xl overflow-hidden shadow-2xl md:hidden"
            style={{ background: 'rgba(4, 57, 39, 0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="flex items-center justify-between px-4 py-3 rounded-xl font-medium text-xl"
                  style={{
                    color: activeSection === link.href.replace('#', '') ? '#C5A059' : '#FDFCFB',
                    backgroundColor: activeSection === link.href.replace('#', '') ? 'rgba(197,160,89,0.1)' : 'transparent',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                  <span style={{ color: '#C5A059' }}>→</span>
                </motion.a>
              ))}
              <div className="border-t border-white/10 mt-2 pt-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/6285800186176?text=Halo%20Tanjosu!%20Saya%20mau%20pesan%20Ketan%20Hejo%20Susu%20dong%20%F0%9F%8C%BF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pesan via WhatsApp
                </a>
                <a
                  href="https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C7AACCAYRUUKSA&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C7AACCAYRUUKSA&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload&fbclid=PAT01DUARfxd5leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad5UPWLkxJdmjGvpH2z3aFnk4Hs0bYDQPcmJsEAaeLhGcMN59zdcub3SHSoiw_aem_YfMGDtcab8NvVPes3TIhBw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white"
                  style={{ backgroundColor: '#00B14F' }}
                >
                  🛵 Order GrabFood
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
