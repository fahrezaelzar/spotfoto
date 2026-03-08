import { Camera,  Instagram, ArrowRight, Twitter, Facebook } from 'lucide-react';


function Footer(){
    return(
      <footer id="about" className="bg-zinc-900 text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Camera className="text-emerald-500" size={28} />
                <span className="text-2xl font-bold tracking-tighter">SPOTFOTO</span>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Platform terbaik untuk menemukan dan membagikan spot foto paling estetik di seluruh dunia. Dibuat untuk komunitas kreatif.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-emerald-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-emerald-500 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-emerald-500 transition-colors"><Facebook size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#explore" className="hover:text-white transition-colors">Explore Spots</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">Community Feed</a></li>
                <li><a href="#spots" className="hover:text-white transition-colors">Trending Locations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Photography Tips</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-zinc-400 mb-6">Dapatkan update spot terbaru langsung di email Anda.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
            <p>© 2024 SPOTFOTO. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;