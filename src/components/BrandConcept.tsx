import React from 'react';
import { Waves, Sparkles, PartyPopper, Check, Fish, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BRAND_TERRITORIES } from '../data/brandData';

export const BrandConcept: React.FC = () => {
  return (
    <section className="py-20 bg-[#000000] border-t border-[#0B1F33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C9973D] font-semibold">
            <span>Propuesta Gastronómica</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Sabor Ecuatoriano</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5EBDD] font-sans text-balance">
            El arte de la gastronomía marina ecuatoriana
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#D6B56A]">
            “Una cocina oculta con presencia de restaurante: sabor ecuatoriano, mariscos frescos y el cuidado de una mesa de celebración.”
          </p>
        </div>

        {/* 3 Brand Territories Grid (MAR - SAZÓN - CELEBRAR) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BRAND_TERRITORIES.map((territory, idx) => {
            const icons = [
              <Waves key="mar" className="w-6 h-6 text-[#0F6B7A]" />,
              <Sparkles key="sazon" className="w-6 h-6 text-[#C9973D]" />,
              <PartyPopper key="celebrar" className="w-6 h-6 text-[#D6B56A]" />,
            ];

            return (
              <div
                key={territory.pillar}
                className="relative rounded-2xl p-8 bg-[#0B1F33]/40 border border-[#C9973D]/20 hover:border-[#C9973D]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/40 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#C9973D]/30 flex items-center justify-center mb-6">
                    {icons[idx]}
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-semibold tracking-widest text-[#C9973D] uppercase">
                      Territorio {territory.pillar}
                    </span>
                    <h3 className="text-2xl font-bold text-[#F5EBDD] font-sans">
                      {territory.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                    {territory.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#D6B56A] font-medium flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0 text-[#0F6B7A]" />
                  <span>{territory.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client-Facing Value Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-[#0B1F33]/30 border border-white/10 text-left">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-black border border-[#C9973D]/30 flex items-center justify-center shrink-0">
              <Fish className="w-5 h-5 text-[#0F6B7A]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5EBDD]">
                Pesca Seleccionada del Día
              </h4>
              <p className="text-xs text-[#F5EBDD]/70 font-light mt-0.5">
                Ingredientes frescos traídos directamente de costas ecuatorianas sin procesos industriales.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-black border border-[#C9973D]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#C9973D]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5EBDD]">
                Inocuidad y Sello Inviolable
              </h4>
              <p className="text-xs text-[#F5EBDD]/70 font-light mt-0.5">
                Cada pedido viaja en cajas térmicas precintadas con nuestro sello dorado de garantía.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-black border border-[#C9973D]/30 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5 text-[#D6B56A]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#F5EBDD]">
                Atención de Anfitrión
              </h4>
              <p className="text-xs text-[#F5EBDD]/70 font-light mt-0.5">
                Cuidamos cada detalle de porción y puntualidad para que disfrutes junto a tus invitados.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
