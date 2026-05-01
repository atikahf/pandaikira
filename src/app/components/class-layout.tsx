import { BookOpen, Users, Award, Target } from 'lucide-react';

const classes = [
  {
    title: 'Mathematics',
    description: 'Comprehensive math tutoring from basic arithmetic to advanced calculus',
    icon: Target,
    features: ['One-on-One Sessions', 'Practice Materials', 'Progress Tracking'],
    grade: 'Grades 1-12',
    duration: '60 minutes',
  },
  {
    title: 'English & Literature',
    description: 'Enhance reading comprehension, writing skills, and literary analysis',
    icon: BookOpen,
    features: ['Reading Strategies', 'Essay Writing', 'Grammar & Vocabulary'],
    grade: 'Grades 1-12',
    duration: '60 minutes',
  },
  {
    title: 'Science',
    description: 'Engaging science tutoring covering Physics, Chemistry, and Biology',
    icon: Award,
    features: ['Hands-on Concepts', 'Lab Preparation', 'Exam Strategies'],
    grade: 'Grades 1-12',
    duration: '60 minutes',
  },
  {
    title: 'Group Sessions',
    description: 'Small group tutoring for collaborative learning experiences',
    icon: Users,
    features: ['Max 4 Students', 'Interactive Learning', 'Peer Discussion'],
    grade: 'All Grades',
    duration: '90 minutes',
  },
];

export function ClassLayout() {
  return (
    <section id="classes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Our Classes</span>
            </div>
            <h2 className="text-4xl mb-4">Available Tutoring Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of comprehensive tutoring programs designed to meet your child's educational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {classes.map((classItem) => {
              const Icon = classItem.icon;
              return (
                <div 
                  key={classItem.title}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{classItem.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {classItem.description}
                      </p>
                      <div className="flex gap-4 mb-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Grade: </span>
                          <span className="text-primary">{classItem.grade}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Duration: </span>
                          <span className="text-primary">{classItem.duration}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {classItem.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
