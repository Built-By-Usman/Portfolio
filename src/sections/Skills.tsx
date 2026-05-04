import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { SKILLS } from '../data/portfolio';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Technical Expertise" 
          subtitle="A comprehensive toolkit designed for building scalable, high-performance solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, skillsList], index) => (
            <Card key={category} delay={index * 0.1}>
              <h3 className="text-xl font-semibold mb-4 text-white border-b border-white/10 pb-2">{category}</h3>
              <ul className="space-y-2">
                {skillsList.map(skill => (
                  <li key={skill} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
