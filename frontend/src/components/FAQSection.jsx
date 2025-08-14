import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqData } from './mockData';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 mb-4">
            Support
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our Emergent Renewal Serum and skincare routine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card 
                key={index}
                className={`transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                  openFAQ === index 
                    ? 'ring-2 ring-amber-400 shadow-xl bg-gradient-to-r from-amber-50 to-rose-50' 
                    : 'hover:shadow-lg border-gray-200'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFAQ === index 
                          ? 'bg-gradient-to-br from-amber-400 to-rose-400 shadow-lg' 
                          : 'bg-gradient-to-br from-gray-100 to-gray-200'
                      }`}>
                        <HelpCircle className={`w-5 h-5 ${openFAQ === index ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                        openFAQ === index ? 'text-amber-800' : 'text-gray-800'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    openFAQ === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}>
                    <div className="pl-14">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-amber-50 to-rose-50 border-amber-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our skincare experts are here to help you achieve your best skin yet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-700 hover:to-rose-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    Contact Support
                  </button>
                  <button className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1">
                    Live Chat
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;