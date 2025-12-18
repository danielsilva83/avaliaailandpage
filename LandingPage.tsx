
import React from 'react';
import { 
  Car, TrendingUp, ShieldCheck, BrainCircuit, 
  ArrowRight, Check, Search, MessageSquare, 
  Gauge, Zap, ChevronRight, HelpCircle,
  Star, Clock, Shield, Sparkles, ExternalLink,
  Instagram, Twitter
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
      q: "Como o AvalIA AI calcula o preço real do carro?",
      a: "Nossa IA cruza os dados oficiais da Tabela FIPE com anúncios ativos nos maiores portais do Brasil, descontando margens de negociação e considerando quilometragem e estado de conservação."
    },
    {
      q: "O AvalIA AI substitui a Tabela FIPE?",
      a: "Não, ele a complementa. A FIPE é uma média teórica; nós entregamos o preço de transação real, o que está acontecendo no mercado agora."
    },
    {
      q: "Posso avaliar motos e caminhões?",
      a: "Sim! Nossa IA está treinada para avaliar carros, motos e veículos comerciais com a mesma precisão."
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
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#modelos" className="hover:text-white transition-colors">Modelos</a>
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
            <Sparkles className="w-3 h-3 fill-current" /> 2 Avaliações Gratuitas para novos usuários
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
            Saiba o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-emerald-400">Preço Real</span> de Mercado do seu Carro.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Não perca dinheiro na venda ou pague caro na compra. O <strong>AvalIA AI</strong> é a única inteligência que cruza a <strong>Tabela FIPE</strong> com anúncios reais em tempo real.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={APP_URL}
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/40 active:scale-95 group"
            >
              Consultar Valor do Carro Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Shield className="w-4 h-4" /> Sem necessidade de cadastro inicial
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="funcionalidades" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A ferramenta definitiva para avaliação de carros</h2>
          <p className="text-slate-400 text-lg">Por que o AvalIA AI é mais preciso que a Tabela FIPE sozinha?</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Search, color: "blue", title: "Busca em Tempo Real", desc: "Analisamos anúncios ativos na Webmotors, OLX e iCarros para ver o preço praticado hoje." },
            { icon: TrendingUp, color: "emerald", title: "Gap FIPE x Mercado", desc: "Entenda por que alguns carros vendem acima ou abaixo da tabela oficial." },
            { icon: MessageSquare, color: "purple", title: "Scripts de Negociação", desc: "Receba argumentos baseados em dados para convencer o comprador ou vendedor." },
            { icon: Gauge, color: "orange", title: "Índice de Liquidez", desc: "Saiba se o veículo é 'moeda de troca' ou se vai ficar parado no seu estoque." }
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

      {/* Topic Clusters Section (SEO GOLD) */}
      <section id="modelos" className="py-20 bg-blue-600/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Zap className="text-yellow-400 w-5 h-5" /> 
            Avaliações de Carros mais buscadas
          </h2>
          <div className="flex flex-wrap gap-3">
            {popularModels.map((model, idx) => (
              <a 
                key={idx} 
                href={APP_URL} 
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 hover:border-blue-500 hover:text-white transition-all"
              >
                Preço {model}
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500 italic">
            *Dados baseados em consultas reais processadas por nossa Inteligência Artificial nos últimos 30 dias.
          </p>
        </div>
      </section>

      {/* FAQ Section (SEO Snippets) */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Dúvidas Frequentes sobre Preço de Carros</h2>
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

      {/* Pricing Section */}
      <section id="precos" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">O investimento que se paga na primeira negociação</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
              {/* Plano Grátis */}
              <div className="flex-1 bg-white/5 p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 text-left">Test Drive</h3>
                  <p className="text-slate-400 text-sm mb-6 text-left">Ideal para quem está apenas pesquisando.</p>
                  <div className="text-4xl font-black text-white mb-8 text-left">Grátis</div>
                  <ul className="text-left space-y-4 text-sm text-slate-300 mb-8">
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-emerald-500" /> 2 Consultas Completas</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-emerald-500" /> Comparativo FIPE x Mercado</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-emerald-500" /> Acesso à IA Gemini 3</li>
                  </ul>
                </div>
                <a href={APP_URL} className="w-full py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-all">Começar Agora</a>
              </div>

              {/* Plano PRO */}
              <div className="flex-1 bg-blue-600 p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/40 relative transform md:scale-105 z-10 flex flex-col justify-between border-2 border-blue-400">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Oferta de Lançamento</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 text-left">PRO Vitalício</h3>
                  <p className="text-blue-100 text-sm mb-6 text-left">Para quem faz negócios de verdade.</p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-5xl font-black text-white">R$ 47,90</span>
                    <span className="text-blue-200 line-through text-sm">R$ 97,00</span>
                  </div>
                  <ul className="text-left space-y-4 text-sm text-blue-50 mb-8">
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-300" /> Consultas Ilimitadas</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-300" /> Scripts de Negociação Elite</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-300" /> Análise de Liquidez Detalhada</li>
                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-yellow-300" /> Sem Mensalidade (Pagamento Único)</li>
                  </ul>
                </div>
                <a href={APP_URL} className="w-full py-4 bg-white text-blue-900 rounded-xl font-bold shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 fill-current" /> Ativar Acesso Vitalício
                </a>
              </div>
            </div>
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
            A inteligência artificial que está transformando a forma como o brasileiro entende o <strong>valor do carro</strong>. Use dados, não apenas tabelas.
          </p>
          <div className="flex justify-center gap-6 mb-10">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
          <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
            © 2024 AvalIA AI Automóveis - Tecnologia de Precisão Automotiva
          </p>
        </div>
      </footer>
    </div>
    
  );
};

export default LandingPage;
