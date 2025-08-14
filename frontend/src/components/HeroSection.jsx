import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Sparkles, Star, ArrowRight } from 'lucide-react';
import { brandInfo, heroImages, products } from './mockData';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className={`text-amber-400 ${Math.random() > 0.5 ? 'w-3 h-3' : 'w-2 h-2'}`} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content Side */}
        <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-rose-100 rounded-full border border-amber-200">
              <Star className="w-4 h-4 text-amber-600 mr-2" />
              <span className="text-sm font-medium text-amber-800">Swiss Luxury Skincare</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block bg-gradient-to-r from-amber-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
                {brandInfo.name}
              </span>
              <span className="block text-3xl lg:text-4xl mt-4 text-gray-700 font-light">
                Skincare Collection
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-light text-gray-600 italic">
              {brandInfo.tagline}
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {brandInfo.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-700 hover:to-rose-600 text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Shop Collection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1"
            >
              Take Skin Quiz
            </Button>
          </div>

          {/* Product highlights */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full mr-3"></div>
              6 Premium Products
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full mr-3"></div>
              Dermatologist Tested
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mr-3"></div>
              Swiss Formulated
            </div>
            <div className="flex items-center text-gray-600">
              <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full mr-3"></div>
              Cruelty-Free & Vegan
            </div>
          </div>
        </div>

        {/* Product Showcase Side */}
        <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full blur-3xl opacity-30 scale-110"></div>
            
            {/* Main product showcase */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <img 
                src={heroImages.mainProduct}
                alt="LUMINA Skincare Collection"
                className="w-full max-w-lg mx-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Featured product badges */}
            <div className="absolute top-8 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-amber-200">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">Bestseller</div>
                <div className="text-sm text-amber-600">Vitamin C Serum</div>
                <div className="flex items-center justify-center mt-1">
                  <Star className="w-3 h-3 text-amber-400 fill-current mr-1" />
                  <span className="text-xs text-gray-600">4.9 (2.8k)</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-12 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-rose-200">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">New Launch</div>
                <div className="text-sm text-rose-600">Eye Renewal</div>
                <div className="flex items-center justify-center mt-1">
                  <Star className="w-3 h-3 text-amber-400 fill-current mr-1" />
                  <span className="text-xs text-gray-600">4.8 (987)</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-20 -left-10 animate-bounce-slow">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full opacity-60 blur-sm"></div>
            </div>
            <div className="absolute bottom-20 -right-10 animate-bounce-slow" style={{animationDelay: '1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-orange-100 rounded-full opacity-60 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;