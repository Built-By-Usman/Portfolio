import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { ContentCreator } from './sections/ContentCreator';
import { CTA, Contact, Footer } from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <ContentCreator />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
