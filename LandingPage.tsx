
import React, { useState } from 'react';
import { 
  Car, TrendingUp, ArrowRight, Sparkles, MapPin, Search, ChevronRight, 
  Zap, AlertTriangle, Shield, FileText, Megaphone, MessageSquare, 
  Calculator, Globe, Check, Star, Users, Bell, History, Camera, Quote
} from 'lucide-react';

type Locale = 'pt' | 'en' | 'es';
type Country = 'BR' | 'US' | 'MX' | 'PT' | 'AR';

interface CountryConfig {
  name: string;
  flag: string;
  currency: string;
  locale: Locale;
  refPrice: string;
  models: { brand: string; model: string; name: string }[];
}

const COUNTRIES: Record<Country, CountryConfig> = {
  BR: {
    name: 'Brasil', flag: '🇧🇷', currency: 'R$', locale: 'pt', refPrice: 'Tabela FIPE',
    models: [
      { brand: 'Volkswagen', model: 'gol', name: 'Gol' },
      { brand: 'Honda', model: 'civic', name: 'Civic' },
      { brand: 'Toyota', model: 'corolla', name: 'Corolla' },
      { brand: 'Chevrolet', model: 'onix', name: 'Onix' }
    ]
  },
  US: {
    name: 'United States', flag: '🇺🇸', currency: '$', locale: 'en', refPrice: 'KBB / Edmunds',
    models: [
      { brand: 'Ford', model: 'f150', name: 'F-150' },
      { brand: 'Tesla', model: 'model3', name: 'Model 3' },
      { brand: 'Toyota', model: 'camry', name: 'Camry' },
      { brand: 'Jeep', model: 'wrangler', name: 'Wrangler' }
    ]
  },
  MX: {
    name: 'México', flag: '🇲🇽', currency: '$', locale: 'es', refPrice: 'Guía Blue',
    models: [
      { brand: 'Nissan', model: 'versa', name: 'Versa' },
      { brand: 'Kia', model: 'rio', name: 'Rio' },
      { brand: 'Chevrolet', model: 'aveo', name: 'Aveo' },
      { brand: 'Mazda', model: '3', name: 'Mazda 3' }
    ]
  },
  PT: {
    name: 'Portugal', flag: '🇵🇹', currency: '€', locale: 'pt', refPrice: 'Eurotax',
    models: [
      { brand: 'Renault', model: 'clio', name: 'Clio' },
      { brand: 'Mercedes', model: 'aclass', name: 'Classe A' },
      { brand: 'BMW', model: '1series', name: 'Série 1' },
      { brand: 'Dacia', model: 'sandero', name: 'Sandero' }
    ]
  },
  AR: {
    name: 'Argentina', flag: '🇦🇷', currency: '$', locale: 'es', refPrice: 'ACARA',
    models: [
      { brand: 'Fiat', model: 'cronos', name: 'Cronos' },
      { brand: 'Toyota', model: 'hilux', name: 'Hilux' },
      { brand: 'Peugeot', model: '208', name: '208' },
      { brand: 'VW', model: 'amarok', name: 'Amarok' }
    ]
  }
};

const TRANSLATIONS = {
  pt: {
    heroTag: 'AvalIA AI, a Inteligência de Mercado feita para você negociar melhor',
    heroTitle: 'Não perca dinheiro na hora de vender.',
    heroTitleGradient: ' E Compre no melhor preço',
    heroDesc: 'As tabelas oficiais são cegas. Nossa IA analisa anúncios reais na sua região para garantir que você não venda por menos do que o carro vale.',
    ctaMain: 'Avaliar Agora Grátis',
    calcTitle: 'O Investimento mais Lógico',
    calcDesc: 'Compare o prejuízo de uma venda mal planejada versus a proteção da nossa IA.',
    calcLabel: 'Valor do Veículo',
    lossLabel: 'Prejuízo Evitável',
    lossDesc: 'Dinheiro que você deixa na mesa ao não analisar a demanda regional.',
    proCostLabel: 'Custo da Proteção PRO',
    proCostDesc: 'Investimento único. Retorno imediato.',
    logicBadge: 'A decisão mais inteligente',
    socialTitle: 'Quem usa, vende mais rápido',
    socialDesc: 'Milhares de vendedores já abandonaram o "achismo" da FIPE.',
    proTitle: 'Tudo o que você recebe no PRO',
    proTag: 'O arsenal completo',
    comingSoon: 'Em breve',
    tools: {
      dossier: 'Dossiê PDF Certificado',
      ads: 'Anúncios Turbo (Copy IA)',
      negotiation: 'Scripts de Objeções',
      roi: 'Calculadora de Lucro Real',
      alerts: 'Alertas de Preço (E-mail)',
      history: 'Área "Meus Carros"',
      inspection: 'Vistoria por Visão de IA'
    },
    footerClaim: 'Inteligência em Tempo Real',
    dirTitle: 'Modelos Mais Procurados',
    dirDesc: 'Veja a demanda real dos carros mais vendidos em {country}',
    login: 'Entrar no App'
  },
  en: {
    heroTag: 'Market Intelligence 3.0',
    heroTitle: "Don't lose money when it's time to sell.",
    heroTitleGradient: 'sell',
    heroDesc: 'Official price guides are blind. Our AI analyzes real listings in your area to ensure you don\'t sell for less than your car is worth.',
    ctaMain: 'Evaluate Now for Free',
    calcTitle: 'The Most Logical Investment',
    calcDesc: 'Compare the loss of an unplanned sale versus our AI protection.',
    calcLabel: 'Vehicle Value',
    lossLabel: 'Avoidable Loss',
    lossDesc: 'Money you leave on the table by not analyzing regional demand.',
    proCostLabel: 'PRO Protection Cost',
    proCostDesc: 'One-time investment. Immediate return.',
    logicBadge: 'The smartest decision',
    socialTitle: 'Sell faster, like they did',
    socialDesc: 'Thousands of sellers have abandoned "guessing" prices.',
    proTitle: 'Everything included in PRO',
    proTag: 'The complete arsenal',
    comingSoon: 'Coming Soon',
    tools: {
      dossier: 'Certified PDF Dossier',
      ads: 'Turbo Ads (AI Copy)',
      negotiation: 'Objection Scripts',
      roi: 'Real Profit Calculator',
      alerts: 'Price Alerts (Email)',
      history: '"My Cars" Dashboard',
      inspection: 'AI Vision Inspection'
    },
    footerClaim: 'Real-Time Intelligence',
    dirTitle: 'Most Popular Models',
    dirDesc: 'See real demand for best-selling cars in {country}',
    login: 'Login to App'
  },
  es: {
    heroTag: 'Inteligencia de Mercado 3.0',
    heroTitle: 'No pierdas dinero al vender.',
    heroTitleGradient: 'vender',
    heroDesc: 'Las guías oficiales son ciegas. Nuestra IA analiza anuncios reales en tu zona para asegurar que no vendas por menos de lo que vale tu auto.',
    ctaMain: 'Evaluar Ahora Gratis',
    calcTitle: 'La Inversión más Lógica',
    calcDesc: 'Compara la pérdida de una venta no planificada frente a nuestra protección IA.',
    calcLabel: 'Valor del Vehículo',
    lossLabel: 'Pérdida Evitable',
    lossDesc: 'Dinero que dejas sobre la mesa al no analizar la demanda regional.',
    proCostLabel: 'Costo de Protección PRO',
    proCostDesc: 'Inversión única. Retorno inmediato.',
    logicBadge: 'La decisión más inteligente',
    socialTitle: 'Vende más rápido, como ellos',
    socialDesc: 'Miles de vendedores ya dejaron de "adivinar" precios.',
    proTitle: 'Todo lo que incluye el PRO',
    proTag: 'El arsenal completo',
    comingSoon: 'Próximamente',
    tools: {
      dossier: 'Dossier PDF Certificado',
      ads: 'Anuncios Turbo (Copy IA)',
      negotiation: 'Scripts de Objeciones',
      roi: 'Calculadora de Lucro Real',
      alerts: 'Alertas de Precio (Email)',
      history: 'Panel "Mis Autos"',
      inspection: 'Inspección por Visión IA'
    },
    footerClaim: 'Inteligencia en Tiempo Real',
    dirTitle: 'Modelos Más Buscados',
    dirDesc: 'Mira la demanda real de autos más vendidos en {country}',
    login: 'Ingresar al App'
  }
};

const LandingPage: React.FC = () => {
  const APP_URL = "https://www.avaliaaiautomoveis.com";
  const [currentCountry, setCurrentCountry] = useState<Country>('BR');
  const [calcValue, setCalcValue] = useState(50000);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const config = COUNTRIES[currentCountry];
  const t = TRANSLATIONS[config.locale];
  const lossAmount = calcValue * 0.08; // 8% de média de perda por má precificação

  const testimonials = [
    { name: "Carlos M.", location: "São Paulo, BR", text: "Vendi meu Corolla em 3 dias. O Dossiê PDF passou tanta confiança que o comprador nem chorou o preço.", stars: 5 },
    { name: "John D.", location: "Miami, US", text: "KBB was off by $2000 in my city. AvalIA found the real demand. Best $10 investment ever.", stars: 5 },
    { name: "Sofia P.", location: "Lisboa, PT", text: "O gerador de anúncios me poupou horas. Anunciei de manhã, vendi à tarde.", stars: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#060910] text-slate-200 selection:bg-blue-500/30 font-sans scroll-smooth">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#060910]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tighter uppercase">AvalIA AI</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowCountryPicker(!showCountryPicker)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest">{config.flag} {currentCountry}</span>
              </button>
              {showCountryPicker && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-[#0c111d] border border-white/10 rounded-2xl shadow-2xl p-2 z-50">
                  {Object.entries(COUNTRIES).map(([code, c]) => (
                    <button
                      key={code}
                      onClick={() => { setCurrentCountry(code as Country); setShowCountryPicker(false); }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 text-sm font-bold ${currentCountry === code ? 'text-blue-400 bg-blue-500/5' : 'text-slate-400'}`}
                    >
                      <span>{c.flag} {c.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href={APP_URL} className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-xs font-black uppercase hidden sm:block">
              {t.login}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden text-center px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[140px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black mb-8 uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> {t.heroTag}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            {t.heroTitle.split(t.heroTitleGradient)[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{t.heroTitleGradient}</span>
            {t.heroTitle.split(t.heroTitleGradient)[1]}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            {t.heroDesc}
          </p>
          
          <a href={APP_URL} className="inline-flex items-center gap-3 px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] group">
            {t.ctaMain} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Aversão à Perda - Calculadora Logica */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-4 right-8 px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full animate-bounce">
              {t.logicBadge}
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">{t.calcTitle}</h2>
              <p className="text-slate-500 text-sm">{t.calcDesc}</p>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex justify-between mb-4">
                  <span className="text-xs font-black uppercase text-slate-400 tracking-widest">{t.calcLabel}</span>
                  <span className="text-xl font-black text-white">{config.currency} {calcValue.toLocaleString(config.locale)}</span>
                </div>
                <input 
                  type="range" min="5000" max="500000" step="5000"
                  value={calcValue} onChange={(e) => setCalcValue(Number(e.target.value))}
                  className="w-full h-4 bg-slate-800 rounded-full appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl relative">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    <span className="text-[10px] font-black uppercase text-red-400 tracking-widest">{t.lossLabel}</span>
                  </div>
                  <p className="text-4xl font-black text-red-500 mb-2">{config.currency} {lossAmount.toLocaleString(config.locale)}</p>
                  <p className="text-xs text-red-400/60 leading-relaxed">{t.lossDesc}</p>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[8px] font-black px-3 py-1 rounded-full">SEM AVALIA AI</div>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl relative scale-105 shadow-2xl shadow-emerald-500/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-6 h-6 text-emerald-500" />
                    <span className="text-[10px] font-black uppercase text-emerald-400 tracking-widest">{t.proCostLabel}</span>
                  </div>
                  <p className="text-4xl font-black text-emerald-500 mb-2">{config.currency} {config.locale === 'pt' ? '47,90' : '9.99'}</p>
                  <p className="text-xs text-emerald-400/60 leading-relaxed font-bold italic">{t.proCostDesc}</p>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[8px] font-black px-3 py-1 rounded-full">COM PLANO PRO</div>
                </div>
              </div>
              
              <p className="text-center text-slate-500 text-[10px] font-bold uppercase tracking-widest pt-4">
                Pagar {config.currency} {config.locale === 'pt' ? '47' : '9'} para não perder {config.currency} {lossAmount.toLocaleString(config.locale)} é a escolha lógica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-24 bg-white/[0.02] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">{t.socialTitle}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">{t.socialDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <div key={i} className="bg-slate-900/50 border border-white/5 p-8 rounded-[2rem] relative">
                <Quote className="absolute top-6 right-8 w-8 h-8 text-blue-500/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(test.stars)].map((_, j) => <Star key={j} className="w-3 h-3 text-yellow-500 fill-current" />)}
                </div>
                <p className="text-sm text-slate-300 mb-6 italic">"{test.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-black text-white">{test.name[0]}</div>
                  <div>
                    <p className="text-xs font-bold text-white">{test.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase">{test.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 {/* Diretório de Modelos Regionais */}
      <section id="diretorio" className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-4">{t.dirTitle}</h2>
            <p className="text-slate-500 text-sm">{t.dirDesc.replace('{country}', config.name)}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {config.models.map((car) => (
              <a 
                key={car.model}
                href={`${APP_URL}/modelo/${car.brand.toLowerCase()}/${car.model}`}
                className="group p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-blue-600 transition-all hover:scale-[1.02]"
              >
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 group-hover:text-blue-200">{car.brand}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white group-hover:text-white">{car.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-all" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* Checklist Funcionalidades PRO */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">{t.proTag}</span>
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase mt-4">{t.proTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-slate-900/40 rounded-3xl border border-white/5 group hover:border-blue-500/30 transition-all">
                <div className="p-3 bg-blue-600/10 text-blue-500 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all"><FileText /></div>
                <div>
                  <h4 className="font-bold text-white">{t.tools.dossier}</h4>
                  <p className="text-xs text-slate-500">Documento PDF certificado para passar confiança total ao comprador.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-900/40 rounded-3xl border border-white/5 group hover:border-orange-500/30 transition-all">
                <div className="p-3 bg-orange-600/10 text-orange-500 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all"><Megaphone /></div>
                <div>
                  <h4 className="font-bold text-white">{t.tools.ads}</h4>
                  <p className="text-xs text-slate-500">Copywriting persuasivo gerado por IA para vender em marketplaces.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-900/40 rounded-3xl border border-white/5 group hover:border-purple-500/30 transition-all">
                <div className="p-3 bg-purple-600/10 text-purple-500 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all"><MessageSquare /></div>
                <div>
                  <h4 className="font-bold text-white">{t.tools.negotiation}</h4>
                  <p className="text-xs text-slate-500">Argumentos técnicos para derrubar as objeções mais difíceis.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-900/40 rounded-3xl border border-white/5 group hover:border-emerald-500/30 transition-all">
                <div className="p-3 bg-emerald-600/10 text-emerald-500 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all"><Calculator /></div>
                <div>
                  <h4 className="font-bold text-white">{t.tools.roi}</h4>
                  <p className="text-xs text-slate-500">Calculadora de lucro para quem compra carros para revender.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Novas Funcionalidades */}
              <div className="flex items-start gap-4 p-6 bg-blue-600/5 rounded-3xl border border-blue-500/20 group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 uppercase">NOVO</div>
                <div className="p-3 bg-blue-600/20 text-blue-400 rounded-2xl"><Bell /></div>
                <div>
                  <h4 className="font-bold text-white">{t.tools.alerts}</h4>
                  <p className="text-xs text-slate-500">Seja avisado por e-mail quando o preço do modelo mudar na sua região.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-blue-600/5 rounded-3xl border border-blue-500/20 group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 uppercase">NOVO</div>
                <div className="p-3 bg-blue-600/20 text-blue-400 rounded-2xl"><History /></div>
                <div>
                  <h4 className="font-bold text-white">{t.tools.history}</h4>
                  <p className="text-xs text-slate-500">Dashboard exclusivo para salvar e comparar todas as suas avaliações.</p>
                </div>
              </div>
              {/* Roadmap */}
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 opacity-60 grayscale group">
                <div className="p-3 bg-slate-800 text-slate-400 rounded-2xl"><Camera /></div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white">{t.tools.inspection}</h4>
                    <span className="text-[8px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">{t.comingSoon}</span>
                  </div>
                  <p className="text-xs text-slate-500">Use a câmera para detectar avarias e descontar do preço automaticamente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#060910] text-center px-6">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-slate-800 p-2 rounded-xl"><Car className="w-6 h-6 text-white" /></div>
          <span className="text-xl font-black text-white tracking-tighter uppercase">AvalIA AI</span>
        </div>
        <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          © 2024 AvalIA AI - {t.footerClaim}
        </p>
      </footer>
      
      {/* Floating CTA Mobile */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <a href={APP_URL} className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform border border-white/10 ring-4 ring-blue-600/20">
           <Zap className="w-5 h-5 fill-current" /> {t.ctaMain.toUpperCase()}
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
