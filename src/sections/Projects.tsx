import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { PROJECTS } from '../data/portfolio';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Projects" 
          subtitle="A showcase of scalable, high-performance mobile and web applications I've built."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <Card key={project.title} delay={index * 0.1} className="flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
