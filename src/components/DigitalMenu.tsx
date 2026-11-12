import React, { useState, useRef, useEffect } from 'react';
import { Plus, Check, Users, Utensils, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, formatPriceCOP } from '../data/brandData';

interface DigitalMenuProps {
  onAddItem: (item: MenuItem) => void;
  addedItemIds: Record<string, number>;
}

export const DigitalMenu: React.FC<DigitalMenuProps> = ({ onAddItem, addedItemIds }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const categories = [
    { id: 'all', label: 'Todos los Platos' },
    { id: 'entradas', label: 'Entradas' },
    { id: 'desayunos', label: 'Desayunos' },
    { id: 'sopas', label: 'Sopas' },
    { id: 'ceviches', label: 'Ceviches' },
    { id: 'sangos', label: 'Sangos' },
    { id: 'mariscos', label: 'Mariscos' },
    { id: 'carnes', label: 'Carnes' },
    { id: 'cenas_completas', label: 'Cenas Completas' },
    { id: 'acompanamientos', label: 'Acompañamientos' },
    { id: 'bebidas', label: 'Bebidas' },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
    }
    window.addEventListener('resize', checkScroll);
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSelectTab = (catId: string, e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(catId);
    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="carta" className="py-24 bg-[#000000] border-t border-[#0B1F33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C9973D] font-semibold">
            <span>Carta Digital y Menú</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Precios en pesos colombianos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5EBDD] font-sans">
            Especialidades preparadas al pedido
          </h2>
          <p className="text-base text-[#F5EBDD]/75 font-light">
            Selecciona tus platos o banquetes para añadirlos a tu cotización o encargo directo. Cada plato se cocina con mariscos frescos seleccionados el mismo día.
          </p>
        </div>

        {/* Filter Categories Segmented Control (Zero-clipping Capsule Bar with Scroll Chevrons) */}
        <div className="relative max-w-4xl mx-auto mb-14 px-1 sm:px-4">
          <div className="relative flex items-center justify-center">
            
            {/* Left Scroll Arrow */}
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => handleScroll('left')}
                aria-label="Desplazar categorías hacia la izquierda"
                className="absolute -left-2 sm:-left-4 z-20 p-2 rounded-full bg-[#0B1F33] border border-[#C9973D] text-[#D6B56A] shadow-lg shadow-black/80 hover:bg-[#C9973D] hover:text-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}

            {/* Scrollable Single-row Capsule Bar */}
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-2 p-1.5 bg-[#0B1F33]/90 rounded-2xl border border-white/10 overflow-x-auto no-scrollbar scroll-smooth w-full sm:w-fit max-w-full justify-start mx-auto"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={(e) => handleSelectTab(cat.id, e)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D] ${
                    selectedCategory === cat.id
                      ? 'bg-[#C9973D] text-black font-semibold shadow-md shadow-[#C9973D]/30'
                      : 'text-[#F5EBDD]/75 hover:text-[#F5EBDD] hover:bg-black/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Right Scroll Arrow */}
            {canScrollRight && (
              <button
                type="button"
                onClick={() => handleScroll('right')}
                aria-label="Desplazar categorías hacia la derecha"
                className="absolute -right-2 sm:-right-4 z-20 p-2 rounded-full bg-[#0B1F33] border border-[#C9973D] text-[#D6B56A] shadow-lg shadow-black/80 hover:bg-[#C9973D] hover:text-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}

          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const count = addedItemIds[item.id] || 0;

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-[#0B1F33]/30 border border-white/10 hover:border-[#C9973D]/50 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 hover:-translate-y-1 text-left"
              >
                {/* Image & Tag Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#071524]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Highlight pill or badge */}
                  {item.highlight && (
                    <div className="absolute top-3 left-3 bg-[#C9973D] text-black text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wide flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.highlight}</span>
                    </div>
                  )}

                  {/* Serves Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-[#F5EBDD] bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                    <Users className="w-3.5 h-3.5 text-[#D6B56A]" />
                    <span className="truncate">{item.serves}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-[#F5EBDD] group-hover:text-[#D6B56A] transition-colors font-sans">
                        {item.name}
                      </h3>
                      <span className="text-base sm:text-lg font-bold font-mono text-[#D6B56A] tabular-nums shrink-0 whitespace-nowrap">
                        {formatPriceCOP(item.price)}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#F5EBDD]/70 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Clean unboxed tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-[#0F6B7A]">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-medium text-[#D6B56A]/80">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Add to order action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <span className="text-xs text-[#F5EBDD]/60 flex items-center gap-1">
                      <Utensils className="w-3.5 h-3.5 text-[#C9973D]" />
                      <span>Empaque térmico</span>
                    </span>

                    <button
                      onClick={() => onAddItem(item)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D] ${
                        count > 0
                          ? 'bg-[#0F6B7A] text-white hover:bg-[#0a4f5b]'
                          : 'bg-[#C9973D] text-black hover:bg-[#D6B56A]'
                      }`}
                    >
                      {count > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Agregado ({count})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Agregar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
