
import React from 'react';
import { 
  Car, TrendingUp, ShieldCheck, BrainCircuit, 
  ArrowRight, Check, Search, MessageSquare, 
  Gauge, Zap, ChevronRight, HelpCircle,
  Star, Clock, Shield, Sparkles, ExternalLink,
  Instagram, Twitter, MapPin, Target, Globe
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const APP_URL = "https://www.avaliaaiautomoveis.com";

  const popularModels = [
    "Toyota Corolla", "Honda Civic", "Chevrolet Onix", 
    "VW Gol", "Fiat Strada", "Hyundai HB20", 
    "Jeep Compass", "Toyota Hilux"
  ];

  const faqs = [
    {
      q: "Por que a avaliação regional é importante?",
      a: "Um carro em São Paulo tem uma base de preços diferente de um no Acre. Frete, impostos estaduais (IPVA) e a demanda regional influenciam diretamente no valor de revenda. O AvalIA AI é o único que considera isso."
    },
    {
      q: "Como o AvalIA AI calcula o preço real do carro?",
      a: "Nossa IA cruza os dados oficiais da Tabela FIPE com anúncios ativos nos maiores portais do Brasil da sua região, descontando margens de negociação e considerando quilometragem."
    },
    {
      q: "Posso avaliar qualquer estado do Brasil?",
      a: "Sim! Ao iniciar a pesquisa, você seleciona a UF (Estado) desejada e nossa IA ajusta o motor de busca para o mercado local daquela região específica."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f18] text-slate-200 selection:bg-blue-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f18]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-900/20">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">AvalIA AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#regional" className="hover:text-white transition-colors">Precisão Regional</a>
            <a href="#precos" className="hover:text-white transition-colors">Preços</a>
          </div>
          <a 
            href={APP_URL}
            className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-50 transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            Acessar App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest animate-fade-in">
            <MapPin className="w-3 h-3 fill-current" /> Agora com Inteligência por Estado (UF)
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
            O preço real do seu carro, na <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-emerald-400">sua região</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            A Tabela FIPE é uma média nacional teórica. O <strong>AvalIA AI</strong> é a realidade do mercado local. Avalie seu veículo considerando a economia e os anúncios do seu estado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={APP_URL}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/40 active:scale-95 group"
            >
              Começar Avaliação Regional
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Regional Precision Section */}
      <section id="regional" className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Por que a Tabela FIPE sozinha não basta?</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Você sabia que um <strong>SUV seminovo</strong> pode valer até 12% mais em Santa Catarina do que no Rio de Janeiro? Fatores como a malha rodoviária, impostos locais e preferência regional ditam o preço real de transação.
              </p>
              <ul className="space-y-4">
                {[
                  "Filtro por anúncios reais da sua UF",
                  "Cálculo de IPVA e taxas estaduais",
                  "Análise de liquidez regional (Giro de Estoque)",
                  "Scripts de venda adaptados ao público local"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-[#0d1525] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">SP</div>
                       <div className="text-sm font-bold text-white">Mercado São Paulo</div>
                    </div>
                    <div className="text-blue-400 font-mono font-bold">R$ 84.500</div>
                 </div>
                 <div className="h-px bg-white/5 mb-8"></div>
                 <div className="flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">AM</div>
                       <div className="text-sm font-bold text-white">Mercado Amazonas</div>
                    </div>
                    <div className="text-slate-400 font-mono font-bold">R$ 91.200</div>
                 </div>
                 <p className="mt-8 text-center text-xs text-slate-500 uppercase tracking-widest font-bold">Diferença Real de Mercado Detectada pela IA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="funcionalidades" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A tecnologia por trás do AvalIA AI</h2>
          <p className="text-slate-400 text-lg">Unimos dados nacionais com visão local.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Search, color: "blue", title: "Busca Regionalizada", desc: "Varremos OLX, Webmotors e portais locais focando na sua UF para encontrar comparativos reais." },
            { icon: TrendingUp, color: "emerald", title: "Análise de Gap", desc: "Descubra se o seu carro é valorizado na sua região ou se a oferta está saturada." },
            { icon: BrainCircuit, color: "purple", title: "IA Generativa Gemini", desc: "Nossa IA interpreta os dados de mercado e cria uma estratégia de venda única para você." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.08] transition-all group">
              <div className={`bg-${item.color}-600/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-7 h-7 text-${item.color}-400`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Tire suas dúvidas</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-500" />
                {faq.q}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Car className="w-6 h-6 text-blue-500" />
            <span className="text-2xl font-bold text-white tracking-tight">AvalIA AI</span>
          </div>
          <p className="text-slate-500 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
            A ferramenta que trouxe a <strong>inteligência geográfica</strong> para a palma da sua mão. Venda melhor, compre com consciência.
          </p>
          <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
            © 2024 AvalIA AI Automóveis - Inteligência Geográfica Automotiva
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
