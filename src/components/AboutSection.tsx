import { motion } from 'framer-motion';

const features = [
  {
    icon: '🌿',
    title: 'Bahan Segar',
    desc: 'Ketan hijau segar dipilih langsung setiap hari untuk memastikan kelembutan dan kualitas terbaik.',
  },
  {
    icon: '🥛',
    title: 'Susu Premium',
    desc: 'Siraman susu kental manis berkualitas tinggi yang menciptakan perpaduan rasa sempurna.',
  },
  {
    icon: '👨‍🍳',
    title: 'Resep Otentik',
    desc: 'Dibuat dengan resep turun-temurun yang telah disempurnakan dengan sentuhan modern kekinian.',
  },
  {
    icon: '📦',
    title: 'Kemasan Hygienis',
    desc: 'Disajikan dalam kemasan food-grade yang bersih, aman, dan tetap menjaga kelezatan produk.',
  },
];

const gallery = [
  { img: '/images/ketan-hero1.jpg', label: 'KHS Original' },
  { img: '/images/ketan-strawberry.jpg', label: 'KHS Strawberry Keju' },
  { img: '/images/ketan-durian.jpg', label: 'KHS Durian Keju' },
  { img: '/images/ketan-redvelvet.jpg', label: 'KHS Red Velvet' },
  { img: '/images/ketan-mangga.jpg', label: 'KHS Mangga Keju' },
  { img: '/images/ketan-hazelnut.jpg', label: 'KHS Hazelnut' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#f8f7f4' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-sm font-semibold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(4,57,39,0.06)', color: '#043927' }}
          >
            ✦ Tentang Kami
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#043927' }}
          >
            Mengapa{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #C5A059, #D4B97A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              TANJOSU?
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(4,57,39,0.6)' }}
          >
            TANJOSU hadir dengan misi sederhana: menyajikan Ketan Hejo Susu yang otentik
            dengan varian modern yang memanjakan selera semua kalangan.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-3xl text-center group hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(4,57,39,0.08)',
              }}
              whileHover={{ y: -6 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: '#043927' }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(4,57,39,0.55)' }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h3
            className="text-2xl md:text-3xl font-black"
            style={{ fontFamily: "'Playfair Display', serif", color: '#043927' }}
          >
            Galeri{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #C5A059, #D4B97A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Produk
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl overflow-hidden group aspect-square"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(4,57,39,0.85), transparent)' }}
              >
                <span
                  className="text-base font-semibold"
                  style={{ color: '#FDFCFB' }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-3xl p-8 md:p-10"
          style={{ backgroundColor: '#043927' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '20+', label: 'Varian Menu' },
              { value: '1000+', label: 'Pelanggan Puas' },
              { value: '7', label: 'Hari Buka' },
              { value: '12 Jam', label: 'Operasional' },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className="text-3xl md:text-4xl font-black mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: 'linear-gradient(90deg, #C5A059, #F0D89A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm tracking-wide uppercase"
                  style={{ color: 'rgba(253,252,251,0.6)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
