import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { SERVICES } from '../data/portfolio';

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Services" 
          subtitle="Delivering high-quality, scalable solutions tailored to your needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} delay={index * 0.1}>
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
