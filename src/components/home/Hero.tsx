'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

export function Hero() {
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full -ml-0">
          {heroImages.map((heroImage, index) => (
            <CarouselItem key={heroImage.id} className="h-full relative pl-0">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority={index === 0}
                data-ai-hint={heroImage.imageHint}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="relative z-10 p-4 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-500">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
            Building Your Vision, Crafting Your Dreams
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            From large-scale constructions to bespoke furniture pieces, Kafas Group delivers excellence and quality craftsmanship in every project.
            </p>
            <div className="mt-10">
            <Button asChild size="lg" variant="destructive">
                <Link href="#contact">Get a Quote</Link>
            </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
