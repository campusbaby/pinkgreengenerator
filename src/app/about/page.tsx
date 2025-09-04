import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Pink Green Generator - The Story Behind Brave Pink Hero Green',
  description: 'Learn about the Pink Green Generator and the Brave Pink Hero Green movement. Discover the meaning behind these symbolic colors and our privacy-first photo editing tool.',
  keywords: 'about pink green generator, brave pink hero green story, duotone photo editor background',
};

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold gradient-text">
                🎨 Pink Green Generator
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 font-medium">
                About
              </Link>
              <Link 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                GitHub
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Pink Green Generator
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            The Story Behind Brave Pink Hero Green
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Background Story */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Brave Pink Hero Green Movement Background
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">
                  The Pink Green Generator emerged from the powerful "Brave Pink Hero Green" social movement that originated during the Indonesian protests in August 2025. This digital movement transformed simple colors into symbols of courage, solidarity, and social expression.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong className="text-brave-pink">"Brave Pink"</strong> was inspired by Ana, a courageous woman who wore a pink hijab while confronting authorities during the demonstrations. Her bravery symbolized how ordinary people can show extraordinary courage in the face of adversity.
                </p>
                <p className="text-gray-700">
                  <strong className="text-hero-green">"Hero Green"</strong> comes from the green helmet of Affan Kurniawan, an online motorcycle taxi driver who tragically lost his life during the protests. Green became a symbol of solidarity, hope, and the struggles of working-class citizens.
                </p>
              </div>
            </div>

            {/* Color Symbolism */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Color Symbolism and Meaning
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-brave-pink/10 p-6 rounded-lg border-l-4 border-brave-pink">
                  <h3 className="text-lg font-semibold text-brave-pink mb-3">
                    Brave Pink (#F784C5)
                  </h3>
                  <p className="text-gray-700">
                    Traditionally associated with softness, pink transformed into a symbol of courage and resistance. It represents the bravery of ordinary people who stand up for their beliefs and fight for justice.
                  </p>
                </div>
                
                <div className="bg-hero-green/10 p-6 rounded-lg border-l-4 border-hero-green">
                  <h3 className="text-lg font-semibold text-hero-green mb-3">
                    Hero Green (#1B602F)
                  </h3>
                  <p className="text-gray-700">
                    Green embodies solidarity, hope, and unity. It represents the collective strength of working-class people and their determination to create positive change in society.
                  </p>
                </div>
              </div>
            </div>

            {/* Digital Movement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                From Streets to Social Media
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">
                  What started as street protests evolved into one of the most significant digital movements of 2025. Social media platforms like Instagram, Twitter, and TikTok were flooded with pink-green profile pictures as people showed their support.
                </p>
                <p className="text-gray-700 mb-4">
                  For many users, adopting these colors became a way to participate in the broader conversation without physically joining street protests. Students, workers, and ordinary people could signal their support by simply changing their profile pictures.
                </p>
                <p className="text-gray-700">
                  This digital solidarity demonstrated how simple visual symbols can become powerful tools for social expression and political engagement in the modern age.
                </p>
              </div>
            </div>

            {/* Technical Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Privacy-First Image Processing
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4">
                  Our Pink Green Generator is built with privacy as the top priority. All image processing happens directly in your browser using advanced HTML5 Canvas technology. Your photos never leave your device or get uploaded to any servers.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Highlights:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Client-side image processing using Canvas API</li>
                  <li>Support for JPEG, PNG, and WebP formats up to 10MB</li>
                  <li>Three effect options: Classic Colors, Reverse Duotone, and Color-blind Friendly</li>
                  <li>High-quality PNG output with full resolution preservation</li>
                  <li>Responsive design for desktop and mobile devices</li>
                </ul>
                
                <p className="text-gray-700">
                  This approach ensures complete privacy while delivering professional-quality results that preserve the symbolic meaning and visual impact of the Brave Pink Hero Green movement.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="bg-gradient-to-r from-brave-pink/10 to-hero-green/10 p-8 rounded-lg">
                <p className="text-gray-700 mb-4">
                  We believe in making digital expression accessible to everyone while respecting user privacy. Our goal is to provide a simple, free tool that allows people to participate in meaningful social movements through visual solidarity.
                </p>
                <p className="text-gray-700">
                  By combining cutting-edge web technology with respect for user privacy, we hope to empower individuals to express their values and support important causes in the digital age.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Pink Green Effect?
          </h2>
          <p className="text-gray-600 mb-8">
            Transform your photos and join the digital solidarity movement.
          </p>
          <Link
            href="/"
            className="inline-block bg-brave-pink text-white px-8 py-3 rounded-lg font-medium hover:bg-brave-pink/90 transition-colors"
          >
            Start Creating
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              © 2024 Pink Green Generator | Privacy-First Photo Editor
            </p>
            <div className="flex justify-center space-x-8">
              <Link href="/about" className="text-brave-pink">
                About
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500">Privacy</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500">Contact</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}