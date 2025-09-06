'use client';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What image formats are supported?',
    answer: 'We support JPEG, PNG, and WebP files up to 25MB in size. These formats provide the best quality and compatibility for the pink-green duotone effects.'
  },
  {
    question: 'Is my data safe and private?',
    answer: 'Absolutely! All image processing happens directly in your browser using HTML5 Canvas technology. Your photos never leave your device or get uploaded to any servers. We have zero access to your images.'
  },
  {
    question: "What's the difference between the effect modes?",
    answer: 'Classic mode uses pink for highlights and green for shadows - the traditional Brave Pink Hero Green combination. Reverse mode flips this with green highlights and pink shadows. Colorblind mode uses specially optimized colors for better accessibility and visibility.'
  },
  {
    question: 'Can I use this on mobile devices?',
    answer: 'Yes! Our editor works perfectly on smartphones and tablets with touch-friendly drag and drop functionality. The interface automatically adapts to your screen size for the best experience.'
  },
  {
    question: 'Is there any cost to use this tool?',
    answer: 'No, the Pink Green Generator is completely free to use with no registration, watermarks, or hidden fees. We believe in making creative tools accessible to everyone.'
  },
  {
    question: 'What makes this different from other photo editors?',
    answer: 'We specialize exclusively in creating the Brave Pink Hero Green duotone effect with perfect color accuracy. Our tool is optimized for this specific style, making it faster and easier than general photo editors.'
  },
  {
    question: 'What is the Brave Pink Hero Green movement?',
    answer: 'Brave Pink Hero Green originated from social movements symbolizing courage (pink) and unity (green). The color combination has become a powerful symbol of solidarity and digital expression in social media.'
  },
  {
    question: 'How fast is the processing?',
    answer: 'Image processing is instantaneous! Since everything happens locally in your browser using advanced Canvas APIs, there\'s no upload time or server delays. You see results immediately as you switch between effects.'
  }
];

export default function FAQ() {

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about using Pink Green Generator. Can't find the answer you're looking for?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {faqData.map((item, index) => (
            <div key={index} className="group">
              <div className="p-6 card-glass rounded-2xl hover:bg-card/50 transition-all duration-300 group-hover:scale-[1.01]">
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight group-hover:text-white transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}