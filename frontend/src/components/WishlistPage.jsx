import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, ShoppingCart, Eye, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const WishlistPage = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 border-pink-200 mb-4">
            Your Favorites
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Wishlist
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Save your favorite products and never miss out on the items you love
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-slate-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your wishlist is empty</h2>
            <p className="text-slate-600 mb-8">Start adding products you love to keep track of them</p>
            <Link to="/products">
              <Button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white">
                Browse Products
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-slate-600">
                {items.length} {items.length === 1 ? 'item' : 'items'} in your wishlist
              </p>
              {items.length > 0 && (
                <Button
                  variant="outline"
                  onClick={clearWishlist}
                  className="text-slate-600 border-slate-300 hover:bg-slate-50"
                >
                  Clear All
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                      <Link 
                        to={`/product/${product.id}`}
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 shadow-lg"
                      >
                        <Eye className="w-4 h-4 text-slate-600" />
                      </Link>
                    </div>

                    <Badge className={`absolute top-4 left-4 ${
                      product.badge === 'Bestseller' ? 'bg-gradient-to-r from-indigo-500 to-purple-500' :
                      product.badge === 'Oil Control' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                      product.badge === 'Anti-Aging' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                      product.badge === 'Hydrating' ? 'bg-gradient-to-r from-teal-500 to-emerald-500' :
                      product.badge === 'Weekly Treatment' ? 'bg-gradient-to-r from-red-500 to-rose-500' :
                      'bg-gradient-to-r from-indigo-500 to-purple-500'
                    } text-white border-none shadow-lg`}>
                      {product.badge}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-3">{product.category} • {product.volume}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-slate-900">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-slate-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Move to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;