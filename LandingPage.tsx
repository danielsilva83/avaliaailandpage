
import React, { useState } from 'react';
import { 
  Car, TrendingUp, ShieldCheck, ArrowRight, Check, Target, 
  ChevronRight, Zap, Users, Globe2, ShieldQuestion, 
  BarChart3, Sparkles, MapPin, Search, Star, ExternalLink,
  ShieldAlert, Calculator, DollarSign, FileText, Megaphone,
  TrendingDown, MessageSquare, AlertTriangle, Shield
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const APP_URL = "https://www.avaliaaiautomoveis.com";
  const [calcValue, setCalcValue] = useState(50000);

  const lossAmount = calcValue * 0.07; // Média de erro de mercado sem IA

  const DIRECTORY_MODELS = [
    { brand: 'Volkswagen', model: 'gol', name: 'Preço Gol' },
    { brand: 'Honda', model: 'civic', name: 'Preço Civic' },
    { brand: 'Toyota', model: 'corolla', name: 'Preço Corolla' },
    { brand: 'Chevrolet', model: 'onix', name: 'Preço Onix' },
    { brand: 'Jeep', model: 'compass', name: 'Preço Compass' },
    { brand: 'Hyundai', model: 'hb20', name: 'Preço HB20' },
    { brand: 'BMW', model: '320i', name: 'Preço BMW 320i' },
    { brand: 'Toyota', model: 'hilux', name: 'Preço Hilux' },
    { brand: 'Fiat', model: 'strada', name: 'Preço Strada' },
    { brand: 'Jeep', model: 'renegade', name: 'Preço Renegade' }
  ];

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
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="#ferramentas" className="hover:text-white transition-colors">PRO</a>
            <a href="#prejuizo" className="hover:text-white transition-colors">Calculadora</a>
            <a href="#diretorio" className="hover:text-white transition-colors">Modelos</a>
          </div>
          <a href={APP_URL} className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-xs font-black hover:bg-blue-50 transition-all active:scale-95 shadow-xl uppercase tracking-wider">Entrar no App</a>
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
            <Sparkles className="w-3 h-3" /> Inteligência de Mercado 3.0
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            Não perca dinheiro na <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">hora de vender</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            A Tabela FIPE é uma média cega. Nossa IA analisa anúncios reais na sua região para garantir que você não venda por menos do que o carro vale.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href={APP_URL} className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] active:scale-95 group">
              Avaliar Agora Grátis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* NOVO: Calculadora de Prejuízo (Gatilho de Aversão à Perda) */}
      <section id="prejuizo" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">O custo de não usar a IA</h2>
              <p className="text-slate-500 text-sm">Simule quanto você pode estar deixando na mesa ao confiar apenas na FIPE.</p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-4">
                  <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Valor do Carro</span>
                  <span className="text-xl font-black text-white">R$ {calcValue.toLocaleString('pt-BR')}</span>
                </div>
                <input 
                  type="range" 
                  min="20000" 
                  max="300000" 
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
                    <span className="text-[10px] font-black uppercase text-red-400 tracking-widest">Perda Estimada (Média)</span>
                  </div>
                  <p className="text-3xl font-black text-red-500">R$ {lossAmount.toLocaleString('pt-BR')}</p>
                  <p className="text-[10px] text-red-400/60 mt-2">Valor que você perde ao vender sem analisar a demanda regional real.</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    <span className="text-[10px] font-black uppercase text-emerald-400 tracking-widest">Custo da Proteção PRO</span>
                  </div>
                  <p className="text-3xl font-black text-emerald-500">R$ 47,90</p>
                  <p className="text-[10px] text-emerald-400/60 mt-2 font-bold italic">Menos de 0,1% do valor do seu veículo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVO: Showcase das Ferramentas PRO (Desejo) */}
      <section id="ferramentas" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">O Arsenal do Vendedor Profissional</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">Com o plano PRO, você não recebe apenas um preço. Você recebe as armas para fechar o negócio pelo valor máximo.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all group">
              <div className="bg-blue-600/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 transition-colors">
                <FileText className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Dossiê PDF</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Gere um laudo visual certificado para enviar ao comprador e provar o valor do seu carro.</p>
            </div>

            <div className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all group">
              <div className="bg-orange-600/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-orange-600 transition-colors">
                <Megaphone className="w-8 h-8 text-orange-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Anúncio Turbo</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Copies escritas por IA focadas em gatilhos mentais para marketplaces como Webmotors e OLX.</p>
            </div>

            <div className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all group">
              <div className="bg-purple-600/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-purple-600 transition-colors">
                <MessageSquare className="w-8 h-8 text-purple-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Battle Cards</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Respostas técnicas prontas para cada objeção que o comprador tentar usar para baixar seu preço.</p>
            </div>

            <div className="p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-emerald-500/30 transition-all group">
              <div className="bg-emerald-600/20 p-4 rounded-2xl w-fit mb-6 group-hover:bg-emerald-600 transition-colors">
                <Calculator className="w-8 h-8 text-emerald-400 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Cálculo de ROI</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Calculadora de lucro real descontando gastos com estética e mecânica para revendedores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diretório de Modelos */}
      <section id="diretorio" className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-4">Busque seu Modelo</h2>
            <p className="text-slate-500 text-sm">Análise regional disponível para mais de 1.500 modelos.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {DIRECTORY_MODELS.map((car) => (
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

      {/* Footer Final */}
      <footer className="py-20 bg-[#060910] text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-slate-800 p-2 rounded-xl">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase">AvalIA AI</span>
        </div>
        <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          © 2024 AvalIA AI Automóveis - Inteligência em Tempo Real
        </p>
        <div className="flex justify-center gap-8 text-[10px] font-black uppercase text-slate-500 tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="mailto:contato@avaliaaiautomoveis.com" className="hover:text-white transition-colors">Suporte</a>
        </div>
      </footer>
      
      {/* Floating CTA Mobile */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <a href={APP_URL} className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform border border-white/10 ring-4 ring-blue-600/20">
           <Zap className="w-5 h-5 fill-current" /> AVALIAR CARRO AGORA
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
