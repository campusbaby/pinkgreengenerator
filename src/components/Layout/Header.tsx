'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-card/10 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold gradient-text flex items-center gap-2">
              <img src="/favicon.ico" alt="Pink Green Generator" className="w-8 h-8" />
              Pink Green Generator
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className="text-foreground/80 hover:text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Features
            </Link>
            <Link 
              href="#gallery" 
              className="text-foreground/80 hover:text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className="text-foreground/80 hover:text-white font-medium transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-foreground/80 hover:text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/20 backdrop-blur-xl border-b border-white/10">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="#features" 
              className="block text-foreground/80 hover:text-white font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#gallery" 
              className="block text-foreground/80 hover:text-white font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className="block text-foreground/80 hover:text-white font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}