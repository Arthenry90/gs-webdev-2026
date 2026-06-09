import { Link } from 'react-router-dom';
import { useState } from 'react';
import dadosObjetivos from '../data/Objetivos.json';

export default function Objetivos() {
  const objetivos = dadosObjetivos || {};
  const especificos = objetivos.especificicos || []; 
  const pilaresEspaciais = objetivos.economiaEspacial?.pilares || [];

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] text-[#1C2541] py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#FF5A00] tracking-widest uppercase">
            Diretrizes do Projeto
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-[#0B132B]">
            Objetivos & Alinhamento
          </h2>
        </div>
        {/* Container Superior */}
        <section className="w-full bg-[#0B132B] p-8 md:p-10 rounded-3xl border border-slate-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-3 relative z-10">
            <span className="text-xs font-bold text-[#00B4D8] tracking-widest uppercase block">
              Macro Objetivo
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-white">
              Objetivo Geral
            </h3>
            <p className="text-slate-300 font-light leading-relaxed text-sm md:text-lg">
              {objetivos.geral}
            </p>
          </div>
        </section>

        {/* Objetivo especifico */}
        <section className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {especificos.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#1C2541] p-6 rounded-2xl border border-slate-700/40 hover:border-[#00B4D8]/60 shadow-xl hover:shadow-[#00B4D8]/5 transition-all duration-300 group hover:-translate-y-1 cursor-default"
              >
                <div className="text-xs font-mono text-[#00B4D8]/70 group-hover:text-[#00B4D8] transition-colors duration-300 mb-3">
                  0{item.id}
                </div>
                <h4 className="font-turret font-black font-bold uppercase tracking-wide text-xl text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">
                  {item.titulo}
                </h4>
                <p className="text-l text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Container Inferior */}
        <section className="w-full bg-[#0B132B] rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            
            {/* Lado Esquerdo: Objetivos focados em aplicações espaciais e geologicas */}
            <div className="md:col-span-2 space-y-4">
              <span className="text-xs font-bold text-[#00B4D8] tracking-widest uppercase block">
                Alinhamento de Mercado
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-white">
                Nova Economia Espacial
              </h3>
              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base pt-2">
                {objetivos.economiaEspacial?.contexto}
              </p>
            </div>

            {/* Lado Direito: Container de Tecnologias Aplicadas */}
            <div className="space-y-4 bg-[#1C2541] p-6 rounded-2xl border border-slate-700/50">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#FF5A00] mb-2 font-mono">
                Tecnologias Aplicadas:
              </h4>
              <div className="flex flex-wrap gap-2 md:flex-col md:gap-3">
                {pilaresEspaciais.map((pilar, index) => (
                  <div 
                    key={index} 
                    className="font-turret font-black bg-[#0B132B] px-3 py-2 rounded-xl border border-slate-800 text-xs font-medium text-slate-200 shadow-sm flex items-center gap-2 transform hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
                    {pilar}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}