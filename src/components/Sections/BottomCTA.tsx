'use client';

export default function BottomCTA() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-primary/10 to-accent/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
            Start Creating
            <span className="block">Brave Pink Hero Green</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Transform your photos and join the movement. Express your creativity with the power of duotone effects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <button 
              onClick={() => document.getElementById('editor')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary px-12 py-6 text-xl font-semibold min-w-[250px] group"
            >
              <span className="mr-3 text-2xl">✨</span>
              Create Now
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}