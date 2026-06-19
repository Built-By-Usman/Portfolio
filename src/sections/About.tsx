import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="About Me" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-lg">
              I am a Software Engineer focused on crafting high-performance, scalable applications. With expertise in **Flutter** and **FastAPI**, I transform complex ideas into seamless digital experiences.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-lg">
              My approach combines clean architecture with intuitive design to deliver functional and exceptional software.
            </p>
            
            <div className="space-y-8 mt-10">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-accent">Professional Experience</h4>
                <div className="border-l-2 border-accent/20 pl-4 ml-2">
                  <div className="relative mb-6">
                    <div className="absolute w-3 h-3 bg-accent rounded-full -left-[1.35rem] top-1.5 shadow-[0_0_10px_#c36c1e]" />
                    <h5 className="font-bold text-white text-lg">Freelance Full Stack Developer</h5>
                    <span className="text-sm text-accent font-medium">Nov 2024 – Present</span>
                    <ul className="mt-3 text-gray-400 text-sm space-y-3 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">▹</span>
                        Architected and deployed scalable mobile applications used by hundreds of users.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">▹</span>
                        Designed robust backend systems with complex API integrations and real-time data synchronization.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">▹</span>
                        Successfully managed full-cycle development from initial concept to Play Store publication.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-accent">Education</h4>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h5 className="font-bold text-white">BS Software Engineering</h5>
                <p className="text-accent text-sm mb-2">University of Sargodha</p>
                <p className="text-gray-400 text-sm">Expected 2027 • GPA: 3.75/4.0</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h5 className="font-bold text-white">ICS (Computer Science)</h5>
                <p className="text-accent text-sm mb-2">The Reader College</p>
                <p className="text-gray-400 text-sm">Completed 2023</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h5 className="font-bold text-white">Matriculation (Computer Science)</h5>
                <p className="text-accent text-sm mb-2">Allied School</p>
                <p className="text-gray-400 text-sm">Completed 2021</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
