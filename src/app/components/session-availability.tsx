import { Clock, Calendar, Users } from 'lucide-react';

interface SessionAvailabilityProps {
  onBookSlot: (day: string, time: string) => void;
}

// Friday: Primary School
const fridaySlots = [
  { time: '9:00 - 10:00 AM', available: 3, total: 4 },
  { time: '10:15 - 11:15 AM', available: 4, total: 4 },
  { time: '11:30 AM - 12:30 PM', available: 2, total: 4 },
  { time: '3:00 - 4:00 PM', available: 1, total: 4 },
  { time: '4:15 - 5:15 PM', available: 4, total: 4 },
  { time: '5:30 - 6:30 PM', available: 0, total: 4 },
];

// Saturday: High School
const saturdaySlots = [
  { time: '4:00 - 5:00 PM', available: 2, total: 4 },
  { time: '5:15 - 6:15 PM', available: 3, total: 4 },
  { time: '6:30 - 7:30 PM', available: 4, total: 4 },
  { time: '8:15 - 9:15 PM', available: 1, total: 4 },
  { time: '9:30 - 10:30 PM', available: 0, total: 4 },
];

export function SessionAvailability({ onBookSlot }: SessionAvailabilityProps) {
  return (
    <section id="availability" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <Calendar className="w-4 h-4" />
              <span>Check Availability</span>
            </div>
            <h2 className="text-4xl mb-4">Session Availability</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our available time slots and book a session that fits your schedule. 
              Each session has a maximum of 4 seats.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Friday - Primary School */}
            <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-primary">Friday</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">Primary School</span>
                </div>
                <p className="text-sm text-muted-foreground">Available slots - 4 seats per session</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {fridaySlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available > 0 && onBookSlot('Friday', slot.time)}
                    disabled={slot.available === 0}
                    className={`
                      px-4 py-3 rounded-lg border transition-all text-left
                      ${slot.available > 0
                        ? 'border-border bg-muted hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer' 
                        : 'border-border/50 bg-muted/30 text-muted-foreground cursor-not-allowed opacity-50'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{slot.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span className="text-xs">{slot.available}/{slot.total}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Saturday - High School */}
            <div className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-primary">Saturday</h3>
                  <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">High School</span>
                </div>
                <p className="text-sm text-muted-foreground">Available slots - 4 seats per session</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {saturdaySlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available > 0 && onBookSlot('Saturday', slot.time)}
                    disabled={slot.available === 0}
                    className={`
                      px-4 py-3 rounded-lg border transition-all text-left
                      ${slot.available > 0
                        ? 'border-border bg-muted hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer' 
                        : 'border-border/50 bg-muted/30 text-muted-foreground cursor-not-allowed opacity-50'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{slot.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span className="text-xs">{slot.available}/{slot.total}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6 justify-center flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted border border-border" />
              <span className="text-sm text-muted-foreground">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted/30 border border-border/50" />
              <span className="text-sm text-muted-foreground">Fully Booked</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Shows available seats / total seats</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}