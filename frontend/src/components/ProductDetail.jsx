import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Check, 
  Shield, 
  Truck, 
  RotateCcw,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { products } from './mockData';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showFullIngredients, setShowFullIngredients] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setIsAddedToCart(true);
      setTimeout(() => setIsAddedToCart(false), 2000);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/" className="text-amber-600 hover:text-amber-700">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  const productImages = [product.image, product.image, product.image]; // Mock multiple images

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-amber-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-amber-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-amber-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Image Thumbnails */}
            <div className="flex space-x-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-amber-500' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge className={`${
                  product.badge === 'Bestseller' ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                  product.badge === 'Oil Control' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                  product.badge === 'Anti-Aging' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                  product.badge === 'Hydrating' ? 'bg-gradient-to-r from-teal-500 to-emerald-500' :
                  product.badge === 'Weekly Treatment' ? 'bg-gradient-to-r from-red-500 to-rose-500' :
                  'bg-gradient-to-r from-indigo-500 to-purple-500'
                } text-white border-none`}>
                  {product.badge}
                </Badge>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge className="bg-red-500 text-white">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-lg">
              {product.description}
            </p>

            {/* Key Benefits */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Benefits:</h3>
              <div className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skin Type */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Best for:</h3>
              <div className="flex flex-wrap gap-2">
                {product.skinType.map((type, index) => (
                  <Badge key={index} variant="outline" className="text-amber-700 border-amber-300">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-semibold text-gray-900">Quantity:</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 text-lg font-semibold rounded-full transition-all duration-300 ${
                    isAddedToCart
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-700 hover:to-rose-600'
                  } text-white`}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {isAddedToCart ? 'Added to Cart!' : `Add to Cart • $${(product.price * quantity)}`}
                </Button>
                
                <Button variant="outline" size="lg" className="px-6">
                  <Heart className="w-5 h-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="px-6">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">30-Day</div>
                <div className="text-xs text-gray-600">Money Back</div>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Free Shipping</div>
                <div className="text-xs text-gray-600">On orders $150+</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Easy Returns</div>
                <div className="text-xs text-gray-600">Hassle-free</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="ingredients" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="usage">How to Use</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ingredients" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Key Ingredients</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {product.keyIngredients.map((ingredient, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{ingredient.name}</h4>
                      <p className="text-gray-600">{ingredient.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="usage" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>How to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Application:</h4>
                      <p className="text-gray-700">{product.usage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tips:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Use on clean, dry skin</li>
                        <li>Allow to absorb for 60 seconds before applying moisturizer</li>
                        <li>Use consistently for best results</li>
                        <li>Always follow with SPF during the day</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-gray-500">
                    <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Reviews feature coming soon!</p>
                    <p className="text-sm">Be the first to share your experience</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Free Shipping</h4>
                    <p className="text-gray-600">Orders over $150 qualify for free standard shipping</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Delivery Times</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Standard Shipping: 3-5 business days</li>
                      <li>• Express Shipping: 1-2 business days</li>
                      <li>• International: 7-14 business days</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;