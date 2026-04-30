import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#043927' }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-800 opacity-10 text-4xl select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                🌿
              </motion.div>
            ))}
          </div>

          {/* Main Logo Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Pulse rings */}
            <div className="relative flex items-center justify-center mb-8">
              <motion.div
                className="absolute w-32 h-32 rounded-full border border-yellow-400 opacity-30"
                animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute w-32 h-32 rounded-full border border-yellow-400 opacity-20"
                animate={{ scale: [1, 2.5], opacity: [0.2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
              />

              {/* Logo circle */}
              <motion.div
                className="w-32 h-32 rounded-full flex items-center justify-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #065f46, #043927)' }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400 opacity-60" />
                <div className="text-center">
                  <div className="text-5xl mb-1">🍚</div>
                </div>
              </motion.div>
            </div>

            {/* Brand Name */}
            <motion.h1
              className="font-bold text-5xl tracking-widest mb-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#FDFCFB',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              TANJOSU
            </motion.h1>

            <motion.p
              className="text-sm tracking-[0.3em] uppercase mb-2"
              style={{ color: '#C5A059' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Ketan Hejo Susu
            </motion.p>

            <motion.p
              className="text-xs tracking-[0.15em] uppercase"
              style={{ color: 'rgba(253,252,251,0.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Cianjur
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="mt-12 w-48 h-0.5 rounded-full overflow-hidden"
              style={{ backgroundColor: 'rgba(197, 160, 89, 0.3)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: '#C5A059' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
              />
            </motion.div>

            {/* Hashtag */}
            <motion.p
              className="mt-6 text-xs font-medium tracking-widest"
              style={{ color: '#C5A059' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            >
              #GAENAKGAPUASBELILAGI
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
