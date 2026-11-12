import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { FacebookIcon } from './icons/FacebookIcon';

interface HeaderProps {
  orderCount: number;
  onOpenOrderDrawer: () => void;
  onOpenQuoter: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  orderCount,
  onOpenOrderDrawer,
  onOpenQuoter,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Carta Digital', href: '#carta' },
    { label: 'Cocina Oculta', href: '#diferencial' },
    { label: 'Cotizador', href: '#cotizador' },
    { label: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#C9973D]/25 shadow-lg shadow-black/60 py-2.5'
          : 'bg-[#000000]/85 backdrop-blur-sm border-b border-[#0B1F33] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          {/* Zone 1: Brand Wordmark & Seal */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D] rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#C9973D]/60 p-0.5 bg-black shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-sm shadow-[#C9973D]/20">
              <img
                src={BRAND_INFO.logoUrl}
                alt="Fusión del Mar Logotipo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-bold tracking-wider text-[#F5EBDD] font-sans group-hover:text-[#D6B56A] transition-colors whitespace-nowrap">
                FUSIÓN DEL MAR
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#C9973D] font-sans font-medium whitespace-nowrap flex items-center gap-1">
                <span>Cocina Oculta</span>
                <span className="text-white/40">·</span>
                <span className="text-[#D6B56A]">Barranquilla</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#F5EBDD]/85">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#C9973D] transition-colors whitespace-nowrap relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D] rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Social Networks & Actions CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Social Icons (Desktop & Tablet) */}
            <div className="hidden md:flex items-center gap-1.5 border-r border-white/10 pr-3">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Directo (+57 300 912 3456)"
                aria-label="Abrir WhatsApp"
                className="p-2 rounded-lg text-[#25D366] hover:bg-[#0B1F33] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @fusiondelmarbaq1"
                aria-label="Abrir Instagram"
                className="p-2 rounded-lg hover:bg-[#0B1F33] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Fusión del Mar"
                aria-label="Abrir Facebook"
                className="p-2 rounded-lg text-[#1877F2] hover:bg-[#0B1F33] transition-colors"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
              </a>
            </div>

            {/* Order Bag Button */}
            <button
              onClick={onOpenOrderDrawer}
              aria-label="Ver pedido actual"
              className="relative p-2.5 rounded-lg text-[#F5EBDD] bg-[#0B1F33] hover:bg-[#0F6B7A]/40 border border-[#C9973D]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
            >
              <ShoppingBag className="w-5 h-5 text-[#D6B56A]" />
              {orderCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#C9973D] text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-sm animate-pulse">
                  {orderCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenQuoter}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-black bg-[#C9973D] hover:bg-[#D6B56A] active:scale-[0.98] rounded-lg shadow-sm shadow-[#C9973D]/30 transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cotizar Menú</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú de navegación"
              className="xl:hidden p-2 text-[#F5EBDD] hover:text-[#C9973D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#000000] border-b border-[#C9973D]/30 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200 text-left">
          <div className="pb-3 border-b border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C9973D] font-bold block">
                Fusión del Mar
              </span>
              <span className="text-xs text-[#F5EBDD]/60">
                Barranquilla, Atlántico · Pedidos a domicilio
              </span>
            </div>
          </div>

          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#F5EBDD] hover:text-[#C9973D] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Social Buttons */}
          <div className="pt-2">
            <span className="text-[11px] uppercase tracking-wider text-[#C9973D] font-semibold block mb-2">
              Redes Sociales
            </span>
            <div className="flex items-center gap-3">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0B1F33] border border-white/10 flex items-center justify-center text-[#25D366] hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0B1F33] border border-white/10 flex items-center justify-center hover:border-[#E4405F] transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0B1F33] border border-white/10 flex items-center justify-center text-[#1877F2] hover:border-[#1877F2] transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
              </a>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoter();
              }}
              className="w-full text-center py-3 text-sm font-semibold text-black bg-[#C9973D] hover:bg-[#D6B56A] rounded-lg cursor-pointer"
            >
              Cotizar Menú de Celebración
            </button>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-medium text-[#F5EBDD] bg-[#0B1F33] border border-[#0F6B7A] rounded-lg"
            >
              Escribir al WhatsApp ({BRAND_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
