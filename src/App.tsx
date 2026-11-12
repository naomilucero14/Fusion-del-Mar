/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MenuItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandConcept } from './components/BrandConcept';
import { ServicesPortfolio } from './components/ServicesPortfolio';
import { DigitalMenu } from './components/DigitalMenu';
import { DarkKitchenDifference } from './components/DarkKitchenDifference';
import { InteractiveQuoter } from './components/InteractiveQuoter';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { OrderSummaryDrawer } from './components/OrderSummaryDrawer';
import { WhatsAppIcon } from './components/icons/WhatsAppIcon';
import { BRAND_INFO } from './data/brandData';

export default function App() {
  const [orderItems, setOrderItems] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  const handleAddItem = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    setOrderItems((prev) => {
      if (newQty <= 0) {
        return prev.filter((entry) => entry.item.id !== itemId);
      }
      return prev.map((entry) =>
        entry.item.id === itemId ? { ...entry, quantity: newQty } : entry
      );
    });
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addedItemIdsMap = orderItems.reduce((acc, entry) => {
    acc[entry.item.id] = entry.quantity;
    return acc;
  }, {} as Record<string, number>);

  const totalItemCount = orderItems.reduce((acc, entry) => acc + entry.quantity, 0);

  return (
    <div className="min-h-screen bg-[#000000] text-[#F5EBDD] flex flex-col font-sans selection:bg-[#C9973D] selection:text-black">
      {/* Sticky Navigation Header */}
      <Header
        orderCount={totalItemCount}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        onOpenQuoter={() => scrollToSection('cotizador')}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          onOpenQuoter={() => scrollToSection('cotizador')}
          onExploreMenu={() => scrollToSection('carta')}
        />

        <BrandConcept />

        <ServicesPortfolio
          onSelectServiceForQuote={(serviceNumber) => {
            scrollToSection('cotizador');
          }}
          onExploreMenu={() => scrollToSection('carta')}
        />

        <DigitalMenu
          onAddItem={handleAddItem}
          addedItemIds={addedItemIdsMap}
        />

        <DarkKitchenDifference />

        <InteractiveQuoter />

        <Testimonials />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Fusión del Mar"
        title="Escríbenos a WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-black/60 hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </a>

      {/* Slide-over Order / Cart Drawer */}
      <OrderSummaryDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearOrder={handleClearOrder}
        onOpenQuoter={() => {
          setIsOrderDrawerOpen(false);
          scrollToSection('cotizador');
        }}
      />
    </div>
  );
}
