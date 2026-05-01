import { useState, useEffect } from 'react';
import { Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  title: string;
}

export function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    try {
      // Load gallery images from localStorage
      const savedGallery = localStorage.getItem('galleryImages');
      if (savedGallery) {
        const parsed = JSON.parse(savedGallery);
        setGalleryImages(parsed || []);
      }
    } catch (error) {
      console.error('Error loading gallery images:', error);
      setGalleryImages([]);
    }
  }, []);

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    if (galleryImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (galleryImages.length === 0) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
                <ImageIcon className="w-4 h-4" />
                <span>Gallery</span>
              </div>
              <h2 className="text-4xl mb-4">Our Learning Spaces</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our modern tutoring center through our photo gallery
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-12 text-center">
              <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No gallery images available yet</p>
              <p className="text-sm text-muted-foreground mt-2">
                Images will appear here once the admin uploads them
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background" id="gallery">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
              <ImageIcon className="w-4 h-4" />
              <span>Gallery</span>
            </div>
            <h2 className="text-4xl mb-4">Our Learning Spaces</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our modern tutoring center designed for optimal learning
            </p>
          </div>

          <div className="relative">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-xl bg-card border border-border">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {galleryImages.map((image) => (
                  <div key={image.id} className="min-w-full px-2">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-xl font-medium">{image.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background border border-border rounded-full text-primary hover:text-primary/80 transition-all backdrop-blur-sm z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/80 hover:bg-background border border-border rounded-full text-primary hover:text-primary/80 transition-all backdrop-blur-sm z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Dots Navigation */}
            {galleryImages.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thumbnail Grid */}
          {galleryImages.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`bg-card border rounded-lg overflow-hidden transition-all hover:scale-105 ${
                    index === currentIndex
                      ? 'border-primary ring-2 ring-primary/30'
                      : 'border-border'
                  }`}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
