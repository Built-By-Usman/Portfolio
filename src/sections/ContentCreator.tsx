import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../components/Icons';

export const ContentCreator = () => {
  return (
    <section id="content" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Sharing Knowledge" 
          subtitle="Empowering the developer community through high-quality content and insights."
        />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Beyond building applications, I am passionate about sharing my development journey. Through TikTok, Instagram, and LinkedIn, I provide practical insights, architectural tips, and a behind-the-scenes look at modern software engineering.
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all group">
                  <Video size={28} className="text-gray-400 group-hover:text-accent mb-2" />
                  <span className="text-sm font-medium">TikTok</span>
                </a>
                <a href="#" className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all group">
                  <InstagramIcon size={28} className="text-gray-400 group-hover:text-accent mb-2" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a href="https://linkedin.com/in/builtbyusman" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all group">
                  <LinkedinIcon size={28} className="text-gray-400 group-hover:text-accent mb-2" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/10"
              >
                {/* Placeholder for content creator image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 to-blue-900/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video size={64} className="text-white/50" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
