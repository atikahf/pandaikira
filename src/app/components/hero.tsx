import { Calendar } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 pointer-events-none" />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-block mb-4">
            <p className="text-lg md:text-xl text-primary tracking-wide" style={{ fontFamily: "'Gistesy', cursive" }}>
              Small Groups, Big Dreams!
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Expert Tutoring for Your Child's Success
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Professional one-on-one tutoring sessions designed to help your child excel. 
            Check our availability and book a session today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={onBookClick}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/30"
            >
              <Calendar className="w-5 h-5" />
              Book a Session
            </button>
            <a 
              href="#availability"
              className="px-8 py-4 bg-card border border-border text-card-foreground rounded-lg hover:bg-muted transition-colors"
            >
              View Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}