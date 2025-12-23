
import React from 'react';
import { 
  Car, TrendingUp, TrendingDown, ShieldCheck, BrainCircuit, 
  ArrowRight, Check, Search, Target, MapPin, 
  LayoutGrid, FileText, Megaphone, Calculator, ChevronRight,
  ShieldAlert, Zap, Star, Users, Sparkles
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const APP_URL = window.location.origin;

  const FOOTER_LINKS = [
    { brand: 'Volkswagen', model: 'gol', name: 'Preço Gol' },
    { brand: 'Honda', model: 'civic', name: 'Preço Civic' },
    { brand: 'Toyota', model: 'corolla', name: 'Preço Corolla' },
    { brand: 'Chevrolet', model: 'onix', name: 'Preço Onix' },
    { brand: 'Fiat', model: 'uno', name: 'Preço Uno' },
    { brand: 'Jeep', model: 'compass', name: 'Preço Compass' },
    { brand: 'Hyundai', model: 'hb20', name: 'Preço HB20' },
    { brand: 'Ford', model: 'ka', name: 'Preço Ka' },
    { brand: 'Renault', model: 'kwid', name: 'Preço Kwid' },
    { brand: 'Nissan', model: 'kicks', name: 'Preço Kicks' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f18] text-slate-200 selection:bg-blue-500/30 font-sans">
      {/* Navegação Sticky */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f18]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tighter uppercase">AvalIA AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-slate-400">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
            <a href="/modelos" className="hover:text-white transition-colors">Diretório</a>
          </div>
          <a href={APP_URL} className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-50 transition-all active:scale-95 shadow-lg">Começar Agora</a>
        </div>
      </nav>

      {/* Hero Section - Alta Conversão */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black mb-8 uppercase tracking-widest animate-fade-in">
            <Zap className="w-3 h-3 fill-current" /> Inteligência Regionalizada v2.5
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1] mb-8 tracking-tighter animate-fade-in-up">
            Venda pelo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">Máximo</span>.<br/> Compre pelo Justo.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Pare de perder dinheiro com a média nacional. O <strong>AvalIA AI</strong> analisa o mercado real do seu estado, anúncios ativos e a demanda regional em segundos.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
            <a href={APP_URL} className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-900/40 active:scale-95 group">
              Avaliar Veículo Grátis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <Users className="w-4 h-4" /> +12k avaliações este mês
            </div>
          </div>
        </div>
      </section>

      {/* Seção Como Funciona */}
      <section id="como-funciona" className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">Como a Mágica Acontece</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Nossa IA não apenas lê a FIPE. Ela simula o comportamento de um perito de mercado.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Scan de Mercado", 
                desc: "Vasculhamos os principais marketplaces em busca de anúncios similares ao seu na sua UF.",
                icon: Search
              },
              { 
                step: "02", 
                title: "Análise de Opcionais", 
                desc: "Couro, teto solar e blindagem mudam o preço. Nossa IA quantifica o valor exato desses itens.",
                icon: Sparkles
              },
              { 
                step: "03", 
                title: "Laudo de Liquidez", 
                desc: "Receba scripts de venda e um guia de quanto tempo o carro levará para ser vendido.",
                icon: TrendingUp
              }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-blue-500/30 transition-all group">
                <div className="text-blue-500 font-black text-4xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">{item.step}</div>
                <item.icon className="w-10 h-10 text-white mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Benefícios Regionalizados */}
      <section id="beneficios" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-full">
               Diferencial Competitivo
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Por que a média nacional (FIPE) engana você?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Um utilitário 4x4 no Mato Grosso vale muito mais que o mesmo carro no litoral paulista. O <strong>AvalIA AI</strong> entende essas nuances de oferta e procura locais.
            </p>
            
            <ul className="space-y-4">
              {[
                { t: "Filtro de Localidade por UF", d: "Ajustamos o preço baseado no IPVA e taxas locais." },
                { t: "Cálculo de Demanda Regional", d: "Saiba se seu modelo é 'mosca branca' na sua cidade." },
                { t: "Proteção contra Prejuízos", d: "Não venda por menos do que o mercado está pagando." }
              ].map((benefit, i) => (
                <li key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="bg-blue-600/20 p-2 rounded-lg h-fit"><Check className="w-5 h-5 text-blue-400" /></div>
                  <div>
                    <h4 className="font-bold text-white">{benefit.t}</h4>
                    <p className="text-xs text-slate-500">{benefit.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full"></div>
            <div className="relative bg-[#0d1525] border border-white/10 p-10 rounded-[3rem] shadow-2xl">
               <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
                      <Car className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Toyota Corolla XEi</h4>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">UF: Minas Gerais (MG)</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Liquidez Alta</p>
                    <p className="text-xs font-bold text-white">🔥 Venda em 7 dias</p>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-slate-500 text-sm font-bold">Tabela FIPE (Brasil)</span>
                    <span className="text-slate-400 font-bold line-through">R$ 102.400</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-blue-400 text-sm font-black uppercase">Preço AvalIA AI (MG)</span>
                    <span className="text-3xl font-black text-white">R$ 108.900</span>
                  </div>
                  <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                    <p className="text-emerald-400 font-black text-[10px] uppercase tracking-widest">Oportunidade</p>
                    <p className="text-white font-bold text-xs">+ R$ 6.500 de valorização regional</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Programático - Diretório Visual */}
      <section className="py-24 border-t border-white/5 bg-[#080c14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Diretório de Mercado</h2>
              <p className="text-slate-500 text-sm mt-1">Navegue pelas tendências e preços reais por modelo</p>
            </div>
            <a href="/modelos" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-blue-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all">
              Ver Todos os Modelos <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {FOOTER_LINKS.map((link) => (
              <a 
                key={link.model}
                href={`/modelo/${link.brand.toLowerCase()}/${link.model}`}
                className="group p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
              >
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Car className="w-4 h-4 text-slate-500 group-hover:text-white" />
                </div>
                <span className="text-[10px] block font-black text-slate-500 uppercase tracking-widest mb-1">{link.brand}</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Final */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="bg-slate-800 p-1.5 rounded-lg">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-black text-white tracking-tighter uppercase">AvalIA AI</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-8">
            <a href="#" className="hover:text-slate-400">Termos de Uso</a>
            <a href="#" className="hover:text-slate-400">Privacidade</a>
            <a href="#" className="hover:text-slate-400">Suporte</a>
            <a href="#" className="hover:text-slate-400">API</a>
          </div>
          
          <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2024 AvalIA AI - Tecnologia em Inteligência Automotiva Regionalizada
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
