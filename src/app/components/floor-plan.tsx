import { MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FloorPlan() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <MapPin className="w-4 h-4" />
              <span>Our Space</span>
            </div>
            <h2 className="text-4xl mb-4">Class Floor Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our modern learning environment is designed to provide comfortable and focused study spaces for all students
            </p>
          </div>

          {/* Image Panel */}
          <div className="mb-8">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1764720572930-eb63afd14b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYwMjIyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Modern Classroom Interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white mb-1">Modern Learning Spaces</h3>
                    <p className="text-white/80 text-sm">Equipped with the latest educational technology</p>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1753546466496-d2d8a819f61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXRvcmluZyUyMGNlbnRlciUyMHN0dWR5JTIwcm9vbXxlbnwxfHx8fDE3NjYwMjIyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Study Room"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white mb-1">Comfortable Study Rooms</h3>
                    <p className="text-white/80 text-sm">Quiet and focused environment for learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Floor Plan Visualization */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="space-y-6">
                {/* Reception Area */}
                <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-primary">Reception Area</h3>
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">Entry</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Welcome desk and waiting area</p>
                </div>

                {/* Primary School Classrooms */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-4">
                    <h4 className="text-sm mb-1">Primary Room 1</h4>
                    <p className="text-xs text-muted-foreground">Math & Science</p>
                    <p className="text-xs text-primary mt-2">Capacity: 4 seats</p>
                  </div>
                  <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-4">
                    <h4 className="text-sm mb-1">Primary Room 2</h4>
                    <p className="text-xs text-muted-foreground">English & Arts</p>
                    <p className="text-xs text-primary mt-2">Capacity: 4 seats</p>
                  </div>
                </div>

                {/* High School Classrooms */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-4">
                    <h4 className="text-sm mb-1">High School Room 1</h4>
                    <p className="text-xs text-muted-foreground">Advanced Studies</p>
                    <p className="text-xs text-primary mt-2">Capacity: 4 seats</p>
                  </div>
                  <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-4">
                    <h4 className="text-sm mb-1">High School Room 2</h4>
                    <p className="text-xs text-muted-foreground">Group Sessions</p>
                    <p className="text-xs text-primary mt-2">Capacity: 4 seats</p>
                  </div>
                </div>

                {/* Common Areas */}
                <div className="border-2 border-border bg-muted/30 rounded-lg p-4">
                  <h4 className="text-sm mb-1">Break Room & Library</h4>
                  <p className="text-xs text-muted-foreground">Resources and relaxation area</p>
                </div>
              </div>
            </div>

            {/* Facility Features */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="mb-4 text-primary">Facility Features</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="text-sm mb-1">Individual Study Desks</h4>
                      <p className="text-sm text-muted-foreground">
                        Each classroom equipped with 4 individual desks for personalized learning
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="text-sm mb-1">Interactive Whiteboards</h4>
                      <p className="text-sm text-muted-foreground">
                        Modern teaching aids in every classroom for effective visual learning
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="text-sm mb-1">Resource Library</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive collection of textbooks, reference materials, and study guides
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="text-sm mb-1">Comfortable Environment</h4>
                      <p className="text-sm text-muted-foreground">
                        Air-conditioned rooms with proper lighting and ergonomic furniture
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <h4 className="text-sm mb-1">Parent Waiting Area</h4>
                      <p className="text-sm text-muted-foreground">
                        Comfortable reception area with refreshments for waiting parents
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h4 className="mb-2">Location</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  123 Education Street, Learning District<br />
                  Singapore 123456
                </p>
                <a 
                  href="#" 
                  className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}