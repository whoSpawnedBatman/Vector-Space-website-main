/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MenuDrawer } from './components/MenuDrawer';
import { Hero } from './components/Hero';
import { WhatBallanceDoes } from './components/WhatBallanceDoes';
import { WhoItIsBuiltFor } from './components/WhoItIsBuiltFor';
import { CustomerStories } from './components/CustomerStories';
import { Compliance } from './components/Compliance';
import { FAQ } from './components/FAQ';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { VideoModal } from './components/VideoModal';
import { StoryModal } from './components/StoryModal';
import { Language, getTranslations } from './utils/i18n';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedStoryTitle, setSelectedStoryTitle] = useState<string | null>(null);
  const [demoInitialEmail, setDemoInitialEmail] = useState('');

  // Update HTML lang attribute whenever language changes
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const t = getTranslations(currentLanguage);

  const handleOpenDemo = (email = '') => {
    setDemoInitialEmail(email);
    setIsDemoModalOpen(true);
  };

  const handleNavigation = (destination: string) => {
    if (
      destination.toLowerCase().includes('demo') ||
      destination.toLowerCase().includes('contact')
    ) {
      handleOpenDemo();
    } else if (
      destination.toLowerCase().includes('video') ||
      destination.toLowerCase().includes('action')
    ) {
      setIsVideoModalOpen(true);
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

        {/* Section 2: What Ballance* Does (Hand-drawn sketch cards) */}
        <WhatBallanceDoes t={t.whatDoes} />

        {/* Section 3: Who Ballance Is Built For (Interactive 4-tab switcher) */}
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

        {/* Section 7: Get Started With Ballance* (Brushed metallic banner & email form) */}
        <GetStarted
          onSuccessDemo={(email) => handleOpenDemo(email)}
          t={t.getStarted}
        />
      </main>

      {/* Footer with Apples on Grass background photo */}
      <Footer onNavigate={handleNavigation} t={t.footer} />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialEmail={demoInitialEmail}
        t={t.modals.demo}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <StoryModal
        title={selectedStoryTitle}
        onClose={() => setSelectedStoryTitle(null)}
        onOpenDemo={() => handleOpenDemo()}
      />
    </div>
  );
}
