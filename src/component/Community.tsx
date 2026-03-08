import { motion } from 'motion/react';
import { Heart, MessageSquare, Share2} from 'lucide-react';
import avatar1 from '../assets/image/avatar/1.jpg';
import avatar2 from '../assets/image/avatar/2.jpg';
import avatar3 from '../assets/image/avatar/3.jpg';
import post1 from '../assets/image/post/1.avif';
import post2 from '../assets/image/trending/1.avif';
import post3 from '../assets/image/trending/2.avif';
import imgCarousel1 from '../assets/image/trending/1.avif';
import imgCarousel2 from '../assets/image/carousel/1.jpg';
import imgCarousel3 from '../assets/image/carousel/2.jpg';
import imgCarousel4 from '../assets/image/carousel/3.jpg';
import imgCarousel5 from '../assets/image/trending/7.jpg';


function CommunitySection() {
    const communityImages = [
        imgCarousel1,
        imgCarousel2,
        imgCarousel3,
        imgCarousel4,
        imgCarousel5,
    ];

    const posts = [
        { id: 1, user: "Alex Rivera", avatar: avatar1, text: "Just found this amazing spot in Bali! The light at 5 PM is magical.", img: post1 },
        { id: 2, user: "Sarah Chen", avatar: avatar2, text: "The fog over the bridge this morning was incredible. Worth the early wake up.", img: post2 },
        { id: 3, user: "Marcus Thorne", avatar: avatar3, text: "Minimalist vibes at the local museum. Great for architectural shots.", img: post3 },
    ];

    return(
        <section id="community" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20">
            <div className="text-center mb-16">
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block"
            >
                Join the Movement
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-serif mb-6"
            >
                Menjelajah <span className="italic">Community</span>
            </motion.h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Bagikan karya Anda, temukan inspirasi, dan terhubung dengan ribuan fotografer lainnya di seluruh dunia.
            </p>
            </div>

            {/* Dummy Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
                <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-50 rounded-[2.5rem] p-8 border border-zinc-100 hover:shadow-xl transition-all duration-500 group"
                >
                <div className="flex items-center gap-4 mb-6">
                    <img src={post.avatar} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" alt={post.user} referrerPolicy="no-referrer" />
                    <div>
                    <h4 className="font-bold text-zinc-900">{post.user}</h4>
                    <p className="text-xs text-zinc-400">2 hours ago</p>
                    </div>
                </div>
                <p className="text-zinc-600 mb-6 leading-relaxed italic">"{post.text}"</p>
                <div className="rounded-2xl overflow-hidden aspect-video mb-6 relative">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Shared photo" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex items-center justify-between text-zinc-400">
                    <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors"><Heart size={18} /> <span className="text-sm font-medium">124</span></button>
                    <button className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"><MessageSquare size={18} /> <span className="text-sm font-medium">12</span></button>
                    </div>
                    <button className="hover:text-zinc-900 transition-colors"><Share2 size={18} /></button>
                </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* Infinite Carousel */}
        <div className="relative py-12 bg-zinc-900 overflow-hidden">
            <div className="flex">
            <motion.div 
                className="flex gap-8 whitespace-nowrap"
                animate={{ x: [0, -1920] }}
                transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
                }}
            >
                {[...communityImages, ...communityImages, ...communityImages].map((src, i) => (
                <div key={i} className="w-64 h-80 flex-shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer group relative">
                    <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={`Community ${i}`} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                ))}
            </motion.div>
            </div>
            {/* Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />
        </div>
        </section>
    )
}

export default CommunitySection;