import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Send, MessageSquareText, CheckCircle2, DollarSign, Users } from 'lucide-react';
import { BRAND_INFO, formatPriceCOP, formatShortCOP } from '../data/brandData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const InteractiveQuoter: React.FC = () => {
  const [occasion, setOccasion] = useState('Cena Navideña / Fin de Año');
  type MenuTierKey =
    | 'cerdo_criollo'
    | 'clasica'
    | 'mar_y_tierra'
    | 'cangrejada_gala'
    | 'tradicion_paila'
    | 'desayuno_brunch';

  const [guests, setGuests] = useState(2);
  const [tier, setTier] = useState<MenuTierKey>('cerdo_criollo');
  const [includesDrinks, setIncludesDrinks] = useState(true);
  const [includesExtraPatacones, setIncludesExtraPatacones] = useState(false);
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('13:30');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zone, setZone] = useState('Barranquilla Norte (Alto Prado / Riomar)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const tierPrices: Record<
    MenuTierKey,
    {
      name: string;
      badge: string;
      pricePerGuest: number;
      description: string;
    }
  > = {
    cerdo_criollo: {
      name: 'Cena Festiva de Pernil y Lomo Horneado',
      badge: 'Favorito de Fiestas',
      pricePerGuest: 48000,
      description: 'Pernil o lomo al horno a fuego lento con cuero crocante + Arroz de maíz o dulce + Ensalada navideña y salsa de ciruelas.',
    },
    clasica: {
      name: 'Experiencia Marina Costera Tradicional',
      badge: 'Clásico Marino',
      pricePerGuest: 45000,
      description: 'Ceviches frescos o Encebollado tradicional de albacora + Encocado esmeraldeño o Arroz Marinero + Patacones.',
    },
    mar_y_tierra: {
      name: 'Banquete Fusión Mar y Selva (Dúo Gourmet)',
      badge: 'Fusión Especial',
      pricePerGuest: 56000,
      description: 'Medallones de lomo braseado y camarones jumbo al ajillo + Puré gratinado al horno, arroz con coco y ensalada festiva.',
    },
    cangrejada_gala: {
      name: 'Festín VIP de Cangrejos Criollos o Langosta',
      badge: 'Experiencia VIP',
      pricePerGuest: 75000,
      description: 'Cangrejada criolla al caldo de cerveza o Langosta al carbón + Cazuela marinera en paila de barro + Sangría artesanal.',
    },
    tradicion_paila: {
      name: 'Festín Criollo de Fritada de Paila y Secos',
      badge: 'Tradición y Paila',
      pricePerGuest: 38000,
      description: 'Fritada tradicional de costilla y pulpa en paila de bronce o Seco de carne braseada + Llapingachos de papa, mote y agrio.',
    },
    desayuno_brunch: {
      name: 'Brunch y Desayuno Criollo Manabita',
      badge: 'Desayuno de Gala',
      pricePerGuest: 32000,
      description: 'Bolón mixto de queso y chicharrón o Tigrillo zarumeño + Huevo tierno, lomo mechado, chifles crocantes y café negro de olla.',
    },
  };

  const selectedTier = tierPrices[tier];
  const baseCost = guests * selectedTier.pricePerGuest;
  const drinkCost = includesDrinks ? guests * 8000 : 0;
  const pataconesCost = includesExtraPatacones ? 25000 : 0;
  const totalCost = baseCost + drinkCost + pataconesCost;

  const occasionsList = [
    'Cena Individual (1 persona)',
    'Cena en Pareja / Dúo (2 personas)',
    'Cena Navideña / Fin de Año',
    'Cumpleaños o Aniversario',
    'Reunión Familiar de Fin de Semana',
    'Banquete de Pernil o Lomo por Libra',
    'Cangrejada o Asado Marino',
    'Evento de Empresa',
  ];

  const zonesList = [
    'Barranquilla Norte (Alto Prado / Riomar / Villa Santos)',
    'Buenavista / Villa Country / El Golf',
    'El Prado / Bellavista / Boston',
    'Centro Histórico / Ciudadela 20 de Julio',
    'Puerto Colombia / Villa Campestre',
    'Soledad / Área Metropolitana',
    'Retiro en Cocina Oculta (Barranquilla)',
  ];

  const generateWhatsAppUrl = () => {
    const text = `¡Hola Fusión del Mar! 🌊🦀 Me gustaría solicitar la cotización para mi celebración:
- *Ocasión:* ${occasion}
- *Número de Comensales:* ${guests} ${guests === 1 ? 'persona (Individual)' : guests === 2 ? 'personas (Dúo / Pareja)' : 'personas'}
- *Menú Seleccionado:* ${selectedTier.name} (${formatShortCOP(selectedTier.pricePerGuest)}/persona)
- *Bebidas Artesanales:* ${includesDrinks ? `Sí (+${formatShortCOP(8000)}/persona)` : 'No'}
- *Extra Patacones y Salsas:* ${includesExtraPatacones ? `Sí (+${formatShortCOP(25000)})` : 'No'}
- *Fecha Tentativa:* ${eventDate || 'Por coordinar'} a las ${eventTime}
- *Zona de Entrega:* ${zone}
- *Estimado Total:* ~${formatPriceCOP(totalCost)}
- *Nombre:* ${name || 'Cliente interesado'}
- *Notas:* ${notes || 'Sin requerimientos especiales'}

¿Podrían confirmarme disponibilidad y detalles para coordinar? Muchas gracias.`;

    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="cotizador" className="py-24 bg-[#050B11] border-t border-[#0B1F33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C9973D] font-semibold">
            <span>Cotizador en Tiempo Real</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Planifica tu Evento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EBDD] font-sans">
            Arma el menú de tu celebración
          </h2>
          <p className="font-serif italic text-lg text-[#D6B56A]">
            “Pide con anticipación y celebra sin preocuparte.”
          </p>
          <p className="text-sm text-[#F5EBDD]/75 font-light">
            Calcula las cantidades justas de comida y el presupuesto estimado en segundos. Despachamos la comida lista para servir en tu mesa en empaques térmicos sellados (solo comida a domicilio, no incluye meseros ni servicio en sitio).
          </p>
        </div>

        {/* Interactive Grid: Builder Left, Live Summary Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-[#000000] rounded-3xl p-6 sm:p-8 border border-[#C9973D]/30 shadow-xl space-y-8 text-left">
            
            {/* 1. Occasion */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-[#C9973D] font-semibold block">
                1. ¿Qué motivo vas a celebrar?
              </label>
              <div className="flex flex-wrap gap-2">
                {occasionsList.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D] ${
                      occasion === occ
                        ? 'bg-[#C9973D] text-black font-semibold shadow-md shadow-[#C9973D]/30'
                        : 'bg-[#0B1F33] text-[#F5EBDD]/80 hover:text-[#F5EBDD] border border-white/5'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Number of Guests */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs uppercase tracking-wider text-[#C9973D] font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>2. Número de Comensales</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="200"
                    value={guests}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 1;
                      setGuests(Math.max(1, Math.min(200, val)));
                    }}
                    className="w-20 px-2.5 py-1 bg-[#0B1F33] border border-[#C9973D]/50 rounded-lg text-right font-mono font-bold text-sm text-[#D6B56A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
                  />
                  <span className="text-xs font-semibold text-[#F5EBDD]/70 font-sans">
                    {guests === 1 ? 'persona' : 'personas'}
                  </span>
                </div>
              </div>

              {/* Quick Select Buttons */}
              <div className="flex items-center gap-1.5 pb-1 flex-wrap">
                <span className="text-[11px] text-[#F5EBDD]/50 mr-1">Rápido:</span>
                {[1, 2, 4, 10, 20, 50, 100, 200].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setGuests(qty)}
                    className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                      guests === qty
                        ? 'bg-[#C9973D] text-black font-bold border-[#C9973D] shadow-sm shadow-[#C9973D]/30'
                        : 'bg-[#0B1F33] text-[#F5EBDD]/80 border-white/10 hover:border-[#C9973D]/40'
                    }`}
                  >
                    {qty === 1 ? '1p' : qty === 2 ? '2p' : `${qty}p`}
                  </button>
                ))}
              </div>

              <input
                type="range"
                min="1"
                max="200"
                step="1"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-2.5 bg-[#0B1F33] rounded-lg appearance-none cursor-pointer accent-[#C9973D]"
              />
              <div className="flex justify-between text-[11px] text-[#F5EBDD]/50 font-mono">
                <span>1 (Individual)</span>
                <span>20 (Reunión)</span>
                <span>50 (Fiesta)</span>
                <span>100 (Evento)</span>
                <span>200 (Gran Banquete)</span>
              </div>

              {guests >= 30 && (
                <div className="p-3 rounded-xl bg-[#0B1F33]/60 border border-[#C9973D]/30 flex items-center gap-2.5 text-xs text-[#D6B56A]">
                  <Sparkles className="w-4 h-4 shrink-0 text-[#C9973D]" />
                  <span>
                    Gran evento ({guests} personas): Incluye empaques térmicos sellados de alta capacidad y asesoría especializada para celebraciones corporativas o familiares masivas.
                  </span>
                </div>
              )}
            </div>

            {/* 3. Menu Tier Selection */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-[#C9973D] font-semibold block">
                3. Elige el estilo del Menú
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {(Object.keys(tierPrices) as MenuTierKey[]).map((key) => {
                  const t = tierPrices[key];
                  const isSelected = tier === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTier(key)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D] flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#0B1F33] border-[#C9973D] shadow-lg shadow-[#C9973D]/20 ring-1 ring-[#C9973D]'
                          : 'bg-black/60 border-white/10 hover:border-white/30 text-[#F5EBDD]/70 hover:bg-black/80'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-2">
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C9973D]/15 text-[#D6B56A] border border-[#C9973D]/30">
                            {t.badge}
                          </span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#C9973D] animate-pulse" />
                          )}
                        </div>
                        <span className="text-xs font-bold text-[#F5EBDD] block font-sans leading-snug">
                          {t.name}
                        </span>
                        <p className="text-[11px] text-[#F5EBDD]/65 mt-1.5 leading-relaxed">
                          {t.description}
                        </p>
                      </div>
                      <div className="mt-4 pt-2.5 border-t border-white/10 flex items-baseline justify-between">
                        <span className="text-[10px] text-[#C9973D] uppercase font-mono tracking-wide">Por persona</span>
                        <span className="text-sm font-bold font-mono text-[#D6B56A] tabular-nums whitespace-nowrap">
                          {formatShortCOP(t.pricePerGuest)}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Complementos */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-[#C9973D] font-semibold block">
                4. Complementos para la mesa
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0B1F33]/40 border border-white/10 cursor-pointer hover:border-[#C9973D]/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={includesDrinks}
                    onChange={(e) => setIncludesDrinks(e.target.checked)}
                    className="w-4 h-4 rounded accent-[#C9973D]"
                  />
                  <div className="text-left">
                    <span className="text-xs font-medium text-[#F5EBDD] block">
                      Bebidas Naturales o Sangría (+{formatShortCOP(8000)}/p)
                    </span>
                    <span className="text-[10px] text-[#F5EBDD]/60">
                      Jugo de maracuyá de 1L o sangría costera macerada
                    </span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0B1F33]/40 border border-white/10 cursor-pointer hover:border-[#C9973D]/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={includesExtraPatacones}
                    onChange={(e) => setIncludesExtraPatacones(e.target.checked)}
                    className="w-4 h-4 rounded accent-[#C9973D]"
                  />
                  <div className="text-left">
                    <span className="text-xs font-medium text-[#F5EBDD] block">
                      Extra Patacones y Salsas (+{formatShortCOP(25000)})
                    </span>
                    <span className="text-[10px] text-[#F5EBDD]/60">
                      Canasta grande de chifles y patacones con salsas caseras
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* 5. Date & Zone */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-[#C9973D] font-semibold block">
                5. Coordinación de Fecha y Lugar
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] text-[#F5EBDD]/70 block mb-1">Fecha del Evento</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-[#0B1F33] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#F5EBDD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-[#F5EBDD]/70 block mb-1">Hora Deseada</label>
                  <input
                    type="time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    className="w-full bg-[#0B1F33] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#F5EBDD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#F5EBDD]/70 block mb-1">Sector de Entrega</label>
                  <select
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full bg-[#0B1F33] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#F5EBDD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
                  >
                    {zonesList.map((z) => (
                      <option key={z} value={z} className="bg-black text-white">
                        {z}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Quotation Summary Card (Sticky) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6 text-left">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#000000] border-2 border-[#C9973D]/60 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#C9973D] font-bold block">
                    Resumen Estimado
                  </span>
                  <h3 className="text-xl font-bold text-[#F5EBDD]">
                    {occasion} ({guests} {guests === 1 ? 'persona' : 'personas'})
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#C9973D]/50 overflow-hidden bg-black shrink-0">
                  <img src={BRAND_INFO.logoUrl} alt="Logo Sello" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Itemized Calculation */}
              <div className="space-y-3 text-xs sm:text-sm">
                 <div className="flex justify-between text-[#F5EBDD]/80">
                   <span>{selectedTier.name} ({guests}x)</span>
                   <span className="font-mono tabular-nums text-[#F5EBDD] font-semibold">{formatShortCOP(baseCost)}</span>
                 </div>

                 {includesDrinks && (
                   <div className="flex justify-between text-[#F5EBDD]/80">
                     <span>Bebidas / Maridaje artesanal ({guests}x)</span>
                     <span className="font-mono tabular-nums text-[#F5EBDD] font-semibold">{formatShortCOP(drinkCost)}</span>
                   </div>
                 )}

                 {includesExtraPatacones && (
                   <div className="flex justify-between text-[#F5EBDD]/80">
                     <span>Canasta extra de Patacones y Salsas</span>
                     <span className="font-mono tabular-nums text-[#F5EBDD] font-semibold">{formatShortCOP(pataconesCost)}</span>
                   </div>
                 )}

                 <div className="flex justify-between text-[#0F6B7A] pt-2 border-t border-white/5 text-xs">
                   <span>Empaque térmico de gala con sello</span>
                   <span>Incluido</span>
                 </div>
               </div>

               {/* Grand Total */}
               <div className="pt-4 border-t border-[#C9973D]/30 flex items-end justify-between">
                 <div>
                   <span className="text-xs uppercase tracking-wider text-[#F5EBDD]/70 block">
                     Total Estimado
                   </span>
                   <span className="text-[11px] text-[#C9973D]">
                     ~{formatShortCOP(Math.round(totalCost / guests))} / persona
                   </span>
                 </div>
                 <div className="text-right">
                   <span className="text-2xl sm:text-3xl font-bold font-mono text-[#D6B56A] tabular-nums">
                     {formatShortCOP(totalCost)}
                   </span>
                 </div>
               </div>

              {/* Instant WhatsApp Action Button (Primary conversion!) */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-black bg-[#C9973D] hover:bg-[#D6B56A] active:scale-[0.98] rounded-xl shadow-lg shadow-[#C9973D]/25 transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Enviar Cotización por WhatsApp</span>
                </a>

                <p className="text-[11px] text-center text-[#F5EBDD]/60 leading-tight">
                  Te responderemos al instante con la confirmación de agenda y sugerencias personalizadas para tu fecha.
                </p>
              </div>

              {/* Alternative Quick Contact Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="pt-4 border-t border-white/10 space-y-3">
                  <span className="text-xs font-semibold text-[#F5EBDD] block">
                    O solicita que te contactemos nosotros:
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0B1F33] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#F5EBDD] placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9973D]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Número de WhatsApp o Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0B1F33] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#F5EBDD] placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9973D]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 px-3 text-xs font-medium text-[#F5EBDD] bg-[#0B1F33] hover:bg-[#0F6B7A] border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C9973D]" />
                    <span>Guardar y Solicitar Llamada</span>
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-[#0F6B7A]/20 border border-[#0F6B7A] text-left space-y-1 text-xs text-[#F5EBDD]">
                  <div className="flex items-center gap-1.5 font-bold text-[#D6B56A]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F6B7A]" />
                    <span>¡Solicitud recibida con éxito!</span>
                  </div>
                  <p className="text-[11px] text-[#F5EBDD]/80">
                    Nos pondremos en contacto contigo al teléfono {phone} para afinar los detalles de tu menú.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
