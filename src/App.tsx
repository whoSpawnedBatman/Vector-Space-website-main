/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { MenuDrawer } from './components/MenuDrawer';
import { Hero } from './components/Hero';
import { WhatVectorSpaceDoes } from './components/WhatVectorSpaceDoes';
import { WhoItIsBuiltFor } from './components/WhoItIsBuiltFor';
import { CustomerStories } from './components/CustomerStories';
import { Compliance } from './components/Compliance';
import { FAQ } from './components/FAQ';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';
import { Language, getTranslations } from './utils/i18n';

const DemoModal = lazy(() =>
  import('./components/DemoModal').then((m) => ({ default: m.DemoModal }))
);
const VideoModal = lazy(() =>
  import('./components/VideoModal').then((m) => ({ default: m.VideoModal }))
);
const StoryModal = lazy(() =>
  import('./components/StoryModal').then((m) => ({ default: m.StoryModal }))
);

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedStoryTitle, setSelectedStoryTitle] = useState<string | null>(null);
  const [demoInitialEmail, setDemoInitialEmail] = useState('');

  // Lenis smooth scroll (skipped for users who prefer reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 0.9,              // snappier feel
      easing: (t) => 1 - Math.pow(1 - t, 4),  // quartic ease-out: fast start, smooth end
      smoothWheel: true,
      wheelMultiplier: 1.1,       // slightly amplified wheel for responsiveness
      touchMultiplier: 1.5,       // snappier on touch/trackpad
    });

    (window as any).__lenis = lenis;
    window.dispatchEvent(new CustomEvent('lenis-ready', { detail: lenis }));

    let rafHandle: number;
    function raf(time: number) {
      lenis.raf(time);
      rafHandle = requestAnimationFrame(raf);
    }
    rafHandle = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafHandle);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  // Update HTML lang attribute whenever language changes
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const t = getTranslations(currentLanguage);

  const handleOpenDemo = (email = '') => {
    setDemoInitialEmail(email);
    setIsDemoModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (destination: string) => {
    const dest = destination.toLowerCase().trim();
    if (dest.includes('demo') || dest.includes('contact')) {
      handleOpenDemo();
    } else if (dest.includes('video') || dest.includes('action')) {
      setIsVideoModalOpen(true);
    } else if (dest === 'vector space' || dest === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (dest.includes('capabilit') || dest.includes('what does')) {
      scrollToSection('capabilities');
    } else if (dest.includes('principle') || dest.includes('compliance')) {
      scrollToSection('principles');
    } else if (dest.includes('customer') || dest.includes('stories')) {
      scrollToSection('stories');
    } else if (dest.includes('faq') || dest.includes('question')) {
      scrollToSection('faq');
    } else {
      setSelectedStoryTitle(destination);
    }
  };

  return (
    <div className="min-h-screen bg-[#050B1E] text-white flex flex-col selection:bg-[#FF3E24] selection:text-white">
      {/* Pinned Top Navigation with Language Switcher */}
      <Navbar
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        menuLabel={t.navbar.menu}
        closeLabel={t.navbar.close}
      />

      {/* Full-width Curtain Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectAction={handleNavigation}
      />

      {/* Main Page Layout Sections */}
      <main className="flex-1">
        {/* Hero with Portrait, 3D Floating Glass Card, and Count-Up Metrics */}
        <Hero
          onOpenDemo={() => handleOpenDemo()}
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onOpenBlog={() =>
            setSelectedStoryTitle(
              currentLanguage === 'es'
                ? 'Blog de Diseño y Tecnología de Vector Space'
                : 'Vector Space Engineering & Design Blog'
            )
          }
          t={t.hero}
          statsT={t.stats}
        />

        {/* Section 2: What Vector Space Does (Hand-drawn sketch cards) */}
        <WhatVectorSpaceDoes t={t.whatDoes} />

        {/* Section 3: Who Vector Space Is Built For (Interactive 4-tab switcher) */}
        <WhoItIsBuiltFor onOpenDemo={() => handleOpenDemo()} t={t.whoFor} />

        {/* Section 4: Customer Feedback & Testimonials (Interactive metrics carousel) */}
        <CustomerStories
          onSelectStory={(title) => setSelectedStoryTitle(title)}
          t={t.stories}
        />

        {/* Section 5: Certified & Compliant (SOC II, ISO 27001, GDPR, HIPAA) */}
        <Compliance t={t.compliance} />

        {/* Section 6: Frequent Questions (2-column interactive accordion) */}
        <FAQ t={t.faq} />

        {/* Section 7: Get Started With Vector Space (Brushed metallic banner & email form) */}
        <GetStarted
          onSuccessDemo={(email) => handleOpenDemo(email)}
          t={t.getStarted}
        />
      </main>

      {/* Footer with Light Streaks background photo */}
      <Footer onNavigate={handleNavigation} t={t.footer} />

      {/* Interactive Modals — code-split, loaded on first open */}
      <Suspense fallback={null}>
        {isDemoModalOpen && (
          <DemoModal
            isOpen={isDemoModalOpen}
            onClose={() => setIsDemoModalOpen(false)}
            initialEmail={demoInitialEmail}
            t={t.modals.demo}
          />
        )}

        {isVideoModalOpen && (
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            t={t.modals.video}
          />
        )}

        {selectedStoryTitle !== null && (
          <StoryModal
            title={selectedStoryTitle}
            onClose={() => setSelectedStoryTitle(null)}
            onOpenDemo={() => handleOpenDemo()}
            t={t.modals.story}
          />
        )}
      </Suspense>
    </div>
  );
}
