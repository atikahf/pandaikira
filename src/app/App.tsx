import { useState, useEffect } from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Gallery } from './components/gallery';
import { ClassLayout } from './components/class-layout';
import { SessionAvailability } from './components/session-availability';
import { BookingModal } from './components/booking-modal';
import { Footer } from './components/footer';
import { AdminLogin } from './components/admin/admin-login';
import { AdminDashboard } from './components/admin/admin-dashboard';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; time: string } | null>(null);
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Initialize theme on app load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Check if on admin route
    const path = window.location.pathname;
    setIsAdminRoute(path === '/admin' || path.startsWith('/admin/'));

    // Check admin login status
    const adminStatus = localStorage.getItem('adminLoggedIn');
    setIsAdminLoggedIn(adminStatus === 'true');

    // Handle route changes
    const handlePopState = () => {
      const path = window.location.pathname;
      setIsAdminRoute(path === '/admin' || path.startsWith('/admin/'));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleBookSlot = (day: string, time: string) => {
    setSelectedSlot({ day, time });
    setIsBookingModalOpen(true);
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    window.history.pushState({}, '', '/');
    setIsAdminRoute(false);
  };

  // Admin routing
  if (isAdminRoute) {
    if (!isAdminLoggedIn) {
      return <AdminLogin onLogin={handleAdminLogin} />;
    }
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  // Main website
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <Hero onBookClick={() => setIsBookingModalOpen(true)} />
      <Gallery />
      <ClassLayout />
      <SessionAvailability onBookSlot={handleBookSlot} />
      <Footer />
      {isBookingModalOpen && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          selectedSlot={selectedSlot}
        />
      )}
    </div>
  );
}