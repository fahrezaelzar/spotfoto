import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {  MapPin, ArrowRight, Search, Filter, Heart } from 'lucide-react';
import imgE1 from '../assets/image/explore/1.avif';
import imgE2 from '../assets/image/explore/2.avif';
import imgE3 from '../assets/image/explore/3.avif';
import imgT1 from '../assets/image/trending/1.avif';
import imgT2 from '../assets/image/trending/2.avif';
import imgT3 from '../assets/image/trending/3.avif';
import imgT4 from '../assets/image/trending/4.avif';
import imgT5 from '../assets/image/trending/5.avif';
import imgT6 from '../assets/image/trending/6.avif';


function ExploreSection() {
    const [searchQuery, setSearchQuery] = useState('');
  
    const spots = [
        { id: 1, title: "Golden Gate Bridge", location: "San Francisco", img: imgT1 },
        { id: 2, title: "Santorini Blue Domes", location: "Greece", img: imgT2 },
        { id: 3, title: "Kyoto Bamboo Forest", location: "Japan", img: imgT3 },
        { id: 4, title: "Amalfi Coast", location: "Italy", img: imgT4 },
        { id: 5, title: "Grand Canyon", location: "Arizona", img: imgT5 },
        { id: 6, title: "Eiffel Tower", location: "Paris", img: imgT6 },
    ];

    const filteredSpots = spots.filter(spot => 
        spot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const StackedImages = ({ images }: { images: string[] }) => {
        return (
        <div className="relative w-full max-w-[280px] md:max-w-sm aspect-[3/4] mx-auto group cursor-pointer">
            {images.slice(0, 3).map((src, i) => (
            <motion.div
                key={i}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white"
                initial={{ 
                rotate: i === 0 ? -6 : i === 1 ? 6 : 0,
                x: i === 0 ? -15 : i === 1 ? 15 : 0,
                y: i === 2 ? 15 : 0,
                zIndex: 10 - i
                }}
                whileHover={{ 
                rotate: i === 0 ? -25 : i === 1 ? 25 : 0,
                x: i === 0 ? -140 : i === 1 ? 140 : 0,
                y: i === 2 ? 60 : -30,
                scale: 1.05,
                zIndex: 20
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
                <img 
                src={src} 
                alt={`Stacked spot ${i}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-medium">Featured Spot #{i + 1}</p>
                </div>
            </motion.div>
            ))}
        </div>
        );
    };

    return(
            <section id="explore" className="py-32 px-6 bg-zinc-50 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">Featured Collection</span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                      Explore Our <br />
                      <span className="italic">Curated Spots</span>
                    </h2>
                    <p className="text-zinc-600 text-lg mb-10 max-w-lg leading-relaxed">
                      Kami telah mengumpulkan lokasi-lokasi paling ikonik dan tersembunyi untuk kebutuhan fotografi Anda. 
                      Gunakan fitur pencarian untuk menemukan spot di seluruh dunia.
                    </p>
                    
                    <div className="relative max-w-md group">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
                      <input 
                        type="text" 
                        placeholder="Cari lokasi atau nama spot..."
                        className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors">
                        <Filter size={18} className="text-zinc-600" />
                      </button>
                    </div>
                  </motion.div>
        
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex justify-center lg:justify-end"
                  >
                    <StackedImages images={[
                      imgE1,
                      imgE2,
                      imgE3
                    ]} />
                  </motion.div>
                </div>
        
                <div id='spots' className="space-y-12">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Trending Now</h3>
                      <p className="text-zinc-500">Spot yang paling banyak dikunjungi minggu ini</p>
                    </div>
                    <button className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Lihat Semua <ArrowRight size={18} />
                    </button>
                  </div>
        
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                      {filteredSpots.map((spot, i) => (
                        <motion.div
                          layout
                          key={spot.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ delay: i * 0.1 }}
                          className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100"
                        >
                          <div className="aspect-[4/3] overflow-hidden relative">
                            <img 
                              src={spot.img} 
                              alt={spot.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              referrerPolicy="no-referrer"
                            />
                            <button className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all">
                              <Heart size={20} />
                            </button>
                          </div>
                          <div className="p-8">
                            <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
                              <MapPin size={14} />
                              {spot.location}
                            </div>
                            <h4 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">{spot.title}</h4>
                            <button className="w-full py-3 bg-zinc-50 text-zinc-900 rounded-xl font-semibold group-hover:bg-emerald-600 group-hover:text-white transition-all">
                              Detail Spot
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </section>
    )
}

export default ExploreSection;