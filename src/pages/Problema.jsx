import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function Problema() {
  return (
    <div className="w-full min-h-screen text-[#0B132B] pt-8">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* ================= BLOCO 1: O DESAFIO (TEXTO ESQUERDA / IMG DIREITA) ================= */}
        <section className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          
          {/* Caixa de Texto/Conteúdo */}
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-xs font-bold text-[#FF5A00] tracking-widest uppercase">
              Cenário Crítico
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight uppercase">
              O Futuro do Resgate em Áreas Remotas
            </h2>
            <div className="text-[#0B132B] font-light leading-relaxed space-y-4 text-sm md:text-xl">
              <p>
                As operações de resgate em áreas isoladas, zonas florestais e regiões montanhosas apresentam desafios significativos devido às condições do terreno e à dificuldade de acesso. Em muitos casos, a ausência de estradas, a vegetação densa, os desníveis acentuados e as condições climáticas adversas dificultam a localização e o atendimento das vítimas. Além disso, a comunicação pode ser limitada ou inexistente, comprometendo a coordenação entre as equipes de emergência e aumentando o tempo necessário para a execução do resgate.
              </p>
            </div>
          </div>

          {/* Caixa da Imagem de Evidência */}
          <div className="w-full md:w-1/2 md:mt-10">
            <a 
            href="https://www.terra.com.br/planeta/homem-e-resgatado-apos-ficar-12-dias-perdido-na-floresta-amazonica%2Cb83b90ecb872e889142f77dc478be63f48ynpj6w.html?utm_source=chatgpt.com"
            target='_blank'
            rel='noopener noreferrer'
            className="group relative block w-full h-[350px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-[#1C2541]/20">
            
            <img 
              src="/Resgate_floresta.webp" 
              alt="Resgate de um homem na Floresta Amazonica" 
              className="w-full h-full object-cover opacity-90 w-full h-[350px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-[#1C2541]/20"
            />
            <div className="absolute inset-0 bg-[#0B132B]/70 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-2xl">🔗</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#00B4D8]">
                  Ler Notícia Completa
                </span>
              </div>
            </a>
            <p className="text-xs text-gray-700 mt-3 font-light italic pl-2">
              *Resgate de um homem na Floresta Amazonica após 12 dias.
            </p>
            
          </div>

        </section>

        {/* ================= BLOCO 2: A REALIDADE OPERACIONAL (IMG ESQUERDA / 2 TEXTOS DIREITA) ================= */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
          
          {/* Caixas de Texto/Conteúdo (Duas divisões verticais na direita) */}
          <div className="w-full md:w-1/2 space-y-6">
            
            {/* Bloco de Texto Superior */}
            <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-[#00B4D8]">
                Logística Sob Pressão
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed ">
                Equipes de socorro em solo frequentemente operam às cegas devido ao bloqueio visual provocado por copas de árvores fechadas. A falta de coordenadas geográficas precisas força os agentes a cobrirem perímetros massivos de forma ineficiente.
              </p>
            </div>

            {/* Bloco de Texto Inferior */}
            <div className="bg-[#1C2541] border border-slate-800 p-6 rounded-2xl space-y-3">
              <h3 className="text-base font-bold text-white uppercase tracking-wider text-[#00B4D8]">
                A Solução pelo Espaço
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                O primeiro parágrafo da nossa proposta resolve esse gargalo: conectar a telemetria à computação de borda descentralizada. Ignorando as barreiras físicas locais, os alertas ganham uma rota aérea direta até os controladores, otimizando o envio de frotas e aeronaves de suporte.
              </p>
            </div>

          </div>

          {/* Caixa da Imagem de Evidência */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-[350px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-[#1C2541]/20">
              <img 
                src="/Floresta_amazonica.jpg" 
                alt="Imagem da floresta amazonica" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}