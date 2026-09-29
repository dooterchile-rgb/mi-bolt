import { useState, useEffect } from 'react';
import {
  MapPin,
  ShieldCheck,
  FileText,
  Camera,
  Ruler,
  TreePine,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronDown,
  Mail,
  Eye,
  ClipboardCheck,
  Clock,
  Navigation,
  HelpCircle,
  Search,
  Filter,
  Users,
  Home,
  Zap,
  Droplets,
  Mountain,
  Globe,
} from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import Logo from '@/components/Logo';
import LegalModal from '@/components/LegalModal';

const HERO_IMG =
  'https://images.pexels.com/photos/15422584/pexels-photo-15422584.jpeg?auto=compress&cs=tinysrgb&w=1920';
const SOLUTION_IMG =
  'https://images.pexels.com/photos/4975384/pexels-photo-4975384.jpeg?auto=compress&cs=tinysrgb&w=1260';
const SEARCH_IMG =
  'https://images.pexels.com/photos/7641920/pexels-photo-7641920.jpeg?auto=compress&cs=tinysrgb&w=1260';
const PARCEL_IMG =
  'https://images.pexels.com/photos/20798410/pexels-photo-20798410.jpeg?auto=compress&cs=tinysrgb&w=400';

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [formPath, setFormPath] = useState<'busca' | 'encontre' | undefined>(undefined);
  const [scrolled, setScrolled] = useState(false);
  const [legalOpen, setLegalOpen] = useState<null | 'privacy' | 'terms'>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openForm = (path: 'busca' | 'encontre') => {
    setFormPath(path);
    setFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#0a1f17]">
      {/* ── Nav ────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <Logo size="nav" className="transition-transform group-hover:scale-105" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              ['Problema', '#problema'],
              ['Servicios', '#servicios'],
              ['Proceso', '#proceso'],
              ['Precios', '#precios'],
              ['FAQ', '#faq'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-[#6b7c72] hover:text-[#0f3d2e]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
          <button
            onClick={() => openForm('encontre')}
            className="px-5 py-2.5 bg-[#c9a96e] text-[#0a1f17] rounded-lg font-semibold text-sm hover:bg-[#d8c194] transition-colors"
          >
            Empezar ahora
          </button>
        </div>
      </nav>

      {/* ── 1. HERO ───────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Vista aérea de terreno en Chile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f17]/85 via-[#0a1f17]/70 to-[#0a1f17]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-16 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 animate-fade-in-up">
              <ShieldCheck className="w-4 h-4 text-[#c9a96e]" />
              <span className="text-sm text-white/90 font-medium">
                Sus ojos en tierra chilena
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] text-balance mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              ¿Quieres un terreno en Chile y no sabes por dónde empezar?
            </h1>
            <p
              className="text-lg sm:text-2xl text-[#c9a96e] font-bold leading-relaxed mb-10 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Buscamos, Filtramos y Visitamos por ti
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <button
                onClick={() => openForm('busca')}
                className="px-8 py-4 bg-[#c9a96e] text-[#0a1f17] rounded-xl font-bold text-lg hover:bg-[#d8c194] transition-all hover:shadow-2xl hover:shadow-[#c9a96e]/20 flex items-center justify-center gap-2 group"
              >
                Quiero buscar un terreno
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => openForm('encontre')}
                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/15 transition-colors backdrop-blur-sm flex items-center justify-center gap-2"
              >
                Ya encontré un terreno
              </button>
            </div>
            <div
              className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {[
                ['Búsqueda & filtrado', Search],
                ['Verificación física', Eye],
                ['Informe VerifiKa', FileText],
              ].map(([label, Icon]) => {
                const I = Icon as typeof Search;
                return (
                  <div key={label as string} className="flex items-center gap-2 text-white/70">
                    <I className="w-5 h-5 text-[#c9a96e]" />
                    <span className="text-sm font-medium">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. EL PROBLEMA ─────────────────────────────────── */}
      <section id="problema" className="py-24 bg-[#f5f7f5] bg-grid">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
              El problema
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              Comprar un terreno desde el extranjero significa decidir sobre un lugar que no puedes ver
            </h2>
            <p className="text-lg text-[#6b7c72] leading-relaxed">
              Ya sea que necesitas que encontremos opciones viables según tus parámetros, o que
              verifiquemos en terreno uno que ya encontraste, la distancia no debería ser un
              obstáculo para decidir con seguridad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Navigation,
                title: 'El acceso',
                desc: 'No sabes cómo es realmente el camino de llegada hasta que alguien lo recorre.',
              },
              {
                icon: Mountain,
                title: 'La pendiente',
                desc: 'Las fotos no muestran si el terreno es plano o tiene una pendiente pronunciada.',
              },
              {
                icon: Droplets,
                title: 'El agua',
                desc: 'No puedes ver señales de inundación o drenaje desde un anuncio en internet.',
              },
              {
                icon: Users,
                title: 'El entorno',
                desc: 'No conoces quiénes son los vecinos ni qué hay alrededor del terreno.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-7 bg-white rounded-2xl border border-gray-100 hover:border-[#0f3d2e]/20 hover:shadow-lg transition-all group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                  <item.icon className="w-6 h-6 text-red-500" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-[#6b7c72] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-xl text-[#0a1f17] font-medium leading-relaxed">
              «Puedes ver fotos, precio y ubicación. Pero no puedes conocer de primera mano cómo es
              realmente el lugar.»
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. LA SOLUCIÓN VERIFIKA ────────────────────────── */}
      <section id="solucion" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
                La solución VerifiKa
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 text-balance">
                Reducimos la distancia entre el comprador y el terreno
              </h2>
              <p className="text-lg text-[#6b7c72] leading-relaxed mb-8">
                VerifiKa es un servicio de búsqueda, investigación, filtrado y verificación de
                terrenos en Chile para personas que no pueden estar físicamente allí. Nos encargamos
                de todo: desde buscar opciones viables hasta verificar el terreno en persona y
                entregarte un informe completo.
              </p>
              <div className="space-y-4">
                {[
                  ['Buscamos', 'Investigamos alternativas según tus criterios.'],
                  ['Filtramos', 'Descartamos opciones con inconsistencias o señales de alerta.'],
                  ['Tú eliges', 'Te presentamos alternativas que superaron nuestro filtro.'],
                  ['Verificamos', 'Vamos físicamente al terreno y documentamos todo.'],
                  ['Reportamos', 'Recibes evidencia, fotos, videos y el Informe VerifiKa.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#0f3d2e]/8 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[#0f3d2e]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0a1f17]">{title}</h4>
                      <p className="text-[#6b7c72] text-sm mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0f3d2e]/10 to-[#c9a96e]/10 rounded-3xl blur-2xl" />
              <img
                src={SOLUTION_IMG}
                alt="Profesional inspeccionando terreno en Chile"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Desde donde estés</p>
                    <p className="text-xs text-[#6b7c72]">Nosotros vamos al terreno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CÓMO FUNCIONA — De la búsqueda a la tierra ──── */}
      <section id="proceso" className="py-24 bg-[#0a1f17] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#c9a96e] uppercase tracking-wider">
              De la búsqueda a la tierra
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              Cómo funciona VerifiKa
            </h2>
            <p className="text-white/60 leading-relaxed">
              Seis pasos. Desde que nos cuentas qué buscas hasta que recibes la evidencia del terreno.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', icon: ClipboardCheck, title: 'Cuéntanos', desc: 'Nos dices dónde quieres comprar, presupuesto, superficie, objetivo y características que buscas.' },
              { num: '02', icon: Search, title: 'Buscamos', desc: 'Investigamos alternativas disponibles que se ajusten a tus criterios.' },
              { num: '03', icon: Filter, title: 'Filtramos', desc: 'Investigamos y descartamos opciones que no cumplen tus criterios o presentan inconsistencias.' },
              { num: '04', icon: Users, title: 'Tú eliges', desc: 'Te presentamos alternativas que superaron el filtro para que decidas cuál verificar físicamente.' },
              { num: '05', icon: Eye, title: 'Verifikamos', desc: 'Un visitador se desplaza al terreno y realiza la inspección siguiendo el protocolo VerifiKa.' },
              { num: '06', icon: FileText, title: 'Reportamos', desc: 'Recibes fotografías, videos, observaciones, evidencia y el Informe VerifiKa.' },
            ].map((step, i) => (
              <div
                key={step.num}
                className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c9a96e]/30 transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl font-extrabold text-[#c9a96e]/20 mb-3">{step.num}</div>
                <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/15 flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-[#c9a96e]" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. VERIFIKA BUSCA ──────────────────────────────── */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
              VerifiKa Busca
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              ¿Todavía no tienes terreno? Nosotros comenzamos la búsqueda
            </h2>
            <p className="text-lg text-[#6b7c72] leading-relaxed">
              El cliente nos entrega sus criterios y VerifiKa busca alternativas que realmente valgan
              la pena considerar.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              {[
                'Definición del perfil de búsqueda',
                'Investigación de alternativas',
                'Revisión inicial de cada opción',
                'Revisión de información disponible',
                'Detección de inconsistencias',
                'Descarte de opciones problemáticas',
                'Comparación de alternativas',
                'Selección de alternativas que superan el filtro',
                'Resumen privado con las opciones seleccionadas',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0f3d2e] shrink-0" />
                  <span className="text-[#0a1f17] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-8 sm:p-10 rounded-2xl bg-[#f5f7f5] border border-[#d9e4df]">
              <div className="w-14 h-14 rounded-xl bg-[#0f3d2e] flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-[#c9a96e]" strokeWidth={1.8} />
              </div>
              <p className="text-lg text-[#0a1f17] font-medium leading-relaxed mb-4">
                «No buscamos llenar una lista. Buscamos encontrar opciones que realmente valga la
                pena considerar.»
              </p>
              <p className="text-[#6b7c72] leading-relaxed text-sm">
                VerifiKa continúa buscando y filtrando hasta conseguir aproximadamente 4–6
                alternativas que cumplan tus criterios y hayan superado el filtro inicial, siempre
                que el mercado y las condiciones reales permitan encontrar esa cantidad.
              </p>
              <button
                onClick={() => openForm('busca')}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#0f3d2e] text-white rounded-xl font-semibold hover:bg-[#1a5d44] transition-colors"
              >
                Quiero buscar un terreno
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. EL FILTRO VERIFIKA ──────────────────────────── */}
      <section className="py-24 bg-[#0a1f17] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#c9a96e] uppercase tracking-wider">
              El filtro VerifiKa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              No te mostramos todo lo que encontramos. Te mostramos lo que vale la pena ver.
            </h2>
            <p className="text-white/60 leading-relaxed">
              Cada alternativa pasa por nuestro filtro antes de llegar a ti.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Buscamos', desc: 'Encontramos alternativas según tus criterios.' },
              { icon: AlertTriangle, title: 'Detectamos', desc: 'Identificamos inconsistencias, información contradictoria y señales de alerta.' },
              { icon: XCircle, title: 'Descartamos', desc: 'Eliminamos alternativas que no cumplen o presentan problemas relevantes.' },
              { icon: CheckCircle2, title: 'Seleccionamos', desc: 'Te presentamos únicamente las alternativas que superan nuestro filtro.' },
            ].map((step, i) => (
              <div
                key={step.title}
                className="relative p-7 rounded-2xl bg-white/5 border border-white/10 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/15 flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-[#c9a96e]" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/15" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-xl text-[#c9a96e] font-medium leading-relaxed">
              «No buscamos entregarte una lista. Buscamos reducir el riesgo de que elijas mal.»
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. VERIFIKA SCREEN ─────────────────────────────── */}
      <section className="py-24 bg-[#f5f7f5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
              VerifiKa Screen
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              Tú encontraste el terreno. Nosotros lo sometemos al filtro VerifiKa
            </h2>
            <p className="text-lg text-[#6b7c72] leading-relaxed">
              Una investigación preliminar antes de pagar una visita física.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: FileText, title: 'Información publicada', desc: 'Revisamos lo que declara el anuncio sobre el terreno.' },
              { icon: MapPin, title: 'Ubicación', desc: 'Verificamos la coherencia de la ubicación declarada.' },
              { icon: Ruler, title: 'Características declaradas', desc: 'Comparamos superficie, dimensiones y atributos.' },
              { icon: AlertTriangle, title: 'Posibles inconsistencias', desc: 'Identificamos contradicciones en la información.' },
              { icon: Eye, title: 'Señales de alerta', desc: 'Detectamos indicadores que requieren mayor investigación.' },
              { icon: HelpCircle, title: 'Aspectos a investigar', desc: 'Determinamos si tiene sentido avanzar a la verificación física.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#0f3d2e]/8 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#0f3d2e]" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-[#6b7c72] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. VERIFIKA CHECK ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
              VerifiKa Check
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              El visitador va físicamente al terreno
            </h2>
            <p className="text-lg text-[#6b7c72] leading-relaxed">
              Para clientes que ya tienen un terreno seleccionado y quieren que lo verifiquemos en
              persona.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Navigation, title: 'Coordinación y desplazamiento', items: ['Coordinación del visitador', 'Desplazamiento al terreno', 'Confirmación de acceso'] },
              { icon: Camera, title: 'Inspección y registro', items: ['Inspección visual', 'Fotografías', 'Videos', 'Revisión de acceso, terreno y límites'] },
              { icon: ClipboardCheck, title: 'Evidencia para el informe', items: ['Topografía y vegetación', 'Entorno y vecinos', 'Servicios visibles', 'Checklist VerifiKa', 'Preguntas en terreno cuando corresponda'] },
            ].map((card, i) => (
              <div
                key={card.title}
                className="p-8 rounded-2xl bg-[#f5f7f5] border border-[#d9e4df] animate-fade-in-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0f3d2e] flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-[#c9a96e]" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold mb-4">{card.title}</h3>
                <div className="space-y-2.5">
                  {card.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0f3d2e] shrink-0" />
                      <span className="text-sm text-[#0a1f17]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. QUÉ VERIFICAMOS ─────────────────────────────── */}
      <section className="py-24 bg-[#f5f7f5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
              Qué verificamos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              Lo que revisamos en cada terreno
            </h2>
            <p className="text-lg text-[#6b7c72] leading-relaxed">
              Una revisión principalmente visual y informativa, para que sepas qué hay antes de
              avanzar.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { icon: Navigation, title: 'Acceso', desc: '¿Se puede llegar bien? Vemos el camino y las condiciones reales de entrada.' },
              { icon: Home, title: 'Terreno', desc: '¿Cómo está el suelo? Revisamos las condiciones físicas que se observan.' },
              { icon: Mountain, title: 'Topografía', desc: '¿Es plano o inclinado? Observamos la pendiente y el relieve.' },
              { icon: Droplets, title: 'Agua', desc: '¿Hay riesgo de inundación? Buscamos señales de acumulación o drenaje.' },
              { icon: TreePine, title: 'Vegetación', desc: '¿Qué crece ahí? Identificamos el tipo y la densidad de vegetación.' },
              { icon: Zap, title: 'Servicios', desc: '¿Hay luz o agua? Verificamos si se observan servicios disponibles.' },
              { icon: Users, title: 'Entorno', desc: '¿Quién está cerca? Vemos vecinos, construcciones y actividad.' },
              { icon: MapPin, title: 'Ubicación', desc: '¿Coinicide con lo dicho? Comparamos la ubicación real con la declarada.' },
              { icon: Ruler, title: 'Límites', desc: '¿Dónde termina? Buscamos referencias físicas y señales de los deslindes.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#0f3d2e]/8 flex items-center justify-center mb-3 mx-auto">
                  <item.icon className="w-5 h-5 text-[#0f3d2e]" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-sm mb-1.5">{item.title}</h3>
                <p className="text-[#6b7c72] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. QUÉ RECIBE EL CLIENTE / INFORME ────────────── */}
      <section className="py-24 bg-[#0a1f17] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#c9a96e] uppercase tracking-wider">
                Informe VerifiKa
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 text-balance">
                Tus ojos en tierra. Todo documentado.
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Recibes un informe estructurado con toda la evidencia de la verificación, para que
                puedas decidir con calma y con información real.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Ubicación', 'Superficie', 'Acceso', 'Vegetación',
                  'Topografía', 'Agua', 'Electricidad', 'Entorno',
                  'Vecinos', 'Observaciones', 'Evidencia fotográfica', 'Evidencia audiovisual',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a96e] shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openForm('encontre')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c9a96e] text-[#0a1f17] rounded-xl font-bold hover:bg-[#d8c194] transition-colors"
              >
                Ver ejemplo de informe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a96e]/10 to-white/5 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Mock informe header */}
                <div className="bg-[#0f3d2e] px-6 py-4 flex items-center justify-between">
                  <Logo size="report" />
                  <span className="text-white/50 text-xs font-mono">INF-2024-0847</span>
                </div>
                {/* Mock informe body */}
                <div className="p-6 text-[#0a1f17]">
                  <div className="flex gap-4 mb-5">
                    <img
                      src={PARCEL_IMG}
                      alt="Vista del terreno verificado"
                      className="w-28 h-28 rounded-lg object-cover shrink-0 border border-gray-200"
                    />
                    <div>
                      <p className="text-xs text-[#6b7c72] uppercase tracking-wider mb-1">
                        Informe de Verificación
                      </p>
                      <h4 className="font-bold text-lg">Parcela 12, Camino Viejo</h4>
                      <p className="text-sm text-[#6b7c72]">Pucón · Región de La Araucanía</p>
                      <p className="text-xs text-[#6b7c72] mt-2">Coordenadas: 39.27°S, 71.98°W</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      ['Superficie', '5.000 m²', ''],
                      ['Acceso', 'Confirmado', 'text-emerald-600'],
                      ['Deslindes', 'Con diferencias', 'text-amber-600'],
                      ['Riesgo inundación', 'Alto', 'text-red-500'],
                      ['Vegetación', 'Densa', 'text-amber-600'],
                      ['Pendiente', 'Suave', 'text-emerald-600'],
                      ['Servicios', 'Sin conexión', 'text-red-500'],
                      ['Orientación', 'Norte', 'text-emerald-600'],
                    ].map(([label, val, color]) => (
                      <div key={label} className="bg-[#f5f7f5] rounded-lg p-3">
                        <p className="text-xs text-[#6b7c72]">{label}</p>
                        <p className={`font-bold ${color}`}>{val}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-[#6b7c72] uppercase tracking-wider mb-1">
                      Conclusión
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      Terreno con buen acceso pero riesgo de inundación en sector sur. Se recomienda
                      negociar precio o buscar alternativa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. DESDE DONDE ESTÉS ──────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0f3d2e]/10 to-[#c9a96e]/10 rounded-3xl blur-2xl" />
              <img
                src={SEARCH_IMG}
                alt="Persona investigando y planificando la búsqueda de un terreno"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -top-5 -right-5 bg-[#0f3d2e] rounded-xl shadow-xl px-5 py-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-[#c9a96e]" />
                  <div>
                    <p className="text-white font-bold text-sm">Búsqueda activa</p>
                    <p className="text-white/60 text-xs">Encontramos por ti</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
                Desde donde estés
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 text-balance">
                Tú estás lejos. Nosotros estamos en el terreno.
              </h2>
              <p className="text-lg text-[#6b7c72] leading-relaxed mb-6">
                Mientras tú decides con calma desde donde estés, nosotros podemos estar
                físicamente en Chile buscando, filtrando y documentando lo que ocurre en tierra.
              </p>
              <p className="text-base text-[#0a1f17] font-medium leading-relaxed mb-6">
                «No puedes estar en Chile. Nosotros sí.»
              </p>
              <p className="text-base text-[#c9a96e] font-medium leading-relaxed">
                «Tu terreno puede estar en Chile. Tus ojos también.»
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. PARA QUIÉN ES VERIFIKA ─────────────────────── */}
      <section className="py-24 bg-[#f5f7f5]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
              Para quién es VerifiKa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              VerifiKa está pensado para ti si…
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Vives fuera de Chile',
              'Quieres comprar una parcela o terreno en Chile',
              'No puedes viajar para visitar cada alternativa',
              'Encontraste un terreno pero no sabes si vale la pena avanzar',
              'Quieres evidencia real antes de tomar una decisión',
              'Si no sabes dónde, ni cómo buscar',
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#0f3d2e]/8 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#0f3d2e]" />
                </div>
                <span className="text-[#0a1f17] leading-relaxed font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. PRECIOS Y PAQUETES ─────────────────────────── */}
      <section id="precios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
              Precios y paquetes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              Un servicio para cada etapa
            </h2>
            <p className="text-lg text-[#6b7c72] leading-relaxed">
              Los valores finales pueden variar según ubicación, superficie, desplazamiento y
              complejidad del servicio.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'VerifiKa Busca',
                price: '€150',
                unit: 'desde',
                desc: 'Buscamos y filtramos alternativas según tus criterios.',
                features: ['Perfil de búsqueda', 'Investigación de alternativas', 'Filtro inicial', 'Resumen privado'],
                highlight: false,
              },
              {
                name: 'VerifiKa Screen',
                price: '€60',
                unit: 'desde',
                desc: 'Investigación preliminar del terreno que ya encontraste.',
                features: ['Revisión del anuncio', 'Detección de inconsistencias', 'Señales de alerta', 'Recomendación'],
                highlight: false,
              },
              {
                name: 'VerifiKa Check',
                price: '€180',
                unit: 'desde',
                desc: 'Visita física al terreno con protocolo VerifiKa.',
                features: ['Visita presencial', 'Fotos y videos', 'Checklist VerifiKa', 'Informe'],
                highlight: false,
              },
              {
                name: 'VerifiKa Completo',
                price: '€330',
                unit: 'desde',
                desc: 'Busca + Screen + Check + Report en un solo paquete.',
                features: ['Búsqueda y filtrado', 'Revisión de alternativas', 'Verificación física', 'Informe completo'],
                highlight: true,
              },
            ].map((plan, i) => (
              <div
                key={plan.name}
                className={`relative p-7 rounded-2xl border transition-all animate-fade-in-up ${
                  plan.highlight
                    ? 'border-[#c9a96e] bg-[#0f3d2e] text-white shadow-xl lg:scale-105'
                    : 'border-gray-100 bg-white hover:shadow-lg'
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c9a96e] text-[#0a1f17] rounded-full text-xs font-bold uppercase tracking-wider">
                    Más completo
                  </div>
                )}
                <h3 className={`text-lg font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-[#0a1f17]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.highlight ? 'text-white/70' : 'text-[#6b7c72]'}`}>
                  {plan.desc}
                </p>
                <div className="mb-5">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-[#c9a96e]' : 'text-[#0a1f17]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-1.5 ${plan.highlight ? 'text-white/50' : 'text-[#6b7c72]'}`}>
                    {plan.unit}
                  </span>
                </div>
                <div className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-[#c9a96e]' : 'text-[#0f3d2e]'}`} />
                      <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-[#0a1f17]'}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => openForm(plan.name.includes('Busca') ? 'busca' : 'encontre')}
                  className={`w-full px-5 py-3 rounded-xl font-semibold text-sm transition-colors ${
                    plan.highlight
                      ? 'bg-[#c9a96e] text-[#0a1f17] hover:bg-[#d8c194]'
                      : 'bg-[#0f3d2e] text-white hover:bg-[#1a5d44]'
                  }`}
                >
                  Solicitar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. CÓMO TRABAJAMOS ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
              Cómo trabajamos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-balance">
              Cada visita sigue un protocolo profesional estructurado
            </h2>
            <p className="text-lg text-[#6b7c72] leading-relaxed">
              Recorremos el terreno con un método claro, no improvisamos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ClipboardCheck, title: 'Coordinamos', desc: 'El visitador recibe ubicación, instrucciones y checklist.' },
              { icon: Navigation, title: 'Llegamos', desc: 'Se confirma acceso y condiciones reales.' },
              { icon: Eye, title: 'Observamos', desc: 'Se revisan los puntos definidos para ese terreno.' },
              { icon: Camera, title: 'Registramos', desc: 'Fotografías, videos y evidencia.' },
              { icon: HelpCircle, title: 'Consultamos', desc: 'Cuando corresponde, se realizan preguntas en terreno.' },
              { icon: FileText, title: 'Reportamos', desc: 'Toda la información se estructura para el cliente.' },
            ].map((step, i) => (
              <div
                key={step.title}
                className="p-6 rounded-2xl bg-[#f5f7f5] border border-[#d9e4df] animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#0f3d2e] flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-[#c9a96e]" strokeWidth={1.8} />
                </div>
                <h3 className="font-bold mb-1.5">{step.title}</h3>
                <p className="text-[#6b7c72] leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 16. FAQ ────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-[#f5f7f5]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#0f3d2e] uppercase tracking-wider">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-balance">
              Lo que todos preguntan
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: '¿Necesito tener un terreno para empezar?',
                a: 'No. Si todavía no tienes un terreno concreto, VerifiKa Busca es el servicio para ti. Nos dices tus criterios y buscamos alternativas que cumplan y superen nuestro filtro inicial.',
              },
              {
                q: 'Ya encontré un terreno, ¿qué hago?',
                a: 'Puedes contratar VerifiKa Screen para una investigación preliminar, o VerifiKa Check si quieres que vayamos físicamente al terreno. También puedes contratar el paquete VerifiKa Completo.',
              },
              {
                q: '¿En qué regiones trabajan?',
                a: 'Cubrimos principalmente las regiones de Valparaíso, Metropolitana, O\'Higgins, Maule, Ñuble, Biobío y La Araucanía. Si tu terreno está fuera de esa zona, contáctanos: evaluamos caso a caso.',
              },
              {
                q: '¿El informe sirve para algo legal o comercial?',
                a: 'Nuestro informe es un documento de verificación visual y descriptiva. No reemplaza un avalúo comercial ni una revisión legal de títulos. Es una herramienta para que decidas mejor.',
              },
              {
                q: '¿Cuánto tarda la entrega del informe?',
                a: 'Desde la visita al terreno, máximo 48 horas tienes el informe completo. En la mayoría de los casos lo entregamos el mismo día de la visita.',
              },
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 17. CTA FINAL ──────────────────────────────────── */}
      <section className="py-24 bg-[#0a1f17] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#c9a96e]/15 flex items-center justify-center mx-auto mb-8">
            <HelpCircle className="w-8 h-8 text-[#c9a96e]" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-balance">
            ¿Quieres encontrar un terreno en Chile y estás lejos?
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Cuéntanos qué estás buscando.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openForm('busca')}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#c9a96e] text-[#0a1f17] rounded-xl font-bold text-xl hover:bg-[#d8c194] transition-all hover:shadow-2xl hover:shadow-[#c9a96e]/20 group"
            >
              Quiero buscar un terreno
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => openForm('encontre')}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-xl hover:bg-white/15 transition-colors backdrop-blur-sm"
            >
              Ya encontré un terreno
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-white/50 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Respuesta en 24 hrs
            </span>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" /> Informe en 48 hrs
            </span>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="bg-[#06150f] text-white/60 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <Logo size="footer" />
              <p className="text-sm max-w-xs leading-relaxed mt-4">
                Búsqueda, filtrado y verificación de terrenos en Chile para personas que no pueden
                estar físicamente allí.
              </p>
              <p className="text-sm font-medium text-[#c9a96e] mt-3">Sus ojos en tierra chilena</p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="https://wa.me/491772714237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-label="WhatsApp">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>+49 177 2714237</span>
                </a>
                <a
                  href="https://instagram.com/verifikachile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-label="Instagram">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span>@VerifikaChile</span>
                </a>
                <a
                  href="https://facebook.com/verifikachile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-label="Facebook">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>@VerifikaChile</span>
                </a>
                <a
                  href="mailto:contacto@verifikachile.cl"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contacto@verifikachile.cl</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Legal</h4>
              <div className="flex flex-col gap-3 text-sm">
                <button
                  onClick={() => setLegalOpen('privacy')}
                  className="text-left hover:text-white transition-colors"
                >
                  Política de Privacidad
                </button>
                <button
                  onClick={() => setLegalOpen('terms')}
                  className="text-left hover:text-white transition-colors"
                >
                  Términos y Condiciones
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-8 space-y-3">
            <p className="text-xs text-white/40 leading-relaxed text-justify max-w-none">
              Este sitio web no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
            </p>
            <p className="text-[11px] text-white/35 leading-relaxed text-justify max-w-none">
              <span className="uppercase tracking-wider text-white/45">Límites del servicio:</span> VerifiKa realiza una revisión visual e informativa del terreno. No reemplaza la revisión legal, topográfica, técnica ni comercial de profesionales especializados. No garantiza que el terreno sea legal, construible, rentable o libre de problemas. La decisión final de compra siempre corresponde al cliente.
            </p>
            <p className="text-sm text-center text-white/50">
              © 2026 VerifiKa Chile. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <LeadForm open={formOpen} onClose={() => setFormOpen(false)} path={formPath} />

      <LegalModal
        open={legalOpen === 'privacy'}
        onClose={() => setLegalOpen(null)}
        title="Política de Privacidad"
      >
        <p>
          VerifiKa Chile recopila los datos personales que nos entregas a través de los formularios
          de contacto o clics en WhatsApp exclusivamente para ponernos en contacto contigo y
          coordinar los servicios de búsqueda, filtrado y verificación de terrenos en Chile.
        </p>
        <p>
          No compartimos, vendemos ni cedemos tus datos a terceros. Los datos se utilizan única
          y exclusivamente para la prestación de nuestros servicios y la comunicación relacionada.
        </p>
        <p>
          Puedes solicitar el acceso, rectificación o eliminación de tus datos en cualquier
          momento escribiendo a contacto@verifikachile.cl.
        </p>
      </LegalModal>

      <LegalModal
        open={legalOpen === 'terms'}
        onClose={() => setLegalOpen(null)}
        title="Términos y Condiciones del Servicio"
      >
        <p>
          VerifiKa realiza búsqueda, filtrado, investigación preliminar e inspecciones presenciales
          de carácter informativo y visual sobre el estado del terreno, accesos, límites y entorno,
          según la información disponible en terreno al momento de la visita.
        </p>
        <p>
          Nuestros informes constituyen una herramienta de apoyo para la toma de decisiones y no
          reemplazan la revisión legal de títulos, la mensura oficial de un topógrafo, ni un avalúo
          comercial con validez legal. No garantizamos que un terreno sea legal, construible,
          rentable o libre de problemas.
        </p>
        <p>
          La entrega del informe se realiza en un máximo de 48 horas desde la visita al terreno.
          El precio final se define según la ubicación, superficie, desplazamiento y complejidad
          del servicio.
        </p>
      </LegalModal>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white hover:border-[#0f3d2e]/20 transition-colors">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-semibold text-[#0a1f17]">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#6b7c72] shrink-0 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-5 text-[#6b7c72] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
