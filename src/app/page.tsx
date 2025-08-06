'use client';

import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import DiferenciaisSection from './components/sections/DiferenciaisSection';
import GaleriaSection from './components/sections/GaleriaSection';
import InfoComerciaisSection from './components/sections/InfoComerciaisSection';
import ContatoSection from './components/sections/ContatoSection';
import FooterSection from './components/sections/FooterSection';

// Carregamento dinâmico do componente de mapa para evitar erros de SSR
const RegiaoSection = dynamic(
  () => import('./components/sections/RegiaoSection'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <DiferenciaisSection />
        <GaleriaSection />
        <InfoComerciaisSection />
        <RegiaoSection />
        <ContatoSection />
      </main>
      <FooterSection />
    </div>
  );
}
