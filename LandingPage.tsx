
import React from 'react';
import { 
  Car, TrendingUp, TrendingDown, ShieldCheck, BrainCircuit, 
  ArrowRight, Check, Search, Target, MapPin, 
  LayoutGrid, FileText, Megaphone, Calculator, ChevronRight,
  ShieldAlert, Zap, Star, Users, Sparkles, MessageSquare, 
  ShieldQuestion, BarChart3, Globe2
} from 'lucide-react';

const LandingPage: React.FC = () => {
  // Redireciona para a raiz onde o App principal está hospedado
  const APP_URL = "/";

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

  const FAQS = [
    { q: "O AvalIA AI substitui a Tabela FIPE?", a: "Não, ele complementa. A FIPE é uma média nacional, enquanto nós entregamos o preço real de transação do SEU estado hoje." },
    { q: "Como vocês sabem o preço de cada estado?", a: "Nossa IA faz um 'scrapping' em tempo real de anúncios ativos e cruzamos com dados históricos de venda em cada região do Brasil." },
    { q: "Posso usar para motos e caminhões?", a: "Sim! Nossa inteligência está treinada para toda a base de dados automotiva nacional." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f18] text-slate-200 selection:bg-blue-500/30 font-sans scroll-smooth">
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
            <a href="#comparativo" className="hover:text-white transition-colors">Comparativo</a>
            <a href="/modelos" className="hover:text-white transition-colors">Diretório</a>
          </div>
          <a href={APP_URL} className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-50 transition-all active:scale-95 shadow-lg">Entrar no App</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black mb-8 uppercase tracking-widest animate-fade-in">
            <Globe2 className="w-3 h-3" /> Inteligência Regionalizada v2.5
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1] mb-8 tracking-tighter">
            Venda pelo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">Máximo</span>.<br/> Compre pelo Justo.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Pare de perder dinheiro baseando-se em médias nacionais. O <strong>AvalIA AI</strong> analisa o mercado real da sua região, anúncios ativos e demanda estadual em segundos.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href={APP_URL} className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-900/40 active:scale-95 group">
              Avaliar Veículo Agora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#0a0f18] flex items-center justify-center text-[10px] font-bold">U{i}</div>)}
              </div>
              <span className="text-xs font-bold text-slate-400 tracking-tight">Usado por +12.000 lojistas e particulares</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Comparativo Visual */}
      <section id="comparativo" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
              A FIPE mostra o passado.<br/>
              <span className="text-blue-500">Nós mostramos o agora.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Um utilitário 4x4 no Centro-Oeste vale mais que no litoral. O AvalIA AI detecta essas nuances geográficas que a Tabela FIPE ignora.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <BarChart3 className="w-6 h-6 text-blue-400 mb-2" />
                  <h4 className="font-bold text-sm">Dados Vivos</h4>
                  <p className="text-[10px] text-slate-500">Atualizado a cada 24h</p>
               </div>
               <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <Target className="w-6 h-6 text-emerald-400 mb-2" />
                  <h4 className="font-bold text-sm">Precisão de 98%</h4>
                  <p className="text-[10px] text-slate-500">Foco em fechamento</p>
               </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-[#0d1525] border border-white/10 p-8 rounded-[3rem] shadow-2xl">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                    <Car className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Jeep Compass Limited</h4>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Estado: São Paulo (SP)</p>
                  </div>
               </div>
               
               <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <div className="space-y-1">
                      <span className="text-slate-500 text-[10px] font-black uppercase">Média Nacional (FIPE)</span>
                      <p className="text-slate-400 font-bold line-through">R$ 142.900</p>
                    </div>
                    <span className="text-slate-600 text-[10px] font-bold italic">Desatualizado</span>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-blue-400 text-[10px] font-black uppercase">Preço AvalIA AI (Real SP)</span>
                      <p className="text-4xl font-black text-white tracking-tighter">R$ 151.200</p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black">LUCRO: + R$ 8.300</div>
                  </div>
               </div>

               <div className="mt-8 p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center gap-4">
                  <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
                  <p className="text-xs text-blue-200">Nossa IA detectou que este modelo tem <strong>alta procura</strong> em SP nesta semana.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Dúvidas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <h4 className="font-bold text-white mb-2 flex items-center gap-3">
                  <ShieldQuestion className="w-5 h-5 text-blue-500" /> {f.q}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Directory Footer */}
      <section className="py-24 border-t border-white/5 bg-[#080c14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Guia de Preços por Modelo</h2>
              <p className="text-slate-500 text-sm mt-1">Dados reais de mercado para os modelos mais buscados</p>
            </div>
            <a href="/modelos" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-blue-400 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/10 transition-all">
              Ver Diretório Completo <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {FOOTER_LINKS.map((link) => (
              <a 
                key={link.model}
                href={`/modelo/${link.brand.toLowerCase()}/${link.model}`}
                className="group p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
              >
                <span className="text-[10px] block font-black text-slate-500 uppercase tracking-widest mb-1">{link.brand}</span>
                <span className="text-sm font-bold text-slate-200 group-hover:text-white">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Final */}
      <footer className="py-20 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-slate-800 p-1.5 rounded-lg">
            <Car className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-black text-white tracking-tighter uppercase">AvalIA AI</span>
        </div>
        <div className="flex justify-center gap-8 mb-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <a href="#" className="hover:text-slate-400">Privacidade</a>
          <a href="#" className="hover:text-slate-400">Termos</a>
          <a href="mailto:contato@avaliaai.com" className="hover:text-slate-400">Contato</a>
        </div>
        <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.3em]">
          © 2024 AvalIA AI - Tecnologia em Inteligência Automotiva Regionalizada
        </p>
      </footer>
      
      {/* Botão Flutuante Mobile CTA */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <a href={APP_URL} className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
           <Zap className="w-5 h-5 fill-current" /> AVALIAR MEU CARRO AGORA
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
