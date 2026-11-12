import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_PORTFOLIO } from '../data/brandData';

interface ServicesPortfolioProps {
  onSelectServiceForQuote: (serviceNumber: string) => void;
  onExploreMenu: () => void;
}

export const ServicesPortfolio: React.FC<ServicesPortfolioProps> = ({
  onSelectServiceForQuote,
  onExploreMenu,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="servicios" className="py-24 bg-[#050B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3 text-left">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9973D] font-semibold">
              <span>Portafolio de Servicios</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>Propuesta Gastronómica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EBDD] font-sans">
              Tres experiencias unificadas, un solo estándar de calidad
            </h2>
          </div>
          <p className="text-sm text-[#F5EBDD]/70 max-w-sm text-left md:text-right">
            Los servicios se presentan como un sistema integral para resolver desde un almuerzo diario hasta los banquetes completos de comida para tus reuniones (solo comida lista para servir en mesa).
          </p>
        </div>

        {/* Interactive Service Navigation Bar */}
        <div className="flex items-center gap-2 p-1.5 bg-[#0B1F33] rounded-2xl border border-white/10 mb-12 overflow-x-auto no-scrollbar justify-start md:justify-center">
          {SERVICES_PORTFOLIO.map((service, index) => (
            <button
              key={service.number}
              onClick={() => setActiveTab(index)}
              className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D] ${
                activeTab === index
                  ? 'bg-[#000000] text-[#F5EBDD] border border-[#C9973D]/50 shadow-md shadow-black/40'
                  : 'text-[#F5EBDD]/60 hover:text-[#F5EBDD] hover:bg-black/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#C9973D]">
                  {service.title}
                </span>
                {activeTab === index && (
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#0F6B7A]">
                    Seleccionado
                  </span>
                )}
              </div>
              <p className="text-xs text-[#F5EBDD]/70 font-sans mt-0.5 truncate">
                {service.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Featured Service Detail Display */}
        {(() => {
          const service = SERVICES_PORTFOLIO[activeTab];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#000000] border border-[#C9973D]/30 p-6 sm:p-10 shadow-2xl shadow-black/80">
              
              {/* Left Column: Editorial Information */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#C9973D] uppercase">
                    Propuesta Gastronómica
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold text-[#F5EBDD] font-sans">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium uppercase tracking-wider text-[#0F6B7A]">
                    {service.subtitle}
                  </p>
                </div>

                {/* Slogan Quote from Brandboard */}
                <div className="p-4 rounded-xl bg-[#0B1F33]/50 border-l-2 border-[#C9973D]">
                  <p className="font-serif italic text-lg sm:text-xl text-[#D6B56A]">
                    “{service.quote}”
                  </p>
                </div>

                <p className="text-base text-[#F5EBDD]/80 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Bullet details */}
                <div className="space-y-2.5 pt-2">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-sm text-[#F5EBDD]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#C9973D] mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onSelectServiceForQuote(service.number)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-[#C9973D] hover:bg-[#D6B56A] active:scale-[0.98] rounded-xl transition-all shadow-md shadow-[#C9973D]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>Cotizar este Servicio</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onExploreMenu}
                    className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium text-[#F5EBDD] hover:text-[#C9973D] bg-[#0B1F33] hover:bg-[#0B1F33]/80 border border-white/10 rounded-xl transition-colors"
                  >
                    <span>Ver Platos de este Servicio</span>
                  </button>
                </div>
              </div>

              {/* Right Column: High Quality Photographic Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-[#C9973D]/30 shadow-xl aspect-[4/3] bg-[#0B1F33]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[11px] uppercase tracking-wider text-[#D6B56A] font-medium block">
                      Fotografía Real de Fusión del Mar
                    </span>
                    <span className="text-sm font-semibold text-[#F5EBDD]">
                      {service.subtitle}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
};
