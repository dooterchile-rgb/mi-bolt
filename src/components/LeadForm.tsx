import { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY = '35ea4025-8f47-413f-a652-76f1b44df055';

type FormState = {
  nombre: string;
  email: string;
  whatsapp: string;
  comuna: string;
  region: string;
  direccion: string;
  descripcion: string;
  motivo_solicitud: string;
};

const initialForm: FormState = {
  nombre: '',
  email: '',
  whatsapp: '',
  comuna: '',
  region: '',
  direccion: '',
  descripcion: '',
  motivo_solicitud: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const regiones = [
  'Región de Arica y Parinacota',
  'Región de Tarapacá',
  'Región de Antofagasta',
  'Región de Atacama',
  'Región de Coquimbo',
  'Región de Valparaíso',
  'Región Metropolitana',
  "Región del Libertador Bernardo O'Higgins",
  'Región del Maule',
  'Región de Ñuble',
  'Región del Biobío',
  'Región de La Araucanía',
  'Región de Los Ríos',
  'Región de Los Lagos',
  'Región de Aysén',
  'Región de Magallanes',
];

export default function LeadForm({
  open,
  onClose,
  path,
}: {
  open: boolean;
  onClose: () => void;
  path?: 'busca' | 'encontre';
}) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  if (!open) return null;

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'Nueva solicitud — VerifiKa',
          from_name: 'VerifiKa',
          to: 'contacto@verifikachile.cl',
          nombre: form.nombre,
          email: form.email,
          whatsapp: form.whatsapp,
          comuna: form.comuna,
          region: form.region,
          direccion: form.direccion || 'No especificada',
          descripcion: form.descripcion || 'Sin descripción',
          motivo_solicitud: form.motivo_solicitud,
          tipo_solicitud: path === 'busca' ? 'Quiero buscar un terreno' : 'Ya encontré un terreno',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'No se pudo enviar el formulario.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Ocurrió un error. Intenta nuevamente.');
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setForm(initialForm);
    setErrorMsg('');
    onClose();
  };

  const titleText = path === 'busca' ? 'Quiero buscar un terreno' : path === 'encontre' ? 'Ya encontré un terreno' : 'Verificar mi terreno';
  const subtitleText = path === 'busca'
    ? 'Cuéntanos qué buscas y comenzamos la búsqueda por ti.'
    : 'Cuéntanos sobre el terreno que encontraste y lo investigamos.';

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl my-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {status === 'success' ? (
          <div className="flex flex-col items-center justify-center px-8 py-16 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[#0a1f17] mb-3">¡Solicitud recibida!</h3>
            <p className="text-[#6b7c72] text-lg max-w-md mb-8">
              Hemos registrado tu solicitud. Nuestro equipo te contactará por WhatsApp dentro de
              las próximas 24 horas.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-[#0f3d2e] text-white rounded-xl font-semibold hover:bg-[#1a5d44] transition-colors"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-100 bg-white rounded-t-2xl">
              <div>
                <h3 className="text-xl font-bold text-[#0a1f17]">{titleText}</h3>
                <p className="text-sm text-[#6b7c72] mt-0.5">{subtitleText}</p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-[#6b7c72] hover:text-[#0a1f17]"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Nombre completo" required>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => handleChange('nombre', e.target.value)}
                    className="form-input"
                    placeholder="Tu nombre"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="form-input"
                    placeholder="tu@email.com"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="WhatsApp" required>
                  <input
                    type="tel"
                    required
                    value={form.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    className="form-input"
                    placeholder="+56 9 1234 5678"
                  />
                </Field>
                <Field label="Región" required>
                  <select
                    required
                    value={form.region}
                    onChange={(e) => handleChange('region', e.target.value)}
                    className="form-input"
                  >
                    <option value="">Selecciona una región</option>
                    {regiones.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Comuna" required>
                  <input
                    type="text"
                    required
                    value={form.comuna}
                    onChange={(e) => handleChange('comuna', e.target.value)}
                    className="form-input"
                    placeholder="Ej. Pucón"
                  />
                </Field>
                <Field label="Dirección del terreno (opcional)">
                  <input
                    type="text"
                    value={form.direccion}
                    onChange={(e) => handleChange('direccion', e.target.value)}
                    className="form-input"
                    placeholder="Ej. Camino Viejo s/n, parcela 12"
                  />
                </Field>
              </div>

              <Field label="Motivo de la solicitud" required>
                <select
                  required
                  value={form.motivo_solicitud}
                  onChange={(e) => handleChange('motivo_solicitud', e.target.value)}
                  className="form-input"
                >
                  <option value="">Selecciona un motivo</option>
                  <option value="Verificación de terreno">Verificación de terreno</option>
                  <option value="Solicitud de Información">Solicitud de Información</option>
                </select>
              </Field>

              <Field label={path === 'busca' ? 'Cuéntanos qué estás buscando' : 'Cuéntanos sobre el terreno'}>
                <textarea
                  value={form.descripcion}
                  onChange={(e) => handleChange('descripcion', e.target.value)}
                  rows={3}
                  className="form-input resize-none"
                  placeholder={
                    path === 'busca'
                      ? 'Presupuesto, superficie, características que buscas, objetivo...'
                      : 'Tamaño aproximado, tipo de terreno, qué te gustaría investigar, etc.'
                  }
                />
              </Field>

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl text-red-700 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0f3d2e] text-white rounded-xl font-semibold text-lg hover:bg-[#1a5d44] transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar solicitud
                  </>
                )}
              </button>

              <p className="text-xs text-[#6b7c72] text-center">
                Al enviar este formulario aceptas ser contactado por nuestro equipo. No
                compartimos tu información.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[#0a1f17] mb-1.5">
        {label}
        {required && <span className="text-[#0f3d2e]"> *</span>}
      </span>
      {children}
    </label>
  );
}
