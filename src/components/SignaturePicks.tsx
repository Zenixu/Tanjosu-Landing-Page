import { motion } from 'framer-motion';

const picks = [
  {
    name: 'KHS Durian Keju',
    desc: 'Paduan durian premium dan keju parut di atas ketan hijau lembut',
    price: 18000,
    emoji: '🌟',
    tag: 'Best Seller',
    tagColor: '#C5A059',
    img: '/images/ketan-durian.webp',
  },
  {
    name: 'KHS Vanila Red Velvet',
    desc: 'Keanggunan red velvet bertemu vanila manis dalam satu sajian',
    price: 16000,
    emoji: '🎂',
    tag: 'Signature',
    tagColor: '#be123c',
    img: '/images/ketan-redvelvet.webp',
  },
  {
    name: 'KHS Hazelnut Coco Krunch',
    desc: 'Hazelnut cokelat dengan crunch yang memanjakan setiap gigitan',
    price: 16000,
    emoji: '🌰',
    tag: 'Favorit',
    tagColor: '#92400e',
    img: '/images/ketan-hazelnut.webp',
  },
  {
    name: 'KHS Strawberry Keju',
    desc: 'Segar strawberry bertemu gurih keju di atas ketan hijau premium',
    price: 17000,
    emoji: '🍓',
    tag: 'Popular',
    tagColor: '#be123c',
    img: '/images/ketan-strawberry.webp',
  },
];

export default function SignaturePicks() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: '#043927' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-sm font-semibold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: 'rgba(197,160,89,0.15)',
              border: '1px solid rgba(197,160,89,0.4)',
              color: '#C5A059',
            }}
          >
            ✦ Menu Unggulan
          </span>
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#FDFCFB',
            }}
          >
            Pilihan{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #C5A059, #F0D89A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Terpopuler
            </span>
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: 'rgba(253,252,251,0.55)' }}
          >
            Varian yang paling banyak dipesan dan dicintai pelanggan setia kami
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {picks.map((pick, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pick.img}
                  alt={pick.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(4,57,39,0.8))' }}
                />
                {/* Tag */}
                <div
                  className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full tracking-wide"
                  style={{ backgroundColor: pick.tagColor, color: 'white' }}
                >
                  {pick.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{pick.emoji}</span>
                    <h3
                      className="font-bold text-base leading-tight"
                      style={{ color: '#FDFCFB' }}
                    >
                      {pick.name}
                    </h3>
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'rgba(253,252,251,0.5)' }}
                >
                  {pick.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-black text-lg"
                    style={{
                      background: 'linear-gradient(90deg, #C5A059, #F0D89A)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Rp {pick.price.toLocaleString('id-ID')}
                  </span>
                  <a
                    href={`https://wa.me/6285800186176?text=Halo%20Tanjosu!%20Saya%20mau%20pesan%20${encodeURIComponent(pick.name)}%20dong%20%F0%9F%8C%BF`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: 'rgba(197,160,89,0.2)',
                      border: '1px solid rgba(197,160,89,0.5)',
                      color: '#C5A059',
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    Pesan
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
