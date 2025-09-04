'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What image formats are supported?',
    answer: 'We support JPEG, PNG, and WebP files up to 10MB in size. These formats provide the best quality and compatibility for the pink-green duotone effects.'
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
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about using Pink Green Generator
          </p>
        </div>

        <div className="card p-8">
          <div className="space-y-0">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleItem(index)}
                  className="faq-question w-full text-left flex items-center justify-between"
                >
                  <span className="pr-8">{item.question}</span>
                  <span className={`text-2xl transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                {openItems.includes(index) && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Still have questions? Check out our{' '}
            <a href="/about" className="text-pink-600 hover:text-pink-700 font-medium">
              About page
            </a>{' '}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
}