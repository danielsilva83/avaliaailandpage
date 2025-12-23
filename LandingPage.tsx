
import React, { useState, useMemo } from 'react';
import { 
  Car, TrendingUp, ArrowRight, Sparkles, MapPin, Search, ChevronRight, 
  Zap, AlertTriangle, Shield, FileText, Megaphone, MessageSquare, 
  Calculator, Globe, Check
} from 'lucide-react';

type Locale = 'pt' | 'en' | 'es';
type Country = 'BR' | 'US' | 'MX' | 'PT' | 'AR';

interface CountryConfig {
  name: string;
  flag: string;
  currency: string;
  locale: Locale;
  refPrice: string; // Ex: FIPE, KBB, etc
  models: { brand: string; model: string; name: string }[];
}

const COUNTRIES: Record<Country, CountryConfig> = {
  BR: {
    name: 'Brasil', flag: '🇧🇷', currency: 'R$', locale: 'pt', refPrice: 'Tabela FIPE',
    models: [
      { brand: 'Volkswagen', model: 'gol', name: 'Gol' },
      { brand: 'Honda', model: 'civic', name: 'Civic' },
      { brand: 'Toyota', model: 'corolla', name: 'Corolla' },
      { brand: 'Chevrolet', model: 'onix', name: 'Onix' },
      { brand: 'Fiat', model: 'strada', name: 'Strada' }
    ]
  },
  US: {
    name: 'United States', flag: '🇺🇸', currency: '$', locale: 'en', refPrice: 'KBB / Edmunds',
    models: [
      { brand: 'Ford', model: 'f150', name: 'F-150' },
      { brand: 'Tesla', model: 'model3', name: 'Model 3' },
      { brand: 'Toyota', model: 'camry', name: 'Camry' },
      { brand: 'Chevrolet', model: 'silverado', name: 'Silverado' },
      { brand: 'Jeep', model: 'wrangler', name: 'Wrangler' }
    ]
  },
  MX: {
    name: 'México', flag: '🇲🇽', currency: '$', locale: 'es', refPrice: 'Guía Blue',
    models: [
      { brand: 'Nissan', model: 'versa', name: 'Versa' },
      { brand: 'Kia', model: 'rio', name: 'Rio' },
      { brand: 'Chevrolet', model: 'aveo', name: 'Aveo' },
      { brand: 'VW', model: 'vento', name: 'Vento' },
      { brand: 'Mazda', model: '3', name: 'Mazda 3' }
    ]
  },
  PT: {
    name: 'Portugal', flag: '🇵🇹', currency: '€', locale: 'pt', refPrice: 'Eurotax',
    models: [
      { brand: 'Renault', model: 'clio', name: 'Clio' },
      { brand: 'Peugeot', model: '208', name: '208' },
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
      { brand: 'VW', model: 'amarok', name: 'Amarok' },
      { brand: 'Ford', model: 'ranger', name: 'Ranger' }
    ]
  }
};

const TRANSLATIONS = {
  pt: {
    heroTag: 'Inteligência de Mercado feita para você vender melhor',
    heroTitle: 'Não perca dinheiro na hora de vender.',
    heroTitleGradient: 'E compre no melhor preço',
    heroDesc: 'As tabelas oficiais são uma média. Nossa IA analisa anúncios reais na sua região para garantir que você não venda por menos do que o carro vale.',
    ctaMain: 'Avaliar Agora Grátis',
    calcTitle: 'O custo de não usar a IA',
    calcDesc: 'Simule quanto você pode estar deixando na mesa ao confiar apenas na {ref}.',
    calcLabel: 'Valor do Veículo',
    lossLabel: 'Perda Estimada (Média)',
    lossDesc: 'Valor que você perde ao vender sem analisar a demanda regional real.',
    proCostLabel: 'Custo da Consultoria PRO',
    proCostDesc: 'Menos de 0,1% do valor do seu veículo.',
    toolsTitle: 'O Arsenal do Vendedor Profissional',
    toolsDesc: 'Com o plano PRO, você recebe as armas para fechar o negócio pelo valor máximo.',
    dirTitle: 'Busque seu Modelo',
    dirDesc: 'Análise regional disponível para todos os modelos no {country}.',
    footerClaim: 'Inteligência em Tempo Real',
    login: 'Entrar no App'
  },
  en: {
    heroTag: 'Market Intelligence 3.0',
    heroTitle: "Don't lose money when it's time to sell.",
    heroTitleGradient: 'sell',
    heroDesc: 'Official price guides are blind. Our AI analyzes real listings in your area to ensure you don\'t sell for less than your car is worth.',
    ctaMain: 'Evaluate Now for Free',
    calcTitle: 'The cost of not using AI',
    calcDesc: 'Simulate how much you might be leaving on the table by relying only on {ref}.',
    calcLabel: 'Vehicle Value',
    lossLabel: 'Estimated Loss (Average)',
    lossDesc: 'Amount you lose when selling without analyzing real regional demand.',
    proCostLabel: 'PRO Protection Cost',
    proCostDesc: 'Less than 0.1% of your vehicle value.',
    toolsTitle: 'The Professional Seller Arsenal',
    toolsDesc: 'With the PRO plan, you get the weapons to close the deal at maximum value.',
    dirTitle: 'Search Your Model',
    dirDesc: 'Regional analysis available for popular models in {country}.',
    footerClaim: 'Real-Time Intelligence',
    login: 'Login to App'
  },
  es: {
    heroTag: 'Inteligencia de Mercado 3.0',
    heroTitle: 'No pierdas dinero al momento de vender.',
    heroTitleGradient: 'vender',
    heroDesc: 'Las guías oficiales son ciegas. Nuestra IA analiza anuncios reales en tu zona para asegurar que no vendas por menos de lo que vale tu auto.',
    ctaMain: 'Evaluar Ahora Gratis',
    calcTitle: 'El costo de no usar IA',
    calcDesc: 'Simula cuánto dinero podrías estar perdiendo al confiar solo en {ref}.',
    calcLabel: 'Valor del Vehículo',
    lossLabel: 'Pérdida Estimada (Promedio)',
    lossDesc: 'Monto que pierdes al vender sin analizar la demanda regional real.',
    proCostLabel: 'Costo de Protección PRO',
    proCostDesc: 'Menos del 0,1% del valor de tu vehículo.',
    toolsTitle: 'El Arsenal del Vendedor Profesional',
    toolsDesc: 'Con el plan PRO, obtienes las armas para cerrar el trato al valor máximo.',
    dirTitle: 'Busca tu Modelo',
    dirDesc: 'Análisis regional disponible para modelos populares en {country}.',
    footerClaim: 'Inteligencia en Tiempo Real',
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
  const lossAmount = calcValue * 0.07;

  return (
    <div className="min-h-screen bg-[#060910] text-slate-200 selection:bg-blue-500/30 font-sans scroll-smooth">
      {/* Dynamic Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#060910]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tighter uppercase">AvalIA AI</span>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Global Selector */}
            <div className="relative">
              <button 
                onClick={() => setShowCountryPicker(!showCountryPicker)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
              >
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-widest">{config.flag} {currentCountry}</span>
              </button>
              
              {showCountryPicker && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-[#0c111d] border border-white/10 rounded-2xl shadow-2xl p-2 animate-fade-in z-50">
                  {Object.entries(COUNTRIES).map(([code, c]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setCurrentCountry(code as Country);
                        setShowCountryPicker(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-all text-sm font-bold ${currentCountry === code ? 'text-blue-400 bg-blue-500/5' : 'text-slate-400'}`}
                    >
                      <span>{c.flag} {c.name}</span>
                      {currentCountry === code && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href={APP_URL} className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-xs font-black hover:bg-blue-50 transition-all active:scale-95 shadow-xl uppercase tracking-wider hidden sm:block">
              {t.login}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-30">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-600 rounded-full blur-[140px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black mb-8 uppercase tracking-widest animate-pulse">
            <Sparkles className="w-3 h-3" /> {t.heroTag}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            {t.heroTitle.split(t.heroTitleGradient)[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{t.heroTitleGradient}</span>
            {t.heroTitle.split(t.heroTitleGradient)[1]}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.heroDesc}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href={APP_URL} className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] active:scale-95 group">
              {t.ctaMain} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Calculadora de Prejuízo Global */}
      <section id="prejuizo" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">{t.calcTitle}</h2>
              <p className="text-slate-500 text-sm">{t.calcDesc.replace('{ref}', config.refPrice)}</p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <span className="text-xs font-black uppercase text-slate-400 tracking-widest">{t.calcLabel}</span>
                  <span className="text-xl font-black text-white">{config.currency} {calcValue.toLocaleString(config.locale)}</span>
                </div>
                <input 
                  type="range" 
                  min="5000" 
                  max="500000" 
                  step="5000"
                  value={calcValue} 
                  onChange={(e) => setCalcValue(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span className="text-[10px] font-black uppercase text-red-400 tracking-widest">{t.lossLabel}</span>
                  </div>
                  <p className="text-3xl font-black text-red-500">{config.currency} {lossAmount.toLocaleString(config.locale)}</p>
                  <p className="text-[10px] text-red-400/60 mt-2">{t.lossDesc}</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    <span className="text-[10px] font-black uppercase text-emerald-400 tracking-widest">{t.proCostLabel}</span>
                  </div>
                  <p className="text-3xl font-black text-emerald-500">{config.currency} {config.locale === 'pt' ? '47,90' : '9.99'}</p>
                  <p className="text-[10px] text-emerald-400/60 mt-2 font-bold italic">{t.proCostDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas PRO */}
      <section id="ferramentas" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">{t.toolsTitle}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">{t.toolsDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all group">
              <div className="bg-blue-600/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 transition-colors">
                <FileText className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Dossiê / Reports</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Certified visual reports to prove your car value to any buyer.</p>
            </div>

            <div className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all group">
              <div className="bg-orange-600/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-orange-600 transition-colors">
                <Megaphone className="w-8 h-8 text-orange-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">AI Ads Copy</h4>
              <p className="text-xs text-slate-500 leading-relaxed">High-conversion listings for local marketplaces and social media.</p>
            </div>

            <div className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all group">
              <div className="bg-purple-600/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-purple-600 transition-colors">
                <MessageSquare className="w-8 h-8 text-purple-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Negotiation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Ready-to-use technical responses for every buyer objection.</p>
            </div>

            <div className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-emerald-500/30 transition-all group">
              <div className="bg-emerald-600/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-emerald-600 transition-colors">
                <Calculator className="w-8 h-8 text-emerald-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">ROI Calculator</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Advanced profit tracking for car flippers and local dealerships.</p>
            </div>
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

      {/* Footer Global */}
      <footer className="py-20 bg-[#060910] text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-slate-800 p-2 rounded-xl">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase">AvalIA AI</span>
        </div>
        <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          © 2024 AvalIA AI - {t.footerClaim}
        </p>
        <div className="flex justify-center gap-8 text-[10px] font-black uppercase text-slate-500 tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="mailto:support@avaliaai.com" className="hover:text-white transition-colors">Support</a>
        </div>
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
