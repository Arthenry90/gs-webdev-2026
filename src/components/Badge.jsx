export default function Badge({ texto, onClick, hoverText, hoverBorder, hoverShadow }) {
  return (
    <button 
      onClick={onClick}
      className={`
        inline-flex items-center justify-center 
        bg-[#0B132B] text-[#EDF2F4] 
        border border-slate-800 shadow-md 
        px-8 py-3.5 rounded-full 
        text-xs md:text-sm font-semibold tracking-wide 
        min-w-[240px] md:min-w-[320px] max-w-sm 
        select-none cursor-pointer
        transition-all duration-300 ease-in-out
        hover:scale-105
        
        ${hoverText} 
        ${hoverBorder} 
        ${hoverShadow}
      `}
    >
       {texto}
    </button>
  );
}