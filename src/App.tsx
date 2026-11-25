/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { ClinicFacilities } from './components/ClinicFacilities';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LocationAndReviews } from './components/LocationAndReviews';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Navbar } from './components/Navbar';
import { SpecialtiesDirectory } from './components/SpecialtiesDirectory';

export default function App() {
  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    let ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute('content', canonicalUrl);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-zinc-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ClinicFacilities />
        <SpecialtiesDirectory />
        <LocationAndReviews />
        <ContactSection />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
