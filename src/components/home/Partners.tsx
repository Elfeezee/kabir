'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { KafasLogo } from '@/components/common/KafasLogo';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

export function Partners() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-4">
                   <div className="flex aspect-video items-center justify-center p-6 bg-secondary rounded-lg">
                      <KafasLogo className="h-12 text-muted-foreground" />
                   </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
