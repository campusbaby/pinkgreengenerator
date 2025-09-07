'use client';

export default function HowItWorks() {
  return (
    <section className="relative py-20 overflow-hidden" id="features">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-light">
            Three revolutionary steps to transform your images.
            <span className="block text-xl text-foreground/50 mt-2">Magazine-style simplicity meets cutting-edge technology.</span>
          </p>
        </div>

        {/* Steps - Magazine Layout */}
        <div className="space-y-16">
          {/* Step 01 - Upload */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start">
              {/* Massive Number */}
              <div className="relative lg:w-[300px] flex-shrink-0">
                <div className="relative flex items-center justify-center">
                  <div className="text-[180px] lg:text-[220px] font-black leading-none gradient-text select-none">
                    01
                  </div>
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl"></div>
                </div>
              </div>
              
              {/* Content wrapping around */}
              <div className="flex-1 lg:ml-8">
                <div className="lg:mt-0 flex flex-col">
                  <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
                    Drop Your
                    <span className="block gradient-text">Masterpiece</span>
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl">
                    Simply drag and drop your image or click to browse. We support all major formats 
                    up to 25MB. Your photo stays private—everything happens in your browser. Our advanced 
                    canvas-based processing ensures pixel-perfect results without compromising your data security.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="mt-8">
              <div className="flex flex-col md:flex-row md:gap-8 space-y-3 md:space-y-0">
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="font-medium">JPEG, PNG, WebP support</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="font-medium">25MB maximum file size</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="font-medium">100% browser-based processing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 02 - Process */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-0 items-start">
              {/* Massive Number */}
              <div className="relative lg:w-[300px] flex-shrink-0">
                <div className="relative flex items-center justify-center">
                  <div className="text-[180px] lg:text-[220px] font-black leading-none gradient-text select-none">
                    02
                  </div>
                  <div className="absolute inset-0 border-2 border-accent/20 rounded-3xl"></div>
                </div>
              </div>
              
              {/* Content wrapping around */}
              <div className="flex-1 lg:mr-8">
                <div className="lg:mt-0 lg:text-right flex flex-col">
                  <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
                    Choose Your
                    <span className="block gradient-text">Effect Style</span>
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl lg:ml-auto">
                    Select from our curated collection of duotone effects. Each style offers unique 
                    emotional impact with instant real-time preview. Our algorithm ensures perfect color 
                    mapping and professional-grade results that capture the essence of the Brave Pink Hero Green movement.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Effect Options */}
            <div className="mt-8 lg:text-right">
              <div className="flex flex-col md:flex-row md:gap-8 space-y-3 md:space-y-0 lg:justify-end">
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="font-medium">Classic: Pink highlights, green shadows</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="font-medium">Reverse: Green highlights, pink shadows</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">Accessible: Colorblind-friendly palette</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 03 - Download */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-start">
              {/* Massive Number */}
              <div className="relative lg:w-[300px] flex-shrink-0">
                <div className="relative flex items-center justify-center">
                  <div className="text-[180px] lg:text-[220px] font-black leading-none gradient-text select-none">
                    03
                  </div>
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl"></div>
                </div>
              </div>
              
              {/* Content wrapping around */}
              <div className="flex-1 lg:ml-8">
                <div className="lg:mt-0 flex flex-col">
                  <h3 className="text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
                    Download &
                    <span className="block gradient-text">Share Magic</span>
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8 max-w-2xl">
                    Get your transformed image as a high-quality PNG, perfectly optimized for 
                    social media, printing, or any creative project. Our export system maintains 
                    original resolution while applying professional color grading that makes your images 
                    stand out in the digital landscape.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Download Features */}
            <div className="mt-8">
              <div className="flex flex-col md:flex-row md:gap-8 space-y-3 md:space-y-0">
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-medium">High-quality PNG output</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">Social media optimized</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/60">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="font-medium">Instant download ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}