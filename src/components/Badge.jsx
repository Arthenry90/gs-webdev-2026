export default function Badge({ texto }) {
  return (
    <span className="inline-flex items-center justify-center bg-[#0B132B]/60 text-[#EDF2F4] border border-slate-700/60 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-md backdrop-blur-sm min-w-[240px] md:min-w-[320px] max-w-sm hover:scale-105 hover:border-slate-500 transition-all duration-300 cursor-default select-none">
       {texto}
    </span>
  );
}