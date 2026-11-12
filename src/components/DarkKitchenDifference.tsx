import React from 'react';
import { Package, Clock, Sparkles, ChefHat, HeartHandshake } from 'lucide-react';
import { PACKAGING_BENEFITS, BRAND_INFO } from '../data/brandData';

export const DarkKitchenDifference: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pedido Anticipado',
      desc: 'Planificamos tu menú con 24h a 48h de anticipación. Esto elimina el desperdicio y nos permite adquirir la pesca más fresca del día en la lonja.',
      icon: <Clock className="w-5 h-5 text-[#C9973D]" />,
    },
    {
      num: '02',
      title: 'Menú Personalizado',
      desc: 'Adaptamos porciones, entradas, carnes y mariscos según el tipo de celebración y cantidad exacta de invitados.',
      icon: <Sparkles className="w-5 h-5 text-[#D6B56A]" />,
    },
    {
      num: '03',
      title: 'Preparación Fresca',
      desc: 'No recalentamos. Cada plato se cocina minutos antes de la hora programada de despacho para llegar con vapor y punto perfecto.',
      icon: <ChefHat className="w-5 h-5 text-[#0F6B7A]" />,
    },
    {
      num: '04',
      title: 'Entrega Puntual y Empaque de Gala',
      desc: 'Llega en cajas térmicas negras con sello dorado y tarjeta de agradecimiento, listo para lucir en tu mesa de fiesta.',
      icon: <Package className="w-5 h-5 text-[#C9973D]" />,
    },
  ];

  return (
    <section id="diferencial" className="py-24 bg-gradient-to-b from-[#000000] via-[#050B11] to-[#0B1F33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C9973D] font-semibold">
            <span>El Modelo Gastronómico</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Innovación y Tradición</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EBDD] font-sans">
            Cocina oculta, calidad a la vista
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#D6B56A]">
            “Cada celebración tiene su propio menú.”
          </p>
          <p className="text-sm sm:text-base text-[#F5EBDD]/75 font-light max-w-2xl mx-auto">
            Nos dedicamos exclusivamente a cocinar y entregarte la comida lista para servir en tu mesa. Sin meseros ni sobrecostos de montaje: el 100% de tu presupuesto se traduce en pesca fresca de calidad suprema, porciones generosas y puntualidad en tu puerta.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((st) => (
            <div
              key={st.num}
              className="rounded-2xl p-6 bg-[#000000]/70 border border-white/10 hover:border-[#C9973D]/50 transition-all duration-300 text-left flex flex-col justify-between group hover:-translate-y-1 shadow-md shadow-black/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1F33] border border-[#C9973D]/30 flex items-center justify-center">
                    {st.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#C9973D]">
                    {st.num}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#F5EBDD] group-hover:text-[#D6B56A] transition-colors font-sans mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F5EBDD]/70 font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Packaging Experience Spotlight (Brandboard Page 8) */}
        <div className="rounded-3xl p-8 sm:p-12 bg-[#000000] border border-[#C9973D]/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C9973D]">
                  EXPERIENCIA DE ENTREGA
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F5EBDD] font-sans">
                  La elegancia vive en el empaque
                </h3>
                <p className="text-sm text-[#F5EBDD]/80 font-light leading-relaxed">
                  Como cocina oculta, nuestro restaurante es tu propio hogar. Por eso, cada detalle de presentación está calibrado para crear el efecto de una mesa festiva de alto nivel desde el primer instante en que abres la caja.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {PACKAGING_BENEFITS.map((b, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#0B1F33]/50 border border-white/5 space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#D6B56A]">
                      {b.title}
                    </h4>
                    <p className="text-xs text-[#F5EBDD]/70 font-light leading-snug">
                      {b.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3 text-xs text-[#F5EBDD]/70">
                <HeartHandshake className="w-4 h-4 text-[#0F6B7A] shrink-0" />
                <span>Cuidamos cada comensal como nuestro invitado de honor en casa.</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#C9973D]/40 shadow-xl aspect-[4/3] bg-[#071524]">
                <img
                  src="/images/cena_completa_compartir_1793893279534.jpg"
                  alt="Empaque de lujo con cajas negras y sello dorado Fusión del Mar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md rounded-xl border border-[#C9973D]/30 text-left flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#D6B56A] block">
                      Cajas Negras con Sello Dorado y Aislamiento
                    </span>
                    <span className="text-[11px] text-[#F5EBDD]/70">
                      Vapor, brillo y temperatura garantizada
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#C9973D] overflow-hidden bg-black shrink-0">
                    <img src={BRAND_INFO.logoUrl} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
