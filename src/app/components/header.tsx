import logo from '@/imports/image.png';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PANDAI KIRA Logo" className="h-16 md:h-20 w-auto" />
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <a href="#classes" className="hidden md:block text-foreground hover:text-primary transition-colors">
              Classes
            </a>
            <a href="#availability" className="hidden md:block text-foreground hover:text-primary transition-colors">
              Availability
            </a>
            <a href="#about" className="hidden md:block text-foreground hover:text-primary transition-colors">
              About
            </a>
            <ThemeToggle />
            <button className="px-4 md:px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base">
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}