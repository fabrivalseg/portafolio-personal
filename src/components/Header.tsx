import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const meetingUrl = 'https://calendly.com/fabrizioval-seg/30min';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#casos', label: 'Casos de exito' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#sobre-mi', label: 'Sobre mi' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="text-base md:text-lg tracking-wide font-semibold text-white">
            Fabrizio Valverde
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-zinc-300 hover:text-white transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-300 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5493517169604"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-white/20 text-sm text-zinc-100 hover:border-teal-300/70 hover:text-white transition-all"
            >
              WhatsApp
            </a>
            <a
              href={meetingUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full text-sm font-medium bg-white text-zinc-950 hover:bg-teal-300 transition-colors"
            >
              Agendar reunion
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-zinc-900/95 backdrop-blur-md rounded-xl border border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-zinc-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-3 flex flex-col gap-3">
              <a
                href="https://wa.me/5493517169604"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full border border-white/20 text-center text-zinc-100"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={meetingUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-white text-center text-zinc-950 font-medium"
              >
                Agendar reunion
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;