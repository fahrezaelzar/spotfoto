import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera,  Menu, X} from 'lucide-react';


function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        item: string
      ) => {
      e.preventDefault();
      const section = document.getElementById(item.toLowerCase());
      if (section) {
        const navbarHeight = 80;
        const targetPosition = section.getBoundingClientRect().top 
                            + window.scrollY 
                            - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
      setIsMobileMenuOpen(false);
    };
    


    return(
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Camera className={isScrolled ? 'text-zinc-900' : 'text-white'} size={24} />
            <span className={`text-xl font-bold tracking-tighter ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>
              SPOTFOTO
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Explore', 'Spots', 'Community', 'About'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-sm font-medium hover:opacity-70 transition-opacity ${
                  isScrolled ? 'text-zinc-900' : 'text-white'
                }`}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isScrolled 
                  ? 'bg-zinc-900 text-white hover:bg-zinc-800' 
                  : 'bg-white text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-zinc-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-zinc-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {['Explore', 'Spots', 'Community', 'About'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-zinc-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full bg-zinc-900 text-white py-3 rounded-xl font-semibold mt-2">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    )
}

export default Navbar;