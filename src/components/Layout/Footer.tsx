'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-card/30 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">✨</span>
              <span className="text-2xl font-bold gradient-text">Pink Green Generator</span>
            </div>
            <p className="text-foreground/70 leading-relaxed mb-6 max-w-md">
              The ultimate tool for creating Brave Pink Hero Green duotone effects. 
              Express solidarity and creativity with professional-grade photo transformation.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary">
              <span>🌐</span>
              Free Forever
            </div>
          </div>


          {/* Links Section */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Links</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-foreground/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/privacy" className="block text-foreground/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="mailto:support@pinkgreengenerator.app" className="block text-foreground/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © 2025 Pink Green Generator. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span>Made with</span>
              <span className="text-red-400">❤️</span>
              <span>for digital solidarity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}