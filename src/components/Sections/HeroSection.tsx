'use client';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-24 md:pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium text-foreground/80 mb-8">
            🚀 Free, Private, and Instant Processing
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold gradient-text leading-tight">
            Brave Pink Hero Green Generator
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Transform your photos with the revolutionary pink & green duotone effect. 
            <span className="block mt-2 text-lg text-foreground/60">
              100% secure processing - your images never leave your device.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button className="btn btn-primary px-10 py-5 text-xl font-semibold min-w-[200px]">
              ✨ Create Now
            </button>
            <button className="btn btn-glass px-10 py-5 text-xl font-semibold min-w-[200px]">
              🎨 View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}