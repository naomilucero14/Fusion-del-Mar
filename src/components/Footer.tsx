import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { FacebookIcon } from './icons/FacebookIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] border-t border-[#C9973D]/30 pt-16 pb-12 text-left text-xs text-[#F5EBDD]/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C9973D] bg-black shrink-0">
                <img
                  src={BRAND_INFO.logoUrl}
                  alt="Fusión del Mar Sello"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-[#F5EBDD] tracking-wider block font-sans">
                  FUSIÓN DEL MAR
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#C9973D] font-mono block">
                  Cocina Oculta · Barranquilla, Colombia
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F5EBDD]/70 font-light leading-relaxed max-w-sm">
              Cocina oculta en Barranquilla especializada en mariscos frescos, comida ecuatoriana y cenas completas para compartir en celebraciones bajo demanda. Exclusivamente servicio de comida lista para servir a domicilio en Barranquilla y área metropolitana.
            </p>

            <div className="space-y-2 pt-1">
              <span className="text-[11px] uppercase tracking-wider text-[#C9973D] font-semibold block">
                Redes Sociales y Contacto
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0B1F33] border border-[#C9973D]/30 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/15 hover:border-[#25D366] transition-all"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                </a>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0B1F33] border border-[#C9973D]/30 flex items-center justify-center hover:bg-[#E4405F]/10 hover:border-[#E4405F] transition-all"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0B1F33] border border-[#C9973D]/30 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2] transition-all"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                </a>
              </div>
              <span className="text-[11px] text-[#C9973D] font-mono block pt-1">
                {BRAND_INFO.since} · Barranquilla, Atlántico
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#C9973D]">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="hover:text-[#D6B56A] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#carta" className="hover:text-[#D6B56A] transition-colors">
                  Carta Digital
                </a>
              </li>
              <li>
                <a href="#diferencial" className="hover:text-[#D6B56A] transition-colors">
                  Cocina Oculta
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-[#D6B56A] transition-colors">
                  Cotizador
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-[#D6B56A] transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Horarios & Pedidos */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#C9973D]">
              Horarios y Pedidos
            </h4>
            <div className="space-y-2 text-xs text-[#F5EBDD]/70 font-light">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#0F6B7A] mt-0.5 shrink-0" />
                <span>Jueves a Domingo: 11:00 AM - 9:00 PM</span>
              </div>
              <p className="text-[11px] text-[#D6B56A]">
                * Cenas completas y eventos: anticipación recomendada de 24 a 48 horas.
              </p>
            </div>
          </div>

          {/* Cobertura & Contacto */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#C9973D]">
              Contacto y Cobertura
            </h4>
            <div className="space-y-2 text-xs text-[#F5EBDD]/70 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0F6B7A] mt-0.5 shrink-0" />
                <span>{BRAND_INFO.coverage}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#C9973D] shrink-0" />
                <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white font-mono">
                  {BRAND_INFO.phone}
                </a>
              </div>
              <p className="text-[11px] text-[#0F6B7A] font-medium pt-1">
                Inocuidad garantizada con sello inviolable.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Hairline & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F5EBDD]/50">
          <p>
            © {new Date().getFullYear()} FUSIÓN DEL MAR. Todos los derechos reservados. Identidad visual registrada.
          </p>
          <div className="flex items-center gap-1 text-[#D6B56A]">
            <span>Hecho con tradición marina ecuatoriana</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
