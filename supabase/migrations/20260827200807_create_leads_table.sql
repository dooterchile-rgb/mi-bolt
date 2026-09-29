/*
# Create leads table for land verification service

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `nombre` (text, not null) — full name of the person requesting verification
  - `email` (text, not null) — contact email
  - `whatsapp` (text, not null) — WhatsApp phone number
  - `comuna` (text, not null) — commune/municipality
  - `region` (text, not null) — region
  - `direccion` (text, not null) — land address/location
  - `descripcion` (text) — description of the land
  - `fecha_visita` (text) — requested visit date
  - `estado` (text, default 'pendiente') — lead status
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- Allow anon + authenticated INSERT (public form submissions, no sign-in).
- No SELECT/UPDATE/DELETE for anon (leads are private, managed internally).

3. Notes
- This is a single-tenant landing page with no authentication.
- Only INSERT is allowed publicly; all other operations are denied by default.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL,
  comuna text NOT NULL,
  region text NOT NULL,
  direccion text NOT NULL,
  descripcion text,
  fecha_visita text,
  estado text NOT NULL DEFAULT 'pendiente',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);