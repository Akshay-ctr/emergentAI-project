import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Sparkles, Star, ArrowRight } from 'lucide-react';
import { brandInfo, products } from './mockData';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
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
            <Sparkles className={`text-indigo-400 ${Math.random() > 0.5 ? 'w-3 h-3' : 'w-2 h-2'}`} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content Side */}
        <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full border border-indigo-200">
              <Star className="w-4 h-4 text-indigo-600 mr-2" />
              <span className="text-sm font-medium text-indigo-800">Swiss Luxury Skincare</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                {brandInfo.name}
              </span>
              <span className="block text-3xl lg:text-4xl mt-4 text-slate-700 font-light">
                Skincare Collection
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-light text-slate-600 italic">
              {brandInfo.tagline}
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {brandInfo.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/skin-quiz">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1"
              >
                Take Skin Quiz
              </Button>
            </Link>
          </div>

          {/* Product highlights */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-slate-600">
              <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3"></div>
              6 Premium Products
            </div>
            <div className="flex items-center text-slate-600">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mr-3"></div>
              Dermatologist Tested
            </div>
            <div className="flex items-center text-slate-600">
              <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full mr-3"></div>
              Swiss Formulated
            </div>
            <div className="flex items-center text-slate-600">
              <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3"></div>
              Cruelty-Free & Vegan
            </div>
          </div>
        </div>

        {/* Product Showcase Side */}
        <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 scale-110"></div>
            
            {/* Main product showcase */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1617213226302-99a82b62626f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwc2tpbmNhcmV8ZW58MHx8fHwxNzU1MTQwMzg2fDA&ixlib=rb-4.1.0&q=85"
                alt="LUMINA Skincare Collection"
                className="w-full max-w-lg mx-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Featured product badges */}
            <div className="absolute top-8 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-indigo-200">
              <div className="text-center">
                <div className="text-lg font-bold text-slate-900">Bestseller</div>
                <div className="text-sm text-indigo-600">Vitamin C Serum</div>
                <div className="flex items-center justify-center mt-1">
                  <Star className="w-3 h-3 text-indigo-400 fill-current mr-1" />
                  <span className="text-xs text-slate-600">4.9 (2.8k)</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-12 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-purple-200">
              <div className="text-center">
                <div className="text-lg font-bold text-slate-900">New Launch</div>
                <div className="text-sm text-purple-600">Eye Renewal</div>
                <div className="flex items-center justify-center mt-1">
                  <Star className="w-3 h-3 text-purple-400 fill-current mr-1" />
                  <span className="text-xs text-slate-600">4.8 (987)</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-20 -left-10 animate-bounce-slow">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60 blur-sm"></div>
            </div>
            <div className="absolute bottom-20 -right-10 animate-bounce-slow" style={{animationDelay: '1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full opacity-60 blur-sm"></div>
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