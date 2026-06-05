export default function Card({ icone, titulo, descricao, className = "" }) {
  return (
    <div className={`bg-[#1C2541]
    px-8 py-12
    rounded-3xl
    shadow-lg 
    flex flex-col justify-center items-center
    min-h-[320px]
    border
    border-[#EDF2F4]
    
    transition-all duration-300 ease-out
    hover:-translate-y-3
    hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]

    ${className}`}>
      <div className="flex flex-col items-center">
        <div className="text-4xl mb-5 transform transition-transform duration-300 hover:scale-110">{icone}</div>
        <h4 className="text-2xl font-bold text-[#00B4D8] mb-4 tracking-wide">{titulo}</h4>
        <p className="text-slate-300 text-base leading-relaxed font-light max-w-sm">{descricao}</p>
      </div>
    </div>
  )
}