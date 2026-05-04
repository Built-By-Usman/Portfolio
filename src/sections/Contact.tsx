import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

import { CheckCircle } from 'lucide-react';

export const CTA = () => {
  const highlights = [
    "Fast Delivery",
    "Clean Scalable Code",
    "Real-world Experience"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-[#8a4b14] opacity-95" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Let’s Build Something Amazing Together
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            I help businesses and individuals turn ideas into high-quality mobile and web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <CheckCircle size={20} className="text-white" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              href="mailto:builtbyusman@gmail.com" 
              className="bg-white text-accent hover:bg-gray-100 w-full sm:w-auto font-bold text-xl px-10 py-5 rounded-xl shadow-2xl hover:scale-105 transition-transform"
            >
              Hire Me Now
            </Button>
            <Button 
              href="#contact" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent w-full sm:w-auto font-bold text-xl px-10 py-5 rounded-xl hover:scale-105 transition-transform"
            >
              Let’s Talk
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href="mailto:builtbyusman@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors">
              <Mail size={24} />
              <span>builtbyusman@gmail.com</span>
            </a>
            
            <div className="flex items-center gap-3 text-gray-400">
              <Phone size={24} />
              <span>0304-1222383</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={24} />
              <span>Sargodha, Pakistan</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mt-12">
            <a href="https://linkedin.com/in/builtbyusman" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
              <LinkedinIcon size={24} />
            </a>
            <a href="https://github.com/Built-By-Usman" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-accent/20 hover:text-accent transition-colors">
              <GithubIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
        <p>© 2026 Muhammad Usman. All rights reserved.</p>
      </div>
    </footer>
  );
};
