export default function BotaoSocorro({ onDisparar, carregando, coords }) {
    const simularEnvioCoordenadas = () => {
        onDisparar(true);

        setTimeout(() => {
            const coordenadasSimuladas = {
                lat:18.9808,
                lng:103.1517
            };
            onDisparar(false, coordenadasSimuladas);
        }, 1500);
    };
    return (
    <div className="flex flex-col items-center py-8">
      {coords ? (
        <div className="bg-emerald-950/40 border-2 border-emerald-500 text-emerald-400 px-8 py-6 rounded-2xl max-w-md shadow-[0_0_20px_rgba(16,185,129,0.15)] text-center animate-fadeIn">
          <div className="text-4xl mb-3">✅</div>
          <h4 className="text-xl font-bold text-emerald-300 mb-1">Já te localizamos!</h4>
          <p className="text-slate-300 text-sm font-light leading-relaxed">
            Sua telemetria emergencial foi transmitida com sucesso via satélite. Mantenha a calma, as equipes de solo já foram acionadas.
          </p>
        </div>
      ) : (
        <button
          onClick={simularEnvioCoordenadas}
          disabled={carregando}
          className={`
            w-56 h-56 rounded-full 
            bg-[#eb6e2a] text-white font-black text-lg tracking-wider uppercase
            flex items-center justify-center text-center p-6
            shadow-[0_0_30px_rgba(255,90,0,0.3)]
            cursor-pointer select-none
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:bg-[#ed712d]
            hover:shadow-[0_0_50px_rgba(255,90,0,0.6)]
            active:scale-95
            ${carregando ? 'animate-pulse bg-amber-600' : ''}
          `}
        >
          {carregando ? 'Conectando Satélite...' : 'Estou Perdido'}
        </button>
      )}
    </div>
  );
}

