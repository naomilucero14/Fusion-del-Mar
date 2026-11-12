export interface MenuItem {
  id: string;
  name: string;
  category: 'desayunos' | 'sopas' | 'ceviches' | 'sangos' | 'mariscos' | 'carnes' | 'entradas' | 'cenas_completas' | 'acompanamientos' | 'bebidas';
  categoryLabel: string;
  description: string;
  serves: string;
  price: number;
  highlight?: string;
  image: string;
  tags: string[];
}

export interface ServicePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  details: string[];
  image: string;
}

export interface QuoteSelection {
  occasion: string;
  guests: number;
  menuTier: string;
  sideOptions: string[];
  drinks: boolean;
  eventDate: string;
  eventTime: string;
  notes: string;
  name: string;
  phone: string;
  cityZone: string;
}

export interface Testimonial {
  id: string;
  client: string;
  occasion: string;
  guestsCount: string;
  quote: string;
  date: string;
  rating: number;
}
