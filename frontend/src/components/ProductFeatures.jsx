import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Zap, Sparkles, Shield, Heart, Leaf, Beaker } from 'lucide-react';
import { heroImages } from './mockData';

const ProductFeatures = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: Beaker,
      title: "Clinically Proven Formulas",
      description: "Each product contains scientifically-backed active ingredients at optimal concentrations for maximum efficacy."
    },
    {
      icon: Sparkles,
      title: "Swiss Luxury Manufacturing",
      description: "Crafted in Switzerland using the highest quality standards and premium ingredients sourced globally."
    },
    {
      icon: Shield,
      title: "Dermatologist Tested",
      description: "All formulations are rigorously tested by dermatologists and suitable for sensitive skin types."
    },
    {
      icon: Heart,
      title: "Cruelty-Free & Vegan",
      description: "We never test on animals and use only vegan ingredients, certified by international organizations."
    },
    {
      icon: Leaf,
      title: "Clean Beauty Standards",
      description: "Free from parabens, sulfates, and harsh chemicals. Only pure, effective ingredients for your skin."
    },
    {
      icon: Zap,
      title: "Fast-Acting Results",
      description: "Experience visible improvements in skin texture, tone, and radiance within 1-2 weeks of consistent use."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
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
          <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200 mb-4">
            Why Choose LUMINA
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Science of Beautiful Skin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of advanced skincare science and luxurious textures, crafted for transformative results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
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
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Brand Story Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          <img 
            src={heroImages.lifestyle}
            alt="LUMINA luxury skincare lifestyle"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-start p-8 lg:p-16">
            <div className="max-w-lg">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Crafted in Swiss Excellence
              </h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                From the pristine mountains of Switzerland comes LUMINA - where traditional craftsmanship meets cutting-edge skincare science.
              </p>
              <div className="flex items-center text-white/80">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm">Trusted by 50,000+ customers worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;