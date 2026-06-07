import { FaInstagram, FaTiktok, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B132B] text-slate-400 py-6 px-6 border-t border-slate-800/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        
        {/* Lado Esquerdo: Identificação e Copyright integrados */}
        <div className="text-center md:text-left space-y-1">
          <h4 className="text-white font-bold tracking-wider uppercase text-[#00B4D8]">
            Space Rescue System
          </h4>
          <p className="font-light text-slate-500">
            &copy; {new Date().getFullYear()} • Global Solution • FIAP
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-500 mr-1 uppercase tracking-wider font-medium text-[10px]">Social:</span>
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#11192E] border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300">
            <FaInstagram size={14} />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#11192E] border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300">
            <FaTiktok size={14} />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#11192E] border border-slate-800 rounded-full text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300">
            <FaTwitter size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}