import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  nombre: string;
  email: string;
  whatsapp: string;
  comuna: string;
  region: string;
  direccion: string;
  descripcion?: string;
  motivo_solicitud?: string;
};
