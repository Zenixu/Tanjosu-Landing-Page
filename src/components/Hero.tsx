import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-end overflow-hidden"
      style={{ backgroundColor: '#043927' }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/ketan-hero.jpg"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
        }}
      >
        <source src="/videos/Ketan_Hejo_Susu.mp4" type="video/mp4" />
      </video>

      {/* Fallback background image (always shown, video overlays if loaded) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/ketan-hero.jpg)' }}
      />

      {/* Overlay gradient */}
      <div className="hero-overlay absolute inset-0 z-[1]" />

      {/* Decorative leaf pattern */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 text-6xl opacity-20"
          animate={{ rotate: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          🌿
        </motion.div>
        <motion.div
          className="absolute top-40 left-8 text-4xl opacity-15"
          animate={{ rotate: [0, -8, 0], y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          🍃
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-20 text-5xl opacity-10"
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          🌾
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-[3] w-full max-w-5xl mx-auto px-6 pb-20 md:pb-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase"
          style={{
            backgroundColor: 'rgba(4, 57, 39, 0.85)',
            border: '1px solid rgba(197, 160, 89, 0.6)',
            color: '#FDFCFB',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Buka Setiap Hari · 10.00 – 22.00 WIB
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-4 tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#FDFCFB',
            }}
          >
            Kelezatan
            <br />
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #C5A059, #F0D89A, #C5A059)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Klasik,
            </span>
            <br />
            <span style={{ color: '#FDFCFB' }}>Sentuhan</span>{' '}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                color: 'rgba(253,252,251,0.7)',
              }}
            >
              Modern
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-2xl mb-8 max-w-md leading-relaxed"
          style={{ color: 'rgba(253,252,251,0.75)' }}
        >
          Nikmati perpaduan autentik{' '}
          <strong style={{ color: '#C5A059' }}>Ketan Hejo</strong> yang lembut
          dengan siraman susu kental manis dan topping premium pilihan kami.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* GrabFood */}
          <motion.a
            href="https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C7AACCAYRUUKSA&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C7AACCAYRUUKSA&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload&fbclid=PAT01DUARfxd5leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad5UPWLkxJdmjGvpH2z3aFnk4Hs0bYDQPcmJsEAaeLhGcMN59zdcub3SHSoiw_aem_YfMGDtcab8NvVPes3TIhBw"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold text-white text-base tracking-wide shadow-2xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #00B14F, #007a37)',
              boxShadow: '0 8px 30px rgba(0,177,79,0.4)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(0,177,79,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-xl">🛵</span>
            <div className="text-left">
              <div className="text-xs opacity-80 tracking-wider uppercase">Order Sekarang</div>
              <div className="text-base font-bold">GrabFood</div>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/6285800186176?text=Halo%20Tanjosu!%20Saya%20mau%20pesan%20Ketan%20Hejo%20Susu%20dong%20%F0%9F%8C%BF%20Bisa%20info%20menu%20dan%20harganya%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold text-base tracking-wide transition-all duration-300"
            style={{
              backgroundColor: 'rgba(253,252,251,0.1)',
              border: '1.5px solid rgba(253,252,251,0.3)',
              color: '#FDFCFB',
              backdropFilter: 'blur(10px)',
            }}
            whileHover={{
              scale: 1.04,
              backgroundColor: 'rgba(253,252,251,0.2)',
              borderColor: 'rgba(197,160,89,0.6)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" fill="currentColor" style={{ color: '#25D366' }} viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80 tracking-wider uppercase">Chat Langsung</div>
              <div className="text-base font-bold">WhatsApp</div>
            </div>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToMenu}
          className="mt-16 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: '#FDFCFB' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
          whileHover={{ opacity: 1 }}
        >
          <span className="text-sm tracking-widest uppercase">Lihat Menu</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #FDFCFB)',
        }}
      />
    </section>
  );
}
