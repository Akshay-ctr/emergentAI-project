import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Leaf, Beaker, Gem, Droplets } from 'lucide-react';
import { products, heroImages } from './mockData';

const IngredientsSection = () => {
  const [activeIngredient, setActiveIngredient] = useState(0);

  const ingredientIcons = [Beaker, Gem, Leaf, Droplets];

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200 mb-4">
            Premium Ingredients
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Science Meets Nature
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each ingredient is carefully selected and clinically tested to deliver maximum efficacy and exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Ingredients List */}
          <div className="space-y-6">
            {products[0].keyIngredients.map((ingredient, index) => {
              const IconComponent = ingredientIcons[index];
              const isActive = activeIngredient === index;
              
              return (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${
                    isActive 
                      ? 'ring-2 ring-amber-400 shadow-xl bg-gradient-to-r from-amber-50 to-rose-50' 
                      : 'hover:shadow-lg border-gray-200'
                  }`}
                  onClick={() => setActiveIngredient(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-amber-400 to-rose-400 shadow-lg' 
                          : 'bg-gradient-to-br from-gray-100 to-gray-200'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                          isActive ? 'text-amber-800' : 'text-gray-800'
                        }`}>
                          {ingredient.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {ingredient.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Ingredient Visualization */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImages.ingredients}
                alt="Premium skincare ingredients"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating info cards */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-white/95 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {products[0].keyIngredients[activeIngredient].name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Active ingredient #{activeIngredient + 1}
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center">
                        {React.createElement(ingredientIcons[activeIngredient], { 
                          className: "w-5 h-5 text-white" 
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full opacity-60 blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-60 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="mt-24">
          <Card className="bg-gradient-to-r from-amber-50 to-rose-50 border-amber-200">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900">
                How to Use
              </CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Application Method</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {serumProduct.usage}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      Best applied to clean, dry skin
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                      Allow 60 seconds before applying moisturizer
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      Use consistently for optimal results
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-100 to-rose-100 rounded-full mb-4">
                    <Droplets className="w-10 h-10 text-amber-600" />
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-2xl text-gray-800">{serumProduct.volume}</span>
                    <br />
                    Premium bottle size
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;