export default function Mapa({ coords }) {
  if (!coords) return null; // Se não houver coordenadas, o mapa fica invisível

  return (
    <div className="w-full max-w-4xl mt-12 animate-fadeIn mx-auto px-6 text-center">
      <p className="text-[#00B4D8] text-xs font-bold uppercase tracking-widest mb-4">
        📡 Sinal de Satélite Estabelecido! Coordenadas: {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
      </p>
      
      <div className="w-full h-[380px] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900">
        <iframe
          title="Google Maps Localização"
          width="100%"
          height="100%"
          style={{ border: 0,  }}
          loading="lazy"
          allowFullScreen
          src={`https://maps.google.com/maps?q=${coords.lat},${coords.lng}&t=k&z=15&output=embed`}
        ></iframe>
      </div>
    </div>
  );
}