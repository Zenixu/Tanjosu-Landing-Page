import { motion } from 'framer-motion';

export default function LocationSection() {
  const whatsappMsg = encodeURIComponent(
    'Halo Tanjosu! Saya mau tanya lokasi dan pesan Ketan Hejo Susu dong 🌿'
  );

  return (
    <section id="lokasi" className="py-20 md:py-28" style={{ backgroundColor: '#FDFCFB' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-sm font-semibold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(4,57,39,0.06)', color: '#043927' }}
          >
            ✦ Temukan Kami
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#043927' }}
          >
            Lokasi &{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #C5A059, #D4B97A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kontak
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {/* Address */}
            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(4,57,39,0.08)',
                boxShadow: '0 4px 24px rgba(4,57,39,0.06)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: 'rgba(4,57,39,0.08)' }}
                >
                  📍
                </div>
                <div>
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ color: '#043927' }}
                  >
                    Alamat
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'rgba(4,57,39,0.65)' }}
                  >
                    Bekas Pom Joglo, Jl. Siliwangi,
                    <br />
                    Sawah Gede, Cianjur,
                    <br />
                    Jawa Barat
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(4,57,39,0.08)',
                boxShadow: '0 4px 24px rgba(4,57,39,0.06)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: 'rgba(4,57,39,0.08)' }}
                >
                  🕙
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{ color: '#043927' }}
                  >
                    Jam Operasional
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-base" style={{ color: 'rgba(4,57,39,0.65)' }}>
                        Senin – Minggu
                      </span>
                      <span
                        className="text-base font-bold px-3 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(4,57,39,0.08)', color: '#043927' }}
                      >
                        10.00 – 22.00 WIB
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm" style={{ color: '#22c55e' }}>
                        Buka Setiap Hari
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div
              className="p-6 rounded-3xl"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(4,57,39,0.08)',
                boxShadow: '0 4px 24px rgba(4,57,39,0.06)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: 'rgba(4,57,39,0.08)' }}
                >
                  📞
                </div>
                <div className="flex-1">
                  <h3
                    className="font-bold text-base mb-3"
                    style={{ color: '#043927' }}
                  >
                    Hubungi Kami
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="https://wa.me/6285800186176"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-base font-medium hover:underline"
                      style={{ color: '#043927' }}
                    >
                      <svg className="w-4 h-4" fill="#25D366" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      0858-0018-6176
                    </a>
                    <a
                      href="https://instagram.com/tanjosu_cianjur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-base font-medium hover:underline"
                      style={{ color: '#043927' }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="4" strokeWidth="2"/>
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                      </svg>
                      @tanjosu_cianjur
                    </a>
                    <a
                      href="https://www.tiktok.com/@ketanhejosusucianjur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-base font-medium hover:underline"
                      style={{ color: '#043927' }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z"/>
                      </svg>
                      @tanjosu_cianjur
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Order Button */}
            <motion.a
              href={`https://wa.me/6285800186176?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-base"
              style={{
                background: 'linear-gradient(135deg, #043927, #065f46)',
                boxShadow: '0 8px 30px rgba(4,57,39,0.25)',
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(4,57,39,0.35)' }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Tanya & Pesan via WhatsApp
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ height: '500px', border: '1px solid rgba(4,57,39,0.1)' }}
          >
            <iframe
              src="https://maps.google.com/maps?q=-6.8270063,107.1362121&t=&z=19&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi TANJOSU Cianjur"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
