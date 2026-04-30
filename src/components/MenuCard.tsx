import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  price: number;
  emoji?: string;
}

interface MenuCardProps {
  category: string;
  emoji: string;
  items: MenuItem[];
  accentColor?: string;
  index: number;
}

export default function MenuCard({ category, emoji, items, accentColor = '#043927', index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="menu-card rounded-3xl overflow-hidden group"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(4,57,39,0.08)',
        boxShadow: '0 4px 24px rgba(4,57,39,0.06)',
      }}
    >
      {/* Header */}
      <div
        className="px-6 pt-6 pb-5 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
        }}
      >
        {/* Decorative circle */}
        <div
          className="absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-20"
          style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
        />
        <div className="relative flex items-center gap-3">
          <span className="text-3xl">{emoji}</span>
          <div>
            <h3
              className="font-black text-xl tracking-wide uppercase"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#FDFCFB',
                letterSpacing: '0.05em',
              }}
            >
              {category}
            </h3>
            <div
              className="h-0.5 mt-1 rounded-full w-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
            />
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="px-6 pb-6 pt-4 space-y-0">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2">
                {item.emoji && (
                  <span className="text-sm">{item.emoji}</span>
                )}
                <span
                  className="text-base font-medium"
                  style={{ color: '#1a1a1a' }}
                >
                  {item.name}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span
                  className="text-sm font-black px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(4,57,39,0.06)',
                    color: accentColor,
                  }}
                >
                  Rp {item.price.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
            {i < items.length - 1 && (
              <div
                className="h-px"
                style={{ backgroundColor: 'rgba(4,57,39,0.06)' }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
