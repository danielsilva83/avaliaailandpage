
import React from 'react';
import { 
  Car, TrendingUp, ShieldCheck, ArrowRight, Check, Target, 
  ChevronRight, Zap, Users, Globe2, ShieldQuestion, 
  BarChart3, Sparkles, MapPin, Search, Star, ExternalLink,
  ShieldAlert, Calculator
} from 'lucide-react';

const LandingPage: React.FC = () => {
  // URL OFICIAL DO APP PARA REDIRECIONAMENTO ABSOLUTO
  const APP_URL = "https://www.avaliaaiautomoveis.com";

  // SEO Programático: Lista Expandida para Cobrir o Top 30 do Mercado
  const DIRECTORY_MODELS = [
    { brand: 'Volkswagen', model: 'gol', name: 'Preço Gol' },
    { brand: 'Honda', model: 'civic', name: 'Preço Civic' },
    { brand: 'Toyota', model: 'corolla', name: 'Preço Corolla' },
    { brand: 'Chevrolet', model: 'onix', name: 'Preço Onix' },
    { brand: 'Fiat', model: 'uno', name: 'Preço Uno' },
    { brand: 'Jeep', model: 'compass', name: 'Preço Compass' },
    { brand: 'Hyundai', model: 'hb20', name: 'Preço HB20' },
    { brand: 'Ford', model: 'ka', name: 'Preço Ka' },
    { brand: 'Renault', model: 'kwid', name: 'Preço Kwid' },
    { brand: 'Nissan', model: 'kicks', name: 'Preço Kicks' },
    { brand: 'Toyota', model: 'hilux', name: 'Preço Hilux' },
    { brand: 'Mitsubishi', model: 'l200', name: 'Preço L200' },
    { brand: 'BMW', model: '320i', name: 'Preço BMW 320i' },
    { brand: 'Mercedes', model: 'c180', name: 'Preço C180' },
    { brand: 'Audi', model: 'a3', name: 'Preço Audi A3' },
    { brand: 'Fiat', model: 'strada', name: 'Preço Strada' },
    { brand: 'Jeep', model: 'renegade', name: 'Preço Renegade' },
    { brand: 'Volkswagen', model: 'polo', name: 'Preço Polo' },
    { brand: 'Chevrolet', model: 'tracker', name: 'Preço Tracker' },
    { brand: 'Honda', model: 'hr-v', name: 'Preço HR-V' }
  ];

  const REGIONS = [
    { uf: 'SP', name: 'São Paulo' },
    { uf: 'RJ', name: 'Rio de Janeiro' },
    { uf: 'MG', name: 'Minas Gerais' },
    { uf: 'PR', name: 'Paraná' },
    { uf: 'RS', name: 'Rio Grande do Sul' },
    { uf: 'SC', name: 'Santa Catarina' },
    { uf: 'GO', name: 'Goiás' },
    { uf: 'BA', name: 'Bahia' },
    { uf: 'DF', name: 'Distrito Federal' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f18] text-slate-200 selection:bg-blue-500/30 font-sans scroll-smooth">
      {/* Dynamic Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f18]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tighter uppercase">AvalIA AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="#ferramenta" className="hover:text-white transition-colors">A Ferramenta</a>
            <a href="#diretorio" className="hover:text-white transition-colors">Preços por Modelo</a>
            <a href="#regioes" className="hover:text-white transition-colors">Análise Regional</a>
          </div>
          <a href={APP_URL} className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-xs font-black hover:bg-blue-50 transition-all active:scale-95 shadow-lg shadow-white/5 uppercase tracking-wider">Entrar no App</a>
        </div>
      </nav>

      {/* Hero with Glassmorphism */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black mb-8 uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> Inteligência de Mercado Regionalizada
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            Venda rápido.<br/> Venda pelo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">Preço Certo</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nossa IA vasculha marketplaces em tempo real para entregar o valor de transação exato na sua cidade. Esqueça médias nacionais genéricas.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href={APP_URL} className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-blue-900/40 active:scale-95 group">
              Avaliar Agora Grátis <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-xs font-bold text-slate-300">+120 mil consultas realizadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Principal de SEO: Diretório de Modelos */}
      <section id="diretorio" className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">Diretório Nacional de Preços</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm">Acesse a análise detalhada de depreciação, liquidez e valor real de mercado para os modelos mais buscados do Brasil.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {DIRECTORY_MODELS.map((car) => (
              <a 
                key={car.model}
                href={`${APP_URL}/modelo/${car.brand.toLowerCase()}/${car.model}`}
                className="group p-5 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-blue-600 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 group-hover:text-blue-200">{car.brand}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white group-hover:text-white">{car.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={`${APP_URL}/diretorio`} className="inline-flex items-center gap-2 text-xs font-black text-blue-400 uppercase tracking-widest hover:text-blue-300 transition-colors">
              Explorar Todos os 1.500 Modelos Disponíveis <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* SEO Regional: Captura por Estado */}
      <section id="regioes" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/40 p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Globe2 className="w-40 h-40 text-blue-400" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">Inteligência Regional Ativa</h3>
              <p className="text-slate-400 mb-10 max-w-xl text-sm leading-relaxed">Nossa IA detecta automaticamente a demanda local. Em Santa Catarina, um veículo pode valer até 8% mais do que no Mato Grosso. Nós calculamos essa diferença para você.</p>
              
              <div className="flex flex-wrap gap-3">
                {REGIONS.map((reg) => (
                  <div key={reg.uf} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-slate-400">
                    <MapPin className="w-3 h-3 text-emerald-500" /> Preço de Carros em {reg.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ de Autoridade */}
      <section className="py-24 bg-[#080c14]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter text-center mb-16">Por que confiar no AvalIA AI?</h2>
          <div className="grid gap-6">
            <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[2rem] flex gap-6 items-start">
              <div className="bg-blue-600/20 p-3 rounded-2xl"><Calculator className="w-6 h-6 text-blue-400" /></div>
              <div>
                <h4 className="font-bold text-white mb-2">FIPE é apenas o começo</h4>
                <p className="text-xs text-slate-500 leading-relaxed">A Tabela FIPE é uma média matemática. O AvalIA AI é um motor de busca que entende a escassez de modelos específicos em cada região, entregando o preço de "transação real".</p>
              </div>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[2rem] flex gap-6 items-start">
              <div className="bg-emerald-600/20 p-3 rounded-2xl"><ShieldAlert className="w-6 h-6 text-emerald-400" /></div>
              <div>
                <h4 className="font-bold text-white mb-2">Proteção contra Golpes</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Preços muito abaixo do indicado pela nossa IA geralmente escondem problemas como leilão ou sinistro. Use nossa análise para identificar ofertas suspeitas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Final */}
      <footer className="py-20 border-t border-white/5 bg-[#0a0f18] text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-slate-800 p-2 rounded-xl">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase">AvalIA AI</span>
        </div>
        <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          © 2024 AvalIA AI Automóveis - Dados Regionais em Tempo Real
        </p>
        <div className="flex justify-center gap-8 text-[10px] font-black uppercase text-slate-500 tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="mailto:contato@avaliaaiautomoveis.com" className="hover:text-white transition-colors">Contato</a>
        </div>
      </footer>
      
      {/* Botão Flutuante Mobile (Alta Conversão) */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <a href={APP_URL} className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform border border-white/10 ring-4 ring-blue-600/20">
           <Zap className="w-5 h-5 fill-current" /> AVALIAR CARRO AGORA
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
