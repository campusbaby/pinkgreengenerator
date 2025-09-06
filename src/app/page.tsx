'use client';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Sections/HeroSection';
import EditorSection from '@/components/Sections/EditorSection';
import HowItWorks from '@/components/Sections/HowItWorks';
import Gallery from '@/components/Sections/Gallery';
import TwitterShowcase from '@/components/Sections/TwitterShowcase';
import FAQ from '@/components/Sections/FAQ';
import BottomCTA from '@/components/Sections/BottomCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* 🌊 背景装饰 */}
      <div className="bg-gradient-mesh"></div>
      
      <Header />

      <HeroSection />

      <EditorSection />

      <HowItWorks />


      {/* Gallery Section */}
      <Gallery />

      <TwitterShowcase />

      {/* FAQ Section */}
      <FAQ />

      <BottomCTA />

      <Footer />
    </main>
  );
}