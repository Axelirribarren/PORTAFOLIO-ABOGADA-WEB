

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-sm border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                 <img
                    src="/logo.png"
                    alt="Estudio Irribarren"
                    className="h-[100px] md:h-[120px] w-auto object-contain"
                 />
            </div>

             <p className="text-slate-500">&copy; {new Date().getFullYear()} Estudio Jurídico Irribarren. Todos los derechos reservados.</p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
             <div className="flex items-center gap-1">
                <span>Desarrollado por</span>
                <span className="text-slate-300 font-medium">Axel Irribarren</span>
             </div>
            
            <div className="flex items-center gap-4">
                
                <div className="flex items-center gap-1.5 group cursor-default" title="React">
                    <svg className="w-4 h-4 text-slate-600 group-hover:text-[#61DAFB] transition-colors duration-300" viewBox="-10.5 -9.45 21 18.9" fill="currentColor">
                        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                        <g stroke="currentColor" strokeWidth="1" fill="none">
                            <ellipse rx="10" ry="4.5"></ellipse>
                            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                        </g>
                    </svg>
                    <span className="opacity-70 group-hover:opacity-100 group-hover:text-slate-300 transition-all">React</span>
                </div>

                 
                 <div className="flex items-center gap-1.5 group cursor-default" title="Tailwind CSS">
                    <svg className="w-4 h-4 text-slate-600 group-hover:text-[#38B2AC] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"/>
                    </svg>
                    <span className="opacity-70 group-hover:opacity-100 group-hover:text-slate-300 transition-all">Tailwind</span>
                 </div>

                
                 <div className="flex items-center gap-1.5 group cursor-default" title="TypeScript">
                    <svg className="w-4 h-4 text-slate-600 group-hover:text-[#3178C6] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.125 0C0.502 0 0 0.502 0 1.125v21.75C0 23.498 0.502 24 1.125 24h21.75c0.623 0 1.125-0.502 1.125-1.125V1.125C24 0.502 23.498 0 22.875 0H1.125zM17.492 16.89c-0.418 0-0.741-0.324-0.741-0.742v-6.31h1.766v6.31c0 0.418 0.324 0.742 0.742 0.742h2.204v1.766h-3.971zM11.528 16.89c-0.418 0-0.742-0.324-0.742-0.742v-5.065h-1.996v-1.766h5.758v1.766h-1.996v5.065c0 0.418-0.324 0.742-0.742 0.742h-1.024z"/>
                    </svg>
                    <span className="opacity-70 group-hover:opacity-100 group-hover:text-slate-300 transition-all">TypeScript</span>
                 </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
