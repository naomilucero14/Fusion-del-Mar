import React from 'react';
import { ArrowRight, ShieldCheck, Flame, Clock, Award } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

interface HeroProps {
  onOpenQuoter: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoter, onExploreMenu }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#000000] via-[#050B11] to-[#0B1F33]">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#C9973D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#0F6B7A]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Conversion Driver */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Unboxed Kicker metadata (anti-pill discipline) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9973D] font-semibold flex-wrap">
              <span>Cocina Oculta en Barranquilla</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>Mariscos, Cerdo Horneado y Tradición</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>Since 2017</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5EBDD] font-sans leading-[1.1] text-balance">
                Del mar a tu{' '}
                <span className="font-serif italic text-[#D6B56A] font-normal block sm:inline">
                  celebración.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#F5EBDD]/90 font-sans font-light leading-relaxed max-w-2xl pt-2">
                Auténtica sazón ecuatoriana y del mar en Barranquilla. Celebra tú, nosotros cocinamos.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoter}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-black bg-[#C9973D] hover:bg-[#D6B56A] rounded-xl shadow-lg shadow-[#C9973D]/20 active:scale-[0.98] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Cotizar Menú de Celebración</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-[#F5EBDD] bg-[#0B1F33] hover:bg-[#0F6B7A]/30 border border-[#C9973D]/30 hover:border-[#C9973D] rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
              >
                Ver Carta Digital
              </button>
            </div>

            {/* Value Proof Bar (Adjacency to Hero Claim) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#F5EBDD]/80">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#C9973D] shrink-0" />
                <span>Preparación fresca al momento</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0F6B7A] shrink-0" />
                <span>Pesca del día sin conservantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D6B56A] shrink-0" />
                <span>Puntualidad en tu evento</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C9973D] shrink-0" />
                <span>Empaque térmico de lujo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Centerpiece */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Hairline Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C9973D]/40 bg-[#0B1F33]/80 shadow-2xl shadow-black/80 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <img
                  src="/images/hero_seafood_banquet_1793893276945.jpg"
                  alt="Banquete de mariscos ecuatorianos para celebración Fusión del Mar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-[#C9973D]/30 flex items-center justify-between gap-3 text-left">
                  <div>
                    <span className="font-serif italic text-[#D6B56A] text-sm sm:text-base block">
                      “Hoy el mar llegó a tu mesa.”
                    </span>
                    <span className="text-[11px] text-[#F5EBDD]/75 tracking-wider uppercase">
                      Banquete marinero · Encocados · Ceviches
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#C9973D] overflow-hidden shrink-0 bg-black">
                    <img
                      src={BRAND_INFO.logoUrl}
                      alt="Logo cangrejo dorado"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Corner Gold Accent Accent */}
              <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#C9973D]/50 pointer-events-none rounded-tr-lg" />
              <div className="hidden sm:block absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#C9973D]/50 pointer-events-none rounded-bl-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
