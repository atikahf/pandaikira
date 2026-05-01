import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import logo from '@/imports/image.png';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="PANDAI KIRA Logo" className="h-12 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground">
                Expert tutoring services helping students excel in their academic journey.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#classes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Our Classes
                  </a>
                </li>
                <li>
                  <a href="#availability" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Availability
                  </a>
                </li>
                <li>
                  <a href="#floor-plan" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Floor Plan
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-primary">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <a href="tel:+6512345678" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +65 1234 5678
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <a href="mailto:info@pandaikira.sg" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      info@pandaikira.sg
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      123 Education Street<br />
                      Learning District<br />
                      Singapore 123456
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media & Hours */}
            <div>
              <h3 className="mb-4 text-primary">Connect With Us</h3>
              <div className="flex gap-3 mb-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/6512345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <div className="text-sm">
                <h4 className="mb-2">Operating Hours</h4>
                <p className="text-muted-foreground mb-1">Friday: 9:00 AM - 6:30 PM</p>
                <p className="text-muted-foreground">Saturday: 4:00 PM - 10:30 PM</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 <span className="text-primary">PANDAI</span><span className="text-secondary">KIRA</span>. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a 
                  href="/admin" 
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/admin');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}