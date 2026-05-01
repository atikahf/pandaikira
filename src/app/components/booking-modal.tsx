import { useState } from 'react';
import { X, CircleCheck, Calendar, Clock, User, Mail, Phone } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSlot: { day: string; time: string } | null;
}

export function BookingModal({ isOpen, onClose, selectedSlot }: BookingModalProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    subject: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save booking to localStorage
    const booking = {
      id: Date.now().toString(),
      parentName: formData.parentName,
      childName: formData.studentName,
      email: formData.email,
      phone: formData.phone,
      day: selectedSlot?.day || '',
      time: selectedSlot?.time || '',
      status: 'pending' as const,
      date: new Date().toISOString(),
      subject: formData.subject,
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    localStorage.setItem('bookings', JSON.stringify([...existingBookings, booking]));
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        parentName: '',
        studentName: '',
        email: '',
        phone: '',
        subject: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card border border-border rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <h2>Book a Session</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CircleCheck className="w-10 h-10 text-primary" />
            </div>
            <h3 className="mb-2">Booking Confirmed!</h3>
            <p className="text-muted-foreground mb-4">
              We've received your booking request. You'll receive a confirmation email shortly.
            </p>
            {selectedSlot && (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center justify-center gap-2 text-primary mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedSlot.day}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Clock className="w-4 h-4" />
                  <span>{selectedSlot.time}</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {selectedSlot && (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Selected Time Slot:</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedSlot.day}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-4 h-4" />
                    <span>{selectedSlot.time}</span>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="parentName" className="flex items-center gap-2 mb-2 text-foreground">
                <User className="w-4 h-4 text-primary" />
                Parent Name
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="studentName" className="flex items-center gap-2 mb-2 text-foreground">
                <User className="w-4 h-4 text-primary" />
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                placeholder="Enter student's name"
              />
            </div>

            <div>
              <label htmlFor="email" className="flex items-center gap-2 mb-2 text-foreground">
                <Mail className="w-4 h-4 text-primary" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                placeholder="parent@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="flex items-center gap-2 mb-2 text-foreground">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="subject" className="flex items-center gap-2 mb-2 text-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
              >
                <option value="">Select a subject</option>
                <option value="mathematics">Mathematics</option>
                <option value="english">English & Literature</option>
                <option value="science">Science</option>
                <option value="group">Group Session</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}