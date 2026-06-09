import { Link } from 'react-router-dom'
import { useState } from 'react';
import dadosBeneficios from '../data/Beneficios.json';

export default function Beneficios() {
  const data = dadosBeneficios || {};
  const listaBeneficios = data.beneficios || [];

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] text-[#1C2541] py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#FF5A00] tracking-widest uppercase">
            Impacto & Resultados
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-[#0B132B]">
            Benefícios Esperados
          </h2>
        </div>

        {/* Grid responsivo (Beneficios) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listaBeneficios.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#1C2541] p-6 rounded-2xl border border-slate-700/40 hover:border-[#00B4D8]/60 shadow-xl hover:shadow-[#00B4D8]/5 transition-all duration-300 group hover:-translate-y-1 cursor-default flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-[#00B4D8]/70 group-hover:text-[#00B4D8] transition-colors duration-300 mb-3">
                  // BENEFÍCIO 0{item.id}
                </div>
                <h3 className=" font-turret font-black font-bold uppercase tracking-wide text-sm md:text-base text-slate-100 mb-2 group-hover:text-white transition-colors duration-300">
                  {item.titulo}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </section>
        
        {/* Container Inferior */}
        <section className="w-full bg-[#0B132B] p-8 md:p-12 rounded-3xl border border-slate-900 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#0B132B] rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-4xl space-y-4 relative z-10">
              <span className="text-xs font-bold text-[#00B4D8] tracking-widest uppercase block">
                Encerramento Técnico
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-white">
                Considerações Finais
              </h3>
              <p className="text-slate-300 font-light leading-relaxed text-sm md:text-base pt-2">
                {data.consideracoesFinais}
              </p>
            </div>    
        </section>
      </div>
    </div>
  );
}