import { Link } from 'react-router-dom'
import { useState } from 'react';
import Card from '../components/Card'
import BotaoSocorro from '../components/BotaoSocorro'
import Mapa from '../components/Mapa'
import Footer from '../components/Footer';
import Badge from '../components/Badge';

import dadosOds from '../data/Ods.json';

export default function Home() {
  const [carregando, setCarregando] = useState(false);
  const [coords, setCoords] = useState(null);

  const [modalAberto, setModalAberto] = useState(false);
  const [odsSelecionada, setOdsSelecionada] = useState(null);

  // Função que recebe os dados do botão e atualiza o estado para a leitura do mapa
  const lidarComDisparo = (statusCarregamento, coordenadas = null) => {
    setCarregando(statusCarregamento);
    if (coordenadas) {
      setCoords(coordenadas);
    }
  };

  // Função para abrir o modal na parte das ODS
  const abrirModalOds = (ods) => {
    setOdsSelecionada(ods);
    setModalAberto(true);
  };

  const fecharModalOds = () => {
    setModalAberto(false);
    setOdsSelecionada(null);
  };


  return (
    // Imagem no topo do site
    <div className="w-full min-h-screen bg-[#0B132B]">
      <div className="relative w-full h-[550px] overflow-hidden bg-black">
        <img 
          src="/Floresta.jpg" 
          alt="Vista aérea de floresta densa com torre de observação para operações de resgate" 
          className="w-full h-285 object-fit"
        />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/50 to-transparent pointer-events-none" />
      </div>

      <main className="w-full">
        {/* Bloco 1: Introdução da nossa solução para a Global Solution */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center space-y-6">
            <h2 className="font-turret font-black text-5xl md:text-6xl font-extrabold text-[#FF5A00] tracking-tight uppercase">
              OrbitBird Rescue System
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">
              O ObrbitBird Rescue System consiste em uma plataforma inteligente de monitoramento emergencial desenvolvida para auxiliar operações de localização e resgate em áreas remotas.
            </p>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div>
            <p className="text-center text-lg md:text-xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">Sabemos que operações de resgate em regiões remotas frequentemente enfrentam limitações relacionadas à ausência de cobertura de internet e infraestrutura de comunicação convencional, como: </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-12">
            <Card
            icone="⛰️"
            titulo="Zonas Montanhosas" 
            descricao="Áreas remotas sofrem com a ausência total de infraestrutura de comunicação terrestre local, isolando vítimas e equipes de busca."
            className="text-center">
            </Card>
            <Card 
            icone="🌲" 
            titulo="Regiões Florestais"
            descricao="Florestas densas e relevos complexos bloqueiam a visão de equipes de solo, exigindo uma perspectiva aérea e inteligente de monitoramento."
            className="text-center">
            </Card>
          </div>
        </section>

        {/* Bloco 2: Breve explicação do nosso sistema */}
        <section className="relative w-full bg-white/98 py-38 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0B132B] via-[#0B132B]/50 to-[#0B132B]/0 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h3 className="text-sm font-bold text-[#00B4D8] tracking-widest uppercase mt-4">
              Tecnologia Espacial na Prática
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C2541] mb-8">
              Do Sensor IoT ao Dashboard em Milissegundos
            </h2>
            <p className="text-[#1C2541] max-w-4xl mx-auto mb-10 font-light md:text-xl">
              Nossa arquitetura descentralizada processa dados na ponta (<span className="text-[#1C2541] font-medium">Edge Computing</span>) via microcontroladores <span className="text-[#1C2541] font-medium">ESP32</span>, transmitindo alertas críticos por protocolo <span className="text-[#1C2541] font-medium">MQTT</span> leve e seguro.
            </p>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mt-10">
              {['ESP32 Node', 'MQTT Broker', 'FIWARE Context', 'Edge Processing'].map((tech) => (
                <span key={tech} className="bg-[#1C2541] text-[#EDF2F4] border border-slate-700/50 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                  ⚡ {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/50 to-[#0B132B]/0 pointer-events-none" />
        </section>
        
        {/* Bloco 3: Simulação de resgate para o usuario*/}
        <section className="w-full bg-[#0B132B] /40 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Simulador de Resgate em Tempo Real</h3>
            <p className="text-slate-400 max-w-xl mb-12 mx-auto text-sm md:text-xl font-light">Disparo automatizado de telemetria emergencial criptografada diretamente via Satélite, ignorando barreiras locais.</p>

            <BotaoSocorro onDisparar={lidarComDisparo} carregando={carregando} coords={coords}/>
            <Mapa coords={coords}/>
          </div>
        </section>

        {/* Bloco 4: Objetivos enquadrados da ODS*/}
        <section className="relative w-full bg-[#1C2541] py-20 text-center overflow-hidden border-b border-slate-900">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#0B132B]/40 to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase tracking-tight mb-2">
              Objetivos de Desenvolvimento Sustentável (ODS)
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-12 text-xs md:text-sm font-light">
              Clique nas pílulas abaixo para entender como o OrbitBird se engloba nos objetivos estabelecidos pela ONU:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">  
              {dadosOds.map((ods) => (
                <Badge 
                  key={ods.id} 
                  texto={ods.texto}
                  hoverText={ods.hoverText}
                  hoverBorder={ods.hoverBorder}
                  hoverShadow={ods.hoverShadow}
                  onClick={() => abrirModalOds(ods)}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
      
      {/* Modal para ter uma vizualização melhor sobre a ODS mencionada*/}
      {modalAberto && odsSelecionada && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6 animate-fadeIn cursor-pointer"
          onClick={fecharModalOds}
        >
          <div 
            className={`${odsSelecionada.modalBg} p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl max-w-xl space-y-5 relative animate-scaleIn cursor-default text-white`}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={fecharModalOds}
              className="absolute top-4 right-5 text-slate-500 hover:text-white text-xl cursor-pointer select-none"
            >
              &times;
            </button>
            <div className="text-xs font-mono uppercase tracking-widest text-white">
              Diretriz da ONU • Global Solution
            </div>
            <h2 className="font-turret font-black text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
              {odsSelecionada.texto}
            </h2>
            <div className="w-24 h-1.5 bg-white rounded-full shadow-sm" />
            <p className="text-white text-sm md:text-base font-light leading-relaxed pt-2">
              {odsSelecionada.descricao}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}