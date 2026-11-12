import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { BRAND_INFO, formatPriceCOP, formatShortCOP } from '../data/brandData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface OrderItemEntry {
  item: MenuItem;
  quantity: number;
}

interface OrderSummaryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItemEntry[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onClearOrder: () => void;
  onOpenQuoter: () => void;
}

export const OrderSummaryDrawer: React.FC<OrderSummaryDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onClearOrder,
  onOpenQuoter,
}) => {
  if (!isOpen) return null;

  const subtotal = orderItems.reduce((acc, entry) => acc + entry.item.price * entry.quantity, 0);
  const totalItemsCount = orderItems.reduce((acc, entry) => acc + entry.quantity, 0);

  const generateWhatsAppOrderUrl = () => {
    let orderDetails = orderItems
      .map((entry) => `• ${entry.quantity}x ${entry.item.name} (${formatShortCOP(entry.item.price * entry.quantity)})`)
      .join('\n');

    const message = `¡Hola Fusión del Mar! 🌊🦀 Me gustaría ordenar los siguientes platos de su Carta Digital:

${orderDetails}

*Subtotal Estimado:* ${formatPriceCOP(subtotal)}
*Empaque:* Cajas térmicas con sello dorado

Por favor indíquenme el tiempo estimado de entrega y los datos para transferir. ¡Muchas gracias!`;

    return `${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#000000] border-l border-[#C9973D]/30 h-full flex flex-col justify-between shadow-2xl z-10 text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0B1F33] border border-[#C9973D]/40 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#C9973D]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F5EBDD] font-sans">
                Mi Pedido
              </h3>
              <span className="text-xs text-[#D6B56A]">
                {totalItemsCount} {totalItemsCount === 1 ? 'producto seleccionado' : 'productos seleccionados'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar pedido"
            className="p-2 rounded-lg text-[#F5EBDD]/60 hover:text-[#F5EBDD] hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973D]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {orderItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-[#0B1F33] border border-[#C9973D]/20 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-[#C9973D]/50" />
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold text-[#F5EBDD]">
                  Tu pedido está vacío
                </p>
                <p className="text-xs text-[#F5EBDD]/60 max-w-xs">
                  Explora la carta digital y agrega tus ceviches, encocados o cenas completas favoritas.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 text-xs font-semibold text-black bg-[#C9973D] hover:bg-[#D6B56A] rounded-xl transition-colors"
              >
                Ver Carta Digital
              </button>
            </div>
          ) : (
            orderItems.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-[#0B1F33]/40 border border-white/5 flex gap-3 items-center justify-between"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-lg object-cover border border-white/10 shrink-0"
                />

                <div className="flex-1 min-w-0 pr-2">
                  <h4 className="text-xs font-bold text-[#F5EBDD] truncate">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-[#D6B56A] font-mono tabular-nums block">
                    {formatShortCOP(item.price)} c/u
                  </span>
                  <span className="text-[10px] text-white/50 block truncate">
                    {item.serves}
                  </span>
                </div>

                {/* Counter & Delete */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                    className="p-1 rounded bg-black/60 text-white/80 hover:text-white border border-white/10"
                    aria-label="Disminuir cantidad"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono font-bold w-5 text-center text-[#F5EBDD]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                    className="p-1 rounded bg-black/60 text-white/80 hover:text-white border border-white/10"
                    aria-label="Aumentar cantidad"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 0)}
                    className="p-1 ml-1 text-red-400/70 hover:text-red-400"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Actions */}
        {orderItems.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#000000] space-y-4">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#F5EBDD]/70">
                <span>Subtotal de Platos</span>
                <span className="font-mono tabular-nums text-[#F5EBDD] font-semibold">{formatShortCOP(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#0F6B7A]">
                <span>Empaque Térmico con Sello Dorado</span>
                <span>Incluido</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#F5EBDD] pt-2 border-t border-white/10">
                <span>Total Estimado</span>
                <span className="font-mono text-[#D6B56A] text-lg tabular-nums">{formatShortCOP(subtotal)}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={generateWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-sm font-bold text-black bg-[#C9973D] hover:bg-[#D6B56A] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#C9973D]/25 transition-all text-center"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Pedir por WhatsApp Ahora</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuoter();
                  }}
                  className="flex-1 py-2 text-xs font-medium text-[#F5EBDD] bg-[#0B1F33] hover:bg-[#0B1F33]/80 border border-white/10 rounded-lg text-center"
                >
                  ¿Es un evento grande? Cotizar Banquete
                </button>
                <button
                  onClick={onClearOrder}
                  className="px-3 py-2 text-xs text-white/50 hover:text-red-400 transition-colors"
                >
                  Vaciar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
