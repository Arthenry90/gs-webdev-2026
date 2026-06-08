import { useState } from "react";
import dadosJson from '../data/Tecnologias.json'

export default function Tecnologia() {
    const listaTecnologias = dadosJson || [];
    const [indexMeio, setIndexMeio] = useState(1);

    const idxEsquerda = (indexMeio - 1 + listaTecnologias.length) % listaTecnologias.length;
    const idxDireita = (indexMeio + 1) % listaTecnologias.length;

    const indicesVisiveis = [idxEsquerda, indexMeio, idxDireita];

    const techAtiva = listaTecnologias[indexMeio];

    const voltarTech = () => {
    setIndexMeio((atual) => (atual - 1 + listaTecnologias.length) % listaTecnologias.length);
    };

    const avancarTech = () => {
    setIndexMeio((atual) => (atual + 1) % listaTecnologias.length);
    };

    return (
        <div className="w-full min-h-screen bg-[#1C2541] text-[#EDF2F4] py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="md:text-5xl font-extrabold tracking-tight uppercase text-center bg-gradient-to-r from-white to-[#00B4D8] bg-clip-text text-transparent mb-12">
                Nossas Tecnologias
                </h2>
                {/* Container de Tecnologias */}
                <div className="w-full flex items-center justify-between bg-[#0B132B] p-8 rounded-3xl border border-slate-800/80 shadow-2xl">
                    {/* Seta Esquerda */}
                    <button onClick={voltarTech}
                    className="p-2 bg-transparent text-slate-400 hover:text-[#00B4D8] transition-all duration-300 active:scale-75 select-none">
                        <div className="w-0 h-0 border-t-12 border-t-transparent border-b-12 border-b-transparent border-r-[22px] border-r-current" />
                    </button>
                    {/* Centro: Espaço reservado para os 3 Cards Alternados */}
                    <div className="flex-1 flex gap-6 justify-center mx-6">
                        {indicesVisiveis.map((idDaLista) => {
                            const tech = listaTecnologias[idDaLista];
                            const estaNoMeio = idDaLista === indexMeio;
                            if (!tech) return null;

                        return (
                            <div key={tech.id} className="relative flex flex-col items-center">
                                <div
                                onClick={() => setIndexMeio(tech.id)}
                                className={`flex flex-col items-center justify-center p-6 rounded-2xl border cursor-pointer transition-all duration-300 shadow-lg
                                ${estaNoMeio 
                                    ? "w-56 h-56 bg-[#1C2541] border-[#00B4D8] shadow-[#00B4D8]/10 scale-100 z-10" 
                                    : "w-44 h-44 bg-[#1C2541] border-slate-800 opacity-50 hover:opacity-80 scale-95"
                                }`}>
                                {/* Icone da Tecnologia/sistema integrado */}
                                <div className="w-full flex-1 bg-[#1C2541] flex items-center justify-center p-4 relative h-32">
                                    <img src={tech.imagem} alt={`Logo ${techAtiva.nome}`} className={`max-w-full max-h-full object-contain transition-all duration-500${estaNoMeio ? "opacity-100 filter-none" : "opacity-40 grayscale"}`}/>
                                </div>

                                {/* Nome da Tecnologia/sistema integrado */}
                                <h3 className={`text-center font-bold tracking-wide transition-all duration-300 ${estaNoMeio ? "text-[#00B4D8] text-base" : "text-slate-400 text-xs"}`}>
                                {tech.nome}
                                </h3>
                                </div>
                                {estaNoMeio && (
                                <div className="absolute -bottom-5 text-[#00B4D8] text-xl">
                                ▼
                                </div>)}
                            </div>
                        );})}
                    </div>
                    {/* Seta Direita*/}
                    <button onClick={avancarTech}
                    className="p-2 bg-transparent text-slate-400 hover:text-[#00B4D8] transition-all duration-300 active:scale-75 cursor-pointer select-none">
                        <div className="w-0 h-0 border-t-12 border-t-transparent border-b-12 border-b-transparent border-l-[22px] border-l-current" />
                    </button>
                </div>
                {/* Container do conteúdo das Tecnologias */}
                {techAtiva && (
                    <section className="mt-12 w-full bg-white/95 rounded-3xl p-8 md:p-12 text-[#1C2541] shadow-2xl border border-slate-200 transform transition-all duration-500">
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            
                            {/* Lado Esquerdo: Textos do Item */}
                            <div className="space-y-4 text-left">
                                <span className="text-xs font-bold text-[#FF5A00] tracking-widest uppercase block">
                                    {techAtiva.tagline}
                                </span>
                                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight uppercase border-b border-slate-200 pb-4 text-[#0B132B]">
                                    {techAtiva.nome}
                                </h2>
                                <p className="text-slate-700 font-light leading-relaxed text-sm md:text-lg pt-2">
                                    {techAtiva.descricao}
                                </p>
                                {techAtiva.descricaoSecundaria && (
                                    <p className="text-slate-700 font-light leading-relaxed text-sm md:text-lg mt-4">
                                        {techAtiva.descricaoSecundaria}
                                    </p>
                                )}
                            </div>
                            {/* Lado Direito: Imagem */}
                            <div className="w-full h-64 md:h-96 flex items-center justify-center p-6 relative">
                                <img src={techAtiva.imagem} alt={`Logo ${techAtiva.nome}`}
                                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)] transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </section>
                )}
                <div className="mt-16 bg-[#111931] p-8 rounded-3xl border border-slate-800/80 shadow-2xl text-center">
                    <h3 className="text-xl font-bold uppercase tracking-wider text-slate-300 mb-8">
                        Processo do resgate
                    </h3>

                    {/* Linha horizontal dos processos */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center max-w-4xl mx-auto">
                        
                        {/* Etapa 1: Coleta de Dados*/}
                        <div className={`p-4 rounded-xl border transition-all duration-300 
                            ${indexMeio === 0 || indexMeio === 1 
                                ? "bg-[#1C2541] border-[#00B4D8] text-[#00B4D8] shadow-md shadow-[#00B4D8]/5 scale-105" 
                                : "bg-[#0B132B] border-slate-800 text-slate-500 opacity-50"
                            }`}
                        >
                            <div className="text-xs font-bold uppercase tracking-widest text-[#FF5A00] mb-1">Passo 1</div>
                            <div className="font-extrabold text-sm uppercase">Coleta de Dados</div>
                            <div className="text-[12px] text-slate-400 mt-1 font-mono">LoRa & ESP32</div>
                        </div>

                        {/* Indicador de direção no PC */}
                        <div className="hidden md:block text-slate-600 text-xl font-bold">➔</div>

                        {/* Etapa 2: Tratamento dos Dados*/}
                        <div className={`p-4 rounded-xl border transition-all duration-300 
                            ${indexMeio === 2 
                                ? "bg-[#1C2541] border-[#00B4D8] text-[#00B4D8] shadow-md shadow-[#00B4D8]/5 scale-105" 
                                : "bg-[#0B132B] border-slate-800 text-slate-500 opacity-50"
                            }`}
                        >
                            <div className="text-xs font-bold uppercase tracking-widest text-[#FF5A00] mb-1">Passo 2</div>
                            <div className="font-extrabold text-sm uppercase">Tratamento</div>
                            <div className="text-[12px] text-slate-400 mt-1 font-mono">Protocolo MQTT</div>
                        </div>

                        {/* Indicador de direção no PC */}
                        <div className="hidden md:block text-slate-600 text-xl font-bold">➔</div>

                        {/* Etapa 3: Análise dos Dados*/}
                        <div className={`p-4 rounded-xl border transition-all duration-300 
                            ${indexMeio === 3 || indexMeio === 4 
                                ? "bg-[#1C2541] border-[#00B4D8] text-[#00B4D8] shadow-md shadow-[#00B4D8]/5 scale-105" 
                                : "bg-[#0B132B] border-slate-800 text-slate-500 opacity-50"
                            }`}
                        >
                            <div className="text-xs font-bold uppercase tracking-widest text-[#FF5A00] mb-1">Passo 3</div>
                            <div className="font-extrabold text-sm uppercase">Análise de Contexto</div>
                            <div className="text-[12px] text-slate-400 mt-1 font-mono">FIWARE & Google Maps</div>
                        </div>

                        {/* Indicador de direção no PC */}
                        <div className="hidden md:block text-slate-600 text-xl font-bold">➔</div>

                        {/* Etapa 4: Despacho dos Dados e equipe de resgate*/}
                        <div className={`p-4 rounded-xl border transition-all duration-300 
                            ${indexMeio === 5 
                                ? "bg-[#1C2541] border-[#00B4D8] text-[#00B4D8] shadow-md shadow-[#00B4D8]/5 scale-105" 
                                : "bg-[#0B132B] border-slate-800 text-slate-500 opacity-50"
                            }`}
                        >
                            <div className="text-xs font-bold uppercase tracking-widest text-[#FF5A00] mb-1">Passo 4</div>
                            <div className="font-extrabold text-sm uppercase">Despacho Operacional</div>
                            <div className="text-[12px] text-slate-400 mt-1 font-mono">Dashboard Central</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}