'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Hammer, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href.startsWith('#')) {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Hammer className="h-6 w-6 text-primary" />
          <span className="text-lg">Kafas Build</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                isLinkActive(link.href) ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsMenuOpen(false)}>
                  <Hammer className="h-6 w-6 text-primary" />
                  <span className="text-lg">Kafas Build</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-foreground',
                        isLinkActive(link.href) ? 'text-foreground' : 'text-foreground/80'
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}