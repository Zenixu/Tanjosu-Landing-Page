import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const updateCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setDotPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnterHoverable = () => setIsHovering(true);
    const handleMouseLeaveHoverable = () => setIsHovering(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const hoverables = document.querySelectorAll('a, button, [data-hover]');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterHoverable);
      el.addEventListener('mouseleave', handleMouseLeaveHoverable);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterHoverable);
        el.removeEventListener('mouseleave', handleMouseLeaveHoverable);
      });
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full border-2 hidden md:block"
        style={{
          borderColor: isHovering ? '#C5A059' : '#043927',
          width: isHovering ? 48 : 28,
          height: isHovering ? 48 : 28,
          opacity: isVisible ? 1 : 0,
          mixBlendMode: 'normal',
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 14),
          y: mousePosition.y - (isHovering ? 24 : 14),
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full hidden md:block"
        style={{
          backgroundColor: '#C5A059',
          width: isHovering ? 8 : 5,
          height: isHovering ? 8 : 5,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          x: dotPosition.x - (isHovering ? 4 : 2.5),
          y: dotPosition.y - (isHovering ? 4 : 2.5),
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.05 }}
      />
    </>
  );
}
