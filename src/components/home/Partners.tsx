'use client';

import { KafasLogo } from '@/components/common/KafasLogo';

export function Partners() {
  return (
    <section id="partners" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Trusted by Leading Companies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We partner with the best in the industry to deliver exceptional results for our clients.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex justify-center p-6 bg-secondary rounded-lg">
                  <KafasLogo className="h-12 text-muted-foreground" />
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
