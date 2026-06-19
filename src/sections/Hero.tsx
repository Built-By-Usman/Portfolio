import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import profilePic from '../assets/profile_pic.png';
import { PlayStoreIcon } from '../components/Icons';

export const Hero = () => {
  const tagline = "Creativity runs in my blood — I turn ideas into powerful digital experiences.";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image with Glow and Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 relative inline-block"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-accent to-orange-400 shadow-[0_0_30px_rgba(195,108,30,0.4)] animate-float overflow-hidden">
              <img 
                src={profilePic} 
                alt="Muhammad Usman" 
                className="w-full h-full object-cover rounded-full bg-background"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">Hello, I am</h2>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter text-white">
              Muhammad Usman
            </h1>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl text-white/90 font-medium mb-8"
          >
            Software Engineer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed italic"
          >
            "{tagline}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button href="#projects" variant="primary" className="w-full sm:w-auto px-10 py-4 text-lg">
              View Projects
            </Button>
            <Button href="https://wa.me/923041222383" variant="outline" className="w-full sm:w-auto px-10 py-4 text-lg">
              Hire Me
            </Button>
          </motion.div>

          <motion.a
            href="https://play.google.com/store/apps/dev?id=6607409488168138981"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 max-w-sm mx-auto bg-white/5 border border-accent/30 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 hover:border-accent/50 hover:scale-105 transition-all cursor-pointer shadow-[0_0_20px_rgba(195,108,30,0.15)] group block text-left"
          >
            <div className="bg-accent/20 p-3 rounded-xl text-accent group-hover:scale-110 transition-transform">
              <PlayStoreIcon size={28} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg leading-tight">10+ Published Apps</h4>
              <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">View Play Store Profile &rarr;</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
