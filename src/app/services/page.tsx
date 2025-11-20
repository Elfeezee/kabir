import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { detailedServices } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16 sm:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A comprehensive portfolio of engineering, construction, and management services designed to meet the highest standards of quality and efficiency.
            </p>
          </div>

          <div className="space-y-8">
            {detailedServices.map((service) => (
              <Card key={service.title} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                       <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  {service.subServices && service.subServices.length > 0 && (
                    <Accordion type="single" collapsible className="w-full">
                      {service.subServices.map((sub, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                          <AccordionTrigger className="font-semibold text-lg">{sub.title}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {sub.description}
                            {sub.points && sub.points.length > 0 && (
                               <ul className="list-disc pl-5 mt-4 space-y-2">
                                {sub.points.map((point, pointIndex) => (
                                    <li key={pointIndex}>{point}</li>
                                ))}
                               </ul>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
