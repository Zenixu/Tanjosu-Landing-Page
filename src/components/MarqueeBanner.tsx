

const items = [
  '🍚 KHS Kelapa',
  '🧀 KHS Keju',
  '🍫 KHS Coklat Crunchy',
  '🍓 KHS Strawberry Keju',
  '🥭 KHS Mangga Keju',
  '🍈 KHS Durian Keju',
  '🍮 KHS Tiramisu Regal',
  '🌰 KHS Hazelnut Coco Krunch',
  '🎂 KHS Vanila Red Velvet',
  '🍵 KHS Green Tea Crunchy',
  '🧋 KHS Taro Keju',
  '🥛 KHS Milo Coco Krunch',
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden py-4 relative"
      style={{ backgroundColor: '#043927' }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #043927, transparent)' }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #043927, transparent)' }}
      />

      <div className="marquee-track">
        {doubled.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 whitespace-nowrap"
          >
            <span
              className="text-sm font-semibold tracking-wide"
              style={{ color: '#FDFCFB' }}
            >
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: '#C5A059' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
