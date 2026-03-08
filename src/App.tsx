
import { motion } from 'motion/react';
import {  ArrowRight } from 'lucide-react';
import Navbar from './component/navbar.tsx';
import ExploreSection from './component/Explore.tsx';
import Footer from './component/Footer.tsx';
import CommunitySection from './component/Community.tsx';
import img from './assets/image/hero/1.avif';

export default function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={img}
            alt="Coastal Road"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>


        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-widest uppercase">
              Discover the Unseen
            </span>
            <h1 className="text-5xl md:text-8xl font-serif italic mb-8 tracking-tight leading-[1.1]">
              Capture the <br /> 
              <span className="not-italic font-sans font-bold">Perfect Moment</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed">
              Temukan spot foto tersembunyi dengan pemandangan pesisir yang menakjubkan. 
              Didesain untuk para fotografer dan pencinta estetika.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-zinc-900 rounded-full font-bold flex items-center gap-2 transition-all hover:bg-zinc-100"
              >
                Cari Spot Sekarang
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Lihat Galeri
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>

        </motion.div>

      </section>

      <ExploreSection />


      <CommunitySection />
      <Footer />
    </div>
  );
}
