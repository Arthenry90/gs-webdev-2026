import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="w-full bg-[#0B132B] border-b border-slate-800/60 text-[#EDF2F4] sticky top-0 left-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        
        <div className="flex items-center">
          <Link to="/" className="font-extrabold tracking-wider text-base md:text-lg text-white hover:text-[#00B4D8] transition-colors uppercase">
            🛰️ Space Rescue
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/problema" className="hover:text-[#00B4D8] transition-colors tracking-wide">
            Problema
          </Link>
          <Link to="/tecnologia" className="hover:text-[#00B4D8] transition-colors tracking-wide">
            Tecnologia
          </Link>
          <Link to="/objetivos" className="hover:text-[#00B4D8] transition-colors tracking-wide">
            Objetivos
          </Link>
          <Link to="/beneficios" className="hover:text-[#00B4D8] transition-colors tracking-wide">
            Benefícios
          </Link>
        </div>
        <div className="flex items-center">
          <Link 
            to="/dashboard" 
            className="bg-[#1C2541] hover:bg-[#1C2541]/80 text-[#EDF2F4] border border-slate-700/50 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md"
          >
            Dashboard
          </Link>
        </div>

      </div>
    </nav>
  );
}