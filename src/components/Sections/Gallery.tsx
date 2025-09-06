'use client';

import Image from 'next/image';
import imageConfig from '@/config/images';

const Gallery = () => {
  const galleryImages = imageConfig.galleryImages;

  return (
    <section className="relative py-20 overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
            Gallery
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            See real examples created with our Pink Green Generator. 
            Each image showcases the powerful duotone effect that symbolizes courage and unity.
          </p>
        </div>

        {/* 4-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {galleryImages.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-card/20 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-2xl blur transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;