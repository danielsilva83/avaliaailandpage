import React from 'react';
import { 
  Car, TrendingUp, ShieldCheck, BrainCircuit, 
  ArrowRight, Check, Search, MessageSquare, 
  Gauge, Zap, Instagram, Twitter,
  Star, Clock, Shield, Sparkles
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const APP_URL = "https://www.avaliaaiautomoveis.com";

  return (
    <div className="min-h-screen text-slate-200 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-900/20">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">AvalIA AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#precos" className="hover:text-white transition-colors">Preços</a>
          </div>
          <a 
            href={APP_URL}
            className="bg-white text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-50 transition-all active:scale-95"
          >
            Acessar App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest">
            <Zap className="w-3 h-3 fill-current" /> IA de busca avançada ativada
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] mb-8">
            Avalie Carros como um <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Especialista</span> em Segundos.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experimente a tecnologia que está transformando o mercado. O AvalIA AI cruza dados da FIPE com anúncios reais para maximizar seu lucro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={APP_URL}
              className="w-full sm:w-auto px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all animate-glow shadow-xl shadow-blue-900/20 active:scale-95"
            >
              Experimentar Agora Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="text-sm text-slate-500 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500" /> 2 consultas de experiência inclusas
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-600 uppercase tracking-widest mb-6">Integração com as Maiores Bases de Dados</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 opacity-40 grayscale contrast-125">
             <span className="text-2xl font-bold italic tracking-tighter text-white">FIPE</span>
             <span className="text-2xl font-bold text-white">WEBMOTORS</span>
             <span className="text-2xl font-bold text-white">OLX</span>
             <span className="text-2xl font-bold text-white">ICARROS</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="funcionalidades" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Tecnologia que Gera Lucro</h2>
          <p className="text-slate-400">Potencialize seus negócios com inteligência artificial inovadora.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group">
            <div className="bg-blue-600/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Pesquisa em Tempo Real</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Não usamos apenas tabelas frias. Buscamos anúncios reais no Webmotors e OLX hoje.</p>
          </div>

          <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group">
            <div className="bg-emerald-600/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Inteligência FIPE</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Saiba exatamente o quanto o mercado está pagando acima ou abaixo da FIPE para cada modelo.</p>
          </div>

          <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group">
            <div className="bg-purple-600/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Scripts de Venda</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Argumentos prontos baseados nos pontos fortes e fracos do veículo para fechar o negócio.</p>
          </div>

          <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group">
            <div className="bg-orange-600/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Gauge className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Check-up de Liquidez</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Descubra quais carros são "cheque em branco" e quais vão ficar meses parados no pátio.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-24 bg-white/5 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Da entrada à oferta final em 60 segundos.</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Preencha o Formulário</h4>
                    <p className="text-slate-400">Insira modelo, km e estado. O sistema entende até os opcionais mais complexos.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">O AvalIA processa o Mercado</h4>
                    <p className="text-slate-400">Nossa IA vasculha as maiores plataformas de venda do Brasil em busca de comparativos.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Relatório Estratégico</h4>
                    <p className="text-slate-400">Você recebe o preço ideal, pontos críticos e scripts para copiar e colar no WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative glass p-4 rounded-[2rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                  <div className="bg-slate-900 rounded-[1.5rem] p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center"><Car className="text-white" /></div>
                       <div>
                          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Resultado da Análise</p>
                          <p className="text-white font-bold">Civic Touring 1.5 Turbo</p>
                       </div>
                    </div>
                    <div className="space-y-4">
                       <div className="h-4 bg-white/5 rounded w-3/4"></div>
                       <div className="h-4 bg-white/5 rounded w-full"></div>
                       <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="bg-blue-600/20 p-4 rounded-xl border border-blue-500/20">
                             <p className="text-[10px] text-blue-400 font-bold uppercase">Mínimo Sugerido</p>
                             <p className="text-lg font-bold text-white">R$ 142.500</p>
                          </div>
                          <div className="bg-emerald-600/20 p-4 rounded-xl border border-emerald-500/20">
                             <p className="text-[10px] text-emerald-400 font-bold uppercase">Liquidez</p>
                             <p className="text-lg font-bold text-white">ALTÍSSIMA</p>
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Investimento com Retorno Imediato</h2>
            <p className="text-slate-400">Potencialize seus lucros com a ferramenta definitiva.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-5xl mx-auto">
            
            {/* Experience Section */}
            <div className="max-w-xs text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold mb-4 uppercase tracking-widest">
                Experimente o Futuro
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Veja a Inovação em Ação</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Incentivamos você a experimentar nossa IA. Oferecemos <strong>2 consultas gratuitas</strong> para que você sinta a precisão dos dados antes de se tornar PRO.
              </p>
              <a href={APP_URL} className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Testar Agora <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* PRO Plan - Promotional */}
            <div className="flex-1 w-full max-w-md bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/40 relative transform hover:scale-[1.02] transition-transform z-20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                OFERTA DE LANÇAMENTO
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">Plano PRO Vitalício</h3>
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
              </div>
              <p className="text-blue-100 text-sm mb-6 font-medium">Pague uma vez, use para sempre.</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">R$ 47,90</span>
                  <span className="text-blue-200/60 line-through text-sm font-bold">R$ 97,00</span>
                </div>
                <p className="text-[10px] text-blue-200 font-bold mt-2 flex items-center gap-1 uppercase tracking-tighter">
                  <Clock className="w-3 h-3" /> Valor único - Sem mensalidades
                </p>
              </div>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-emerald-300" /> Consultas Ilimitadas
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-emerald-300" /> Scripts de Negociação Pro
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <Check className="w-4 h-4 text-emerald-300" /> Suporte Prioritário
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <Shield className="w-4 h-4 text-emerald-300" /> Acesso Vitalício (Garantido agora)
                </li>
              </ul>

              <a 
                href={APP_URL}
                className="w-full py-5 bg-white text-blue-900 rounded-2xl font-black text-center shadow-lg hover:shadow-2xl transition-all active:scale-95 block"
              >
                EXPERIMENTE E ASSINE 
              </a>

              <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/10">
                <p className="text-[12px] leading-snug text-blue-50 text-center font-medium">
                  <strong>ASSINE COM PIX de forma segura direto no APP (sem necessidade de cartão de credito)...
                    </strong>
                    <strong>Atenção:</strong> Esta é uma promoção de lançamento. Após este período, o plano passará a ser <strong>ANUAL</strong> pelo mesmo valor. Garanta sua vaga permanente agora!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 relative z-10 leading-tight">
            Pronto para nunca mais perder um negócio?
          </h2>
          <p className="text-slate-400 text-lg mb-12 relative z-10">
            Junte-se a milhares de negociadores que já estão usando a AvalIA AI para dominar o mercado local.
          </p>
          
          <a 
            href={APP_URL}
            className="inline-flex items-center gap-3 px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-2xl active:scale-95 relative z-10"
          >
            Acessar Agora
            <ArrowRight className="w-6 h-6" />
          </a>
          
          <div className="mt-8 flex justify-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest relative z-10">
            <span className="flex items-center gap-1"><Check className="text-emerald-500 w-4 h-4" /> 2 Testes Grátis</span>
            <span className="flex items-center gap-1"><Check className="text-emerald-500 w-4 h-4" /> Dados em Tempo Real</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-blue-600" />
            <span className="font-display font-bold text-white">AvalIA AI Automóveis</span>
          </div>
          
          <p className="text-slate-500 text-sm text-center">
            © 2024 AvalIA AI. Desenvolvido para impulsionar seus resultados.
          </p>

          <div className="flex gap-4">
             <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5" /></a>
             <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;