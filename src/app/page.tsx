import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Hero } from '@/components/home/Hero';
import { ProjectShowcase } from '@/components/home/ProjectShowcase';
import { ServiceCatalog } from '@/components/home/ServiceCatalog';
import { DesignAssistant } from '@/components/home/DesignAssistant';
import { ContactForm } from '@/components/home/ContactForm';
import { Partners } from '@/components/home/Partners';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectShowcase />
        <ServiceCatalog />
        <Partners />
        <DesignAssistant />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
