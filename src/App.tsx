import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import SignaturePicks from './components/SignaturePicks';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />

          <main>
            <Hero />
            <MarqueeBanner />
            <SignaturePicks />
            <MenuSection />
            <AboutSection />
            <LocationSection />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
