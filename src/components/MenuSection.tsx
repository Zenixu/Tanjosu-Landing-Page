import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCard from './MenuCard';

const menuData = [
  {
    category: 'KHS Dasar',
    emoji: '🍚',
    accentColor: '#043927',
    items: [
      { name: 'KHS Kelapa', price: 8000 },
      { name: 'KHS Keju', price: 10000 },
    ],
  },
  {
    category: 'Coklat',
    emoji: '🍫',
    accentColor: '#5c3317',
    items: [
      { name: 'KHS Coklat', price: 12000 },
      { name: 'KHS Coklat Kacang', price: 12000 },
      { name: 'KHS Coklat Keju', price: 14000 },
      { name: 'KHS Coklat Regal', price: 14000 },
      { name: 'KHS Coklat Crunchy', price: 14000 },
      { name: 'KHS Coklat Crunchy Keju', price: 16000 },
    ],
  },
  {
    category: 'Green Tea',
    emoji: '🍵',
    accentColor: '#2d6a4f',
    items: [
      { name: 'KHS Green Tea', price: 12000 },
      { name: 'KHS Green Tea Keju', price: 14000 },
      { name: 'KHS Green Tea Almond', price: 14000 },
      { name: 'KHS Green Tea Crunchy', price: 12000 },
      { name: 'KHS Green Tea Crunchy Keju', price: 14000 },
    ],
  },
  {
    category: 'Milo',
    emoji: '🧋',
    accentColor: '#6b4c11',
    items: [
      { name: 'KHS Milo', price: 12000 },
      { name: 'KHS Milo Coco Krunch', price: 14000 },
      { name: 'KHS Milo Keju', price: 14000 },
    ],
  },
  {
    category: 'Taro',
    emoji: '🫐',
    accentColor: '#6b3fa0',
    items: [
      { name: 'KHS Taro', price: 12000 },
      { name: 'KHS Taro Keju', price: 14000 },
    ],
  },
  {
    category: 'Strawberry',
    emoji: '🍓',
    accentColor: '#be123c',
    items: [
      { name: 'KHS Strawberry', price: 15000 },
      { name: 'KHS Strawberry Keju', price: 17000 },
    ],
  },
  {
    category: 'Durian',
    emoji: '🌟',
    accentColor: '#a16207',
    items: [
      { name: 'KHS Durian', price: 15000 },
      { name: 'KHS Durian Keju', price: 18000 },
    ],
  },
  {
    category: 'Mangga',
    emoji: '🥭',
    accentColor: '#b45309',
    items: [
      { name: 'KHS Mangga', price: 14000 },
      { name: 'KHS Mangga Keju', price: 16000 },
    ],
  },
  {
    category: 'Tiramisu',
    emoji: '🍮',
    accentColor: '#78350f',
    items: [
      { name: 'KHS Tiramisu', price: 12000 },
      { name: 'KHS Tiramisu Keju', price: 14000 },
      { name: 'KHS Tiramisu Regal', price: 14000 },
    ],
  },
  {
    category: 'Hazelnut x Krunch',
    emoji: '🌰',
    accentColor: '#92400e',
    items: [
      { name: 'KHS Hazelnut', price: 14000 },
      { name: 'KHS Hazelnut Keju', price: 16000 },
      { name: 'KHS Hazelnut Coco Krunch', price: 16000 },
    ],
  },
  {
    category: 'Vanila x Red Velvet',
    emoji: '🎂',
    accentColor: '#991b1b',
    items: [
      { name: 'KHS Vanila', price: 12000 },
      { name: 'KHS Vanila Keju', price: 14000 },
      { name: 'KHS Vanila Red Velvet', price: 16000 },
    ],
  },
];

const tabs = ['Semua', 'Dasar', 'Coklat & Teh', 'Buah', 'Signature'];

const tabFilter: Record<string, string[]> = {
  'Semua': menuData.map(m => m.category),
  'Dasar': ['KHS Dasar'],
  'Coklat & Teh': ['Coklat', 'Green Tea', 'Milo', 'Taro'],
  'Buah': ['Strawberry', 'Durian', 'Mangga'],
  'Signature': ['Tiramisu', 'Hazelnut x Krunch', 'Vanila x Red Velvet'],
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('Semua');

  const filteredMenu = menuData.filter(m =>
    tabFilter[activeTab].includes(m.category)
  );

  return (
    <section id="menu" className="py-20 md:py-28" style={{ backgroundColor: '#FDFCFB' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-sm font-semibold tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: 'rgba(4,57,39,0.06)',
              color: '#043927',
            }}
          >
            ✦ Menu Kami
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#043927',
            }}
          >
            Pilihan{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(90deg, #C5A059, #D4B97A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Lengkap
            </span>
          </h2>
          <p
            className="max-w-md mx-auto text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(4,57,39,0.6)' }}
          >
            Dari varian klasik hingga signature terbaru, semua dibuat segar setiap hari
            dengan bahan berkualitas premium.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-300"
              style={{
                backgroundColor: activeTab === tab ? '#043927' : 'transparent',
                color: activeTab === tab ? '#FDFCFB' : '#043927',
                border: `1.5px solid ${activeTab === tab ? '#043927' : 'rgba(4,57,39,0.2)'}`,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMenu.map((menu, i) => (
              <MenuCard
                key={menu.category}
                category={menu.category}
                emoji={menu.emoji}
                items={menu.items}
                accentColor={menu.accentColor}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p
            className="text-base md:text-lg mb-6 font-medium"
            style={{ color: 'rgba(4,57,39,0.6)' }}
          >
            Pesan sekarang dan nikmati kelezatan Ketan Hejo Susu premium!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C7AACCAYRUUKSA&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C7AACCAYRUUKSA&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload&fbclid=PAT01DUARfxd5leHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAad5UPWLkxJdmjGvpH2z3aFnk4Hs0bYDQPcmJsEAaeLhGcMN59zdcub3SHSoiw_aem_YfMGDtcab8NvVPes3TIhBw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-base shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #00B14F, #007a37)',
                boxShadow: '0 8px 30px rgba(0,177,79,0.3)',
              }}
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(0,177,79,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              🛵 Order via GrabFood
            </motion.a>
            <motion.a
              href="https://wa.me/6285800186176?text=Halo%20Tanjosu!%20Saya%20mau%20pesan%20Ketan%20Hejo%20Susu%20dong%20%F0%9F%8C%BF%20Bisa%20info%20menu%20dan%20harganya%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base"
              style={{
                backgroundColor: '#043927',
                color: '#FDFCFB',
                boxShadow: '0 8px 30px rgba(4,57,39,0.2)',
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
