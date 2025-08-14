import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, Heart, ShoppingCart, Info, Eye } from 'lucide-react';
import { products, categories } from './mockData';
import { useCart } from '../context/CartContext';

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => 
        product.category.toLowerCase().replace(' ', '-') === selectedCategory ||
        (selectedCategory === 'moisturizer' && product.category === 'Night Cream')
      );

  useEffect(() => {
    setVisibleProducts([]);
    filteredProducts.forEach((_, index) => {
      setTimeout(() => {
        setVisibleProducts(prev => [...prev, index]);
      }, index * 150);
    });
  }, [selectedCategory, filteredProducts]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-amber-50 to-rose-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 border-purple-200 mb-4">
            Premium Collection
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Perfect Match
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each LUMINA product is crafted with clinically-proven ingredients and luxurious textures for transformative results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-rose-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300 hover:bg-amber-50'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => {
            const isVisible = visibleProducts.includes(index);
            const isHovered = hoveredProduct === product.id;
            
            return (
              <Card 
                key={product.id}
                className={`group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 bg-white border-gray-100 overflow-hidden ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Product Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      product.badge === 'Bestseller' ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                      product.badge === 'Oil Control' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                      product.badge === 'Anti-Aging' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                      product.badge === 'Hydrating' ? 'bg-gradient-to-r from-teal-500 to-emerald-500' :
                      product.badge === 'Weekly Treatment' ? 'bg-gradient-to-r from-red-500 to-rose-500' :
                      'bg-gradient-to-r from-indigo-500 to-purple-500'
                    } text-white border-none shadow-lg`}>
                      {product.badge}
                    </Badge>
                  </div>

                  {/* Quick Actions */}
                  <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                    isHovered ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg">
                      <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                    </button>
                    <Link 
                      to={`/product/${product.id}`}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
                    >
                      <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500" />
                    </Link>
                  </div>

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-red-500 text-white">
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{product.category} • {product.volume}</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviewCount.toLocaleString()})
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.slice(0, 2).map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs text-gray-500 border-gray-200">
                          {benefit.split(' ').slice(0, 3).join(' ')}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-700 hover:to-rose-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>

                  {/* Skin Type */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      Best for: {product.skinType.join(', ')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which product is right for you?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-amber-400 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1"
          >
            Take Our Skin Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;