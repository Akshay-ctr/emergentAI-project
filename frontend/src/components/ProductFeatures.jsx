import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Zap, Sparkles, Shield, Heart } from 'lucide-react';
import { serumProduct, heroImages } from './mockData';

const ProductFeatures = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const featureIcons = [Zap, Sparkles, Shield, Heart, Zap];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            serumProduct.benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 border-amber-200 mb-4">
            Clinical Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transformative Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of advanced skincare science with clinically proven results that speak for themselves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serumProduct.benefits.map((benefit, index) => {
            const IconComponent = featureIcons[index % featureIcons.length];
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card 
                key={index}
                className={`group hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 border-amber-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-lg font-medium text-gray-800 leading-relaxed">
                    {benefit}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Lifestyle image section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10"></div>
          <img 
            src={heroImages.lifestyle}
            alt="Luxury skincare lifestyle"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-start p-8 lg:p-16">
            <div className="max-w-lg">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Elevate Your Daily Ritual
              </h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Transform your skincare routine into a luxurious self-care experience with our premium formulation.
              </p>
              <div className="flex items-center text-white/80">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm">Trusted by 10,000+ customers worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;