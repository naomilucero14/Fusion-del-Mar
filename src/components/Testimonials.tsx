import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/brandData';

export const Testimonials: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Con cuánta anticipación debo hacer mi pedido de celebración?',
      a: 'Para cenas completas individuales (1 persona), en pareja (2 personas) o banquetes familiares y carnes por libra, recomendamos realizar tu reserva con 24 a 48 horas de anticipación. Esto nos permite garantizar la preparación artesanal y hornear el pernil o preparar los mariscos frescos al momento.',
    },
    {
      q: '¿Cómo llega la comida a mi domicilio o lugar de evento?',
      a: 'Despachamos en cajas térmicas selladas de color negro mate con nuestro sello distintivo dorado y cintas de seguridad. Los platos calientes viajan en recipientes con aislamiento térmico que conservan el calor y el vapor hasta el momento de servir en tu mesa.',
    },
    {
      q: '¿Ofrecen servicio de meseros, mantelería o catering presencial?',
      a: 'No, somos un modelo de cocina oculta enfocado 100% en la excelencia de la comida. Cocinamos y entregamos tus banquetes y cenas listos para servir en recipientes elegantes. De esta forma ahorras sobrecostos de personal y disfrutas con total intimidad en tu reunión familiar o evento.',
    },
    {
      q: '¿Tienen opciones para personas con alergias o requerimientos especiales?',
      a: '¡Por supuesto! Como cada menú se prepara bajo pedido personalizado, podemos adaptar platos para personas celíacas (sin gluten), ajustar el nivel de picante o excluir mariscos específicos si algún invitado tiene alergia.',
    },
    {
      q: '¿Cuáles son las formas de pago aceptadas?',
      a: 'Aceptamos transferencias bancarias y transferencias digitales (Bancolombia, Nequi, Daviplata, PSE), tarjetas de crédito/débito a través de enlace digital de pago seguro y transferencias coordinadas con anticipación.',
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-[#000000] border-t border-[#0B1F33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C9973D] font-semibold">
            <span>Experiencias Reales</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Voz de Nuestros Clientes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EBDD] font-sans">
            Lo que dicen quienes ya celebraron con nosotros
          </h2>
          <p className="font-serif italic text-lg text-[#D6B56A]">
            “Tu celebración merece un menú completo.”
          </p>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-7 bg-[#0B1F33]/40 border border-[#C9973D]/25 hover:border-[#C9973D]/60 transition-all duration-300 flex flex-col justify-between text-left group shadow-lg shadow-black/40 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9973D] text-[#C9973D]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C9973D]/30" />
                </div>

                <p className="font-serif italic text-sm sm:text-base text-[#F5EBDD]/90 leading-relaxed">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <h4 className="text-sm font-bold text-[#F5EBDD] font-sans">
                  {t.client}
                </h4>
                <div className="flex items-center gap-2 text-xs text-[#D6B56A] mt-0.5">
                  <span>{t.occasion}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 bg-[#0B1F33]/20 border border-white/10 text-left">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-[#C9973D] font-semibold block">
              Dudas Frecuentes
            </span>
            <h3 className="text-2xl font-bold text-[#F5EBDD] font-sans mt-1">
              Preguntas sobre el servicio de cocina oculta
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-black/50 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left font-medium text-sm sm:text-base text-[#F5EBDD] hover:text-[#D6B56A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#C9973D] shrink-0 ml-3" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/50 shrink-0 ml-3" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#F5EBDD]/75 font-light leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
