import { useState, useEffect } from 'react';
import { LogOut, Calendar, Image as ImageIcon, Users, Trash2, CheckCircle, XCircle, Plus, Clock, BookOpen } from 'lucide-react';

interface Booking {
  id: string;
  parentName: string;
  childName: string;
  email: string;
  phone: string;
  day: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  date: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'bookings' | 'gallery' | 'subjects' | 'timeslots'>('bookings');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [galleryImages, setGalleryImages] = useState<Array<{ id: string; url: string; title: string }>>([]);
  const [subjects, setSubjects] = useState<Array<{ id: string; name: string }>>([]);
  const [timeslots, setTimeslots] = useState<Array<{ id: string; day: string; time: string; seats: number }>>([]);
  const [newSubject, setNewSubject] = useState('');
  const [newTimeslot, setNewTimeslot] = useState({ day: '', time: '', seats: 4 });

  useEffect(() => {
    // Load bookings from localStorage
    const savedBookings = localStorage.getItem('bookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }

    // Load gallery images from localStorage
    const savedGallery = localStorage.getItem('galleryImages');
    if (savedGallery) {
      setGalleryImages(JSON.parse(savedGallery));
    }

    // Load subjects from localStorage
    const savedSubjects = localStorage.getItem('subjects');
    if (savedSubjects) {
      setSubjects(JSON.parse(savedSubjects));
    } else {
      // Initialize with default subjects
      const defaultSubjects = [
        { id: '1', name: 'Mathematics' },
        { id: '2', name: 'English & Literature' },
        { id: '3', name: 'Science' },
        { id: '4', name: 'Group Session' }
      ];
      setSubjects(defaultSubjects);
      localStorage.setItem('subjects', JSON.stringify(defaultSubjects));
    }

    // Load timeslots from localStorage
    const savedTimeslots = localStorage.getItem('timeslots');
    if (savedTimeslots) {
      setTimeslots(JSON.parse(savedTimeslots));
    } else {
      // Initialize with default timeslots
      const defaultTimeslots = [
        { id: '1', day: 'Friday', time: '9:00 AM - 10:30 AM', seats: 4 },
        { id: '2', day: 'Friday', time: '11:00 AM - 12:30 PM', seats: 4 },
        { id: '3', day: 'Friday', time: '2:00 PM - 3:30 PM', seats: 4 },
        { id: '4', day: 'Friday', time: '4:00 PM - 5:30 PM', seats: 4 },
        { id: '5', day: 'Saturday', time: '4:00 PM - 5:30 PM', seats: 4 },
        { id: '6', day: 'Saturday', time: '6:00 PM - 7:30 PM', seats: 4 },
        { id: '7', day: 'Saturday', time: '8:00 PM - 9:30 PM', seats: 4 }
      ];
      setTimeslots(defaultTimeslots);
      localStorage.setItem('timeslots', JSON.stringify(defaultTimeslots));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    onLogout();
  };

  const updateBookingStatus = (id: string, status: 'pending' | 'confirmed' | 'cancelled') => {
    const updatedBookings = bookings.map(booking =>
      booking.id === id ? { ...booking, status } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };

  const deleteBooking = (id: string) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      const updatedBookings = bookings.filter(booking => booking.id !== id);
      setBookings(updatedBookings);
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = {
          id: Date.now().toString() + Math.random(),
          url: event.target?.result as string,
          title: file.name
        };
        const updatedGallery = [...galleryImages, newImage];
        setGalleryImages(updatedGallery);
        localStorage.setItem('galleryImages', JSON.stringify(updatedGallery));
      };
      reader.readAsDataURL(file);
    });
  };

  const deleteImage = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      const updatedGallery = galleryImages.filter(img => img.id !== id);
      setGalleryImages(updatedGallery);
      localStorage.setItem('galleryImages', JSON.stringify(updatedGallery));
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500/10 text-green-500 border-green-500/30';
      case 'cancelled': return 'bg-red-500/10 text-red-500 border-red-500/30';
      default: return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30';
    }
  };

  const addSubject = () => {
    if (newSubject.trim()) {
      const newId = (subjects.length + 1).toString();
      const updatedSubjects = [...subjects, { id: newId, name: newSubject }];
      setSubjects(updatedSubjects);
      localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
      setNewSubject('');
    }
  };

  const deleteSubject = (id: string) => {
    if (confirm('Are you sure you want to delete this subject?')) {
      const updatedSubjects = subjects.filter(subject => subject.id !== id);
      setSubjects(updatedSubjects);
      localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    }
  };

  const addTimeslot = () => {
    if (newTimeslot.day && newTimeslot.time) {
      const newId = (timeslots.length + 1).toString();
      const updatedTimeslots = [...timeslots, { id: newId, ...newTimeslot }];
      setTimeslots(updatedTimeslots);
      localStorage.setItem('timeslots', JSON.stringify(updatedTimeslots));
      setNewTimeslot({ day: '', time: '', seats: 4 });
    }
  };

  const deleteTimeslot = (id: string) => {
    if (confirm('Are you sure you want to delete this timeslot?')) {
      const updatedTimeslots = timeslots.filter(timeslot => timeslot.id !== id);
      setTimeslots(updatedTimeslots);
      localStorage.setItem('timeslots', JSON.stringify(updatedTimeslots));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-primary">PANDAI</span>
                <span className="text-secondary">KIRA</span>
                <span className="text-muted-foreground ml-2 text-lg">Admin</span>
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-2xl font-bold">{bookings.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Confirmed</p>
                <p className="text-2xl font-bold">{bookings.filter(b => b.status === 'confirmed').length}</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <ImageIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Gallery Images</p>
                <p className="text-2xl font-bold">{galleryImages.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === 'bookings'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Users className="w-4 h-4" />
            Bookings
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === 'gallery'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Gallery
          </button>
          <button
            onClick={() => setActiveTab('subjects')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === 'subjects'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Subjects
          </button>
          <button
            onClick={() => setActiveTab('timeslots')}
            className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
              activeTab === 'timeslots'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <Clock className="w-4 h-4" />
            Timeslots
          </button>
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm">Parent Name</th>
                    <th className="px-6 py-4 text-left text-sm">Child Name</th>
                    <th className="px-6 py-4 text-left text-sm">Contact</th>
                    <th className="px-6 py-4 text-left text-sm">Session</th>
                    <th className="px-6 py-4 text-left text-sm">Status</th>
                    <th className="px-6 py-4 text-left text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                        No bookings yet
                      </td>
                    </tr>
                  ) : (
                    bookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">{booking.parentName}</td>
                        <td className="px-6 py-4">{booking.childName}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div>{booking.email}</div>
                            <div className="text-muted-foreground">{booking.phone}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div className="font-semibold">{booking.day}</div>
                            <div className="text-muted-foreground">{booking.time}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {booking.status !== 'confirmed' && (
                              <button
                                onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                className="p-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors"
                                title="Confirm"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                            )}
                            {booking.status !== 'cancelled' && (
                              <button
                                onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                title="Cancel"
                              >
                                <XCircle className="w-4 h-4" />
                              </button>
                            )}
                            <button
                              onClick={() => deleteBooking(booking.id)}
                              className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div>
            <div className="mb-6">
              <label className="flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
                <ImageIcon className="w-5 h-5" />
                Upload Images
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {galleryImages.length === 0 ? (
              <div className="bg-card border border-border rounded-xl p-12 text-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No images uploaded yet</p>
                <p className="text-sm text-muted-foreground mt-2">Click "Upload Images" to add photos to the gallery</p>
                <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
                  Note: Images are stored in browser localStorage. For production use, consider using a cloud storage solution.
                </p>
              </div>
            ) : (
              <div>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Tip:</strong> These images are stored locally and can be displayed throughout the site. 
                    In a production environment, you would integrate with cloud storage for permanent image hosting.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages.map((image) => (
                    <div key={image.id} className="bg-card border border-border rounded-xl overflow-hidden group">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <p className="text-sm truncate flex-1">{image.title}</p>
                        <button
                          onClick={() => deleteImage(image.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Subjects Tab */}
        {activeTab === 'subjects' && (
          <div>
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h3 className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                Add New Subject
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSubject()}
                  placeholder="Enter subject name"
                  className="flex-1 px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={addSubject}
                  className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Available Subjects ({subjects.length})
                </h3>
              </div>
              <div className="p-6">
                {subjects.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No subjects added yet. Add your first subject above.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subjects.map((subject) => (
                      <div
                        key={subject.id}
                        className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-primary" />
                          <span>{subject.name}</span>
                        </div>
                        <button
                          onClick={() => deleteSubject(subject.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                          title="Delete subject"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Timeslots Tab */}
        {activeTab === 'timeslots' && (
          <div>
            <div className="bg-card border border-border rounded-xl p-6 mb-6">
              <h3 className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                Add New Timeslot
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <select
                  value={newTimeslot.day}
                  onChange={(e) => setNewTimeslot({ ...newTimeslot, day: e.target.value })}
                  className="px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Day</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                <input
                  type="text"
                  value={newTimeslot.time}
                  onChange={(e) => setNewTimeslot({ ...newTimeslot, time: e.target.value })}
                  placeholder="e.g., 9:00 AM - 10:30 AM"
                  className="px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="number"
                  value={newTimeslot.seats}
                  onChange={(e) => setNewTimeslot({ ...newTimeslot, seats: parseInt(e.target.value) || 4 })}
                  min="1"
                  max="20"
                  placeholder="Seats"
                  className="px-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={addTimeslot}
                  className="flex items-center justify-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Available Timeslots ({timeslots.length})
                </h3>
              </div>
              <div className="p-6">
                {timeslots.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No timeslots added yet. Add your first timeslot above.
                  </div>
                ) : (
                  <div className="space-y-6">
                    {['Friday', 'Saturday', 'Sunday'].map((day) => {
                      const daySlots = timeslots.filter(t => t.day === day);
                      if (daySlots.length === 0) return null;
                      
                      return (
                        <div key={day}>
                          <h4 className="text-lg mb-3 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            {day}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {daySlots.map((timeslot) => (
                              <div
                                key={timeslot.id}
                                className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                              >
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <Clock className="w-4 h-4 text-primary" />
                                    <span className="font-semibold">{timeslot.time}</span>
                                  </div>
                                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {timeslot.seats} seats available
                                  </div>
                                </div>
                                <button
                                  onClick={() => deleteTimeslot(timeslot.id)}
                                  className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                  title="Delete timeslot"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}