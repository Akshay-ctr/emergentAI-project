import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Sparkles, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { serumProduct, heroImages } from './mockData';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const guarantees = [
    {
      icon: ShieldCheck,
      title: "30-Day Guarantee",
      description: "Love it or get your money back"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $150"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Hassle-free return process"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-amber-100 via-rose-100 to-orange-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            <Sparkles className={`text-amber-600 ${Math.random() > 0.5 ? 'w-4 h-4' : 'w-3 h-3'}`} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="block">Transform Your Skin</span>
              <span className="block bg-gradient-to-r from-amber-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
                Starting Today
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Join thousands who've discovered the secret to radiant, youthful skin with our revolutionary serum.
            </p>

            {/* Product showcase */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-rose-300 rounded-full blur-3xl opacity-30 scale-110"></div>
                <img 
                  src={heroImages.luxury}
                  alt="Emergent Renewal Serum"
                  className="relative z-10 w-64 h-64 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {serumProduct.name}
                </h3>
                <div className="space-y-3 mb-6">
                  {serumProduct.benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ${serumProduct.price}
                  <span className="text-lg text-gray-600 font-normal ml-2">
                    / {serumProduct.volume}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  That's only ${(serumProduct.price / 30).toFixed(2)} per day for luxury skincare
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-700 hover:to-rose-600 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                Order Now - ${serumProduct.price}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-amber-400 text-amber-700 hover:bg-amber-50 px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-2"
              >
                Try Risk-Free
              </Button>
            </div>

            {/* Guarantees */}
            <div className="grid md:grid-cols-3 gap-6">
              {guarantees.map((guarantee, index) => {
                const IconComponent = guarantee.icon;
                return (
                  <Card key={index} className="bg-white/60 backdrop-blur-sm border-white/30 hover:bg-white/80 transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-amber-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{guarantee.title}</h4>
                      <p className="text-sm text-gray-600">{guarantee.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Urgency element */}
            <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200 shadow-lg">
              <div className="flex items-center justify-center space-x-4 text-amber-800">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-medium">
                  Limited Time: Free premium gift with every order this week
                </span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;